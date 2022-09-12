import { Navigate, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { getTransactions, postLogOut } from "../services/myWalletService";
import Records from "./Records";
import styled from "styled-components";
import exitIcon from "../assets/img/exit-icon.svg";
import addIcon from "../assets/img/plus-circle-outlined.svg"
import removeIcon from "../assets/img/minus-circle-outlined.svg"
import UserContext from "../contexts/UserContext";

export default function MainScreen() {
    const { userName, token, setToken, setTransactionType } = useContext(UserContext);
    const [transactionsList, setTransactionsList] = useState([]);
    const navigate = useNavigate();
    let sum = 0;

    useEffect(() => {
        getTransactions(token)
            .then(resp => {
                setTransactionsList(resp.data);
            })
            .catch(resp => {
                console.error(resp);
            });
    }, []);

    transactionsList.forEach(value => {
        if(value.type === "credit") {
            return sum += (100 * value.amount);
        } else {
            return sum -= (100 * value.amount);
        }
    });

    function logout() {
        const signOut = window.confirm("Confirma que deseja sair?");

        if(signOut) {
            postLogOut(token)
                .then(resp => {
                    setToken("");
                    navigate("/");
                })
                .catch(resp => {
                    console.error(resp);
                });
        }
    }

    function newTransaction(type) {
        setTransactionType(type);
        navigate("/new-transaction");
    }

    if(token) {
        return (
            <Container>
                <Header>
                    <h1>Olá, {userName}</h1>
                    <img src={exitIcon} onClick={logout} alt="Exit Icon" />
                </Header>
    
                <RecordsTable listLength={transactionsList.length}>
                    {transactionsList.length > 0 ? (
                        transactionsList.map((record, index) => (
                            <Records
                                key={index} 
                                date={record.date} 
                                description={record.description} 
                                amount={record.amount} 
                                type={record.type} 
                            />
    
                        ))
                    ) : (
                        <h3>Não há registros de entrada ou saída</h3>
                    )}
    
                    <FooterRecordsTable listLength={transactionsList.length}>
                        <h2>SALDO</h2>
                        <Amount sum={sum}>{(sum/100).toFixed(2).toString().replace(".", ",")}</Amount>
                    </FooterRecordsTable>
                </RecordsTable>
    
                <Footer>
                    <Button onClick={() => newTransaction("credit")}>
                        <img src={addIcon} alt="add-icon" />
                        <p>Nova entrada</p>
                    </Button>
    
                    <Button onClick={() => newTransaction("debit")}>
                        <img src={removeIcon} alt="remove-icon" />
                        <p>Nova saída</p>
                    </Button>
                </Footer>
            </Container>
        );
    } else {
        return <Navigate to="/" />
    }
}

const Container = styled.div`
    color: #FFFFFF;
    display: flex;
    flex-direction: column;
    height: 100vh;
    padding: 25px;
`;

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 26px;
    font-weight: 700;
    margin-bottom: 25px;

    img {
        cursor: pointer;
    }
`;

const RecordsTable = styled.div`
    background-color: #FFFFFF;
    display: flex;
    flex-direction: column;
    justify-content: ${props => props.listLength > 0 ? "flex-start" : "center"};
    align-items: ${props => props.listLength > 0 ? "space-between" : "center"};
    height: 100%;
    padding: 23px 12px 10px 12px;
    margin-bottom: 13px;
    border-radius: 5px;
    position: relative;

    h2 {
        color: #000000;
        font-size: 17px;
        font-weight: 700;
    }

    h3 {
        color: #868686;
        text-align: center;
        font-size: 20px;
        width: 180px;
    }

    span {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
    }
`;

const Footer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
`;

const Button = styled.div`
    background-color: #A328D6;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 155px;
    height: 114px;
    padding: 10px;
    border-radius: 5px;

    :hover {
        filter: brightness(1.1);
    }

    p {
        font-size: 17px;
        font-weight: 700;
        width: 64px;
    }

    img {
        width: 25px;
        height: 25px;
    }
`;

const FooterRecordsTable = styled.div`
    display: flex;
    justify-content: space-between;
    position: absolute;
    width: 100%;
    padding: ${props => props.listLength > 0 ? "0 22px 10px 0" : "0 12px 10px 12px"};
    bottom: 0;
`;

const Amount = styled.div`
    color: ${props => props.sum > 0 ? "#03AC00" : "#C70000"};
`;