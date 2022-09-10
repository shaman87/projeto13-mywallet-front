import { Link } from "react-router-dom";

import Records from "./Records";
import styled from "styled-components";
import exitIcon from "../assets/img/exit-icon.svg";
import addIcon from "../assets/img/plus-circle-outlined.svg"
import removeIcon from "../assets/img/minus-circle-outlined.svg"

const records = [
    {id: 1, date: "30/11", description: "Almoço mãe", amount: "39,90", type: "output"}, 
    {id: 2, date: "27/11", description: "Mercado", amount: "542,54", type: "output"}, 
    {id: 3, date: "26/11", description: "Compras churrasco", amount: "67,60", type: "output"}, 
    {id: 4, date: "20/11", description: "Empréstimo Maria", amount: "500,00", type: "input"}, 
    {id: 5, date: "15/11", description: "Salário", amount: "3000,00", type: "input"}
];

export default function MainScreen() {

    return (
        <Container>
            <Header>
                <h1>Olá, Fulano</h1>
                <img src={exitIcon} alt="Exit Icon" />
            </Header>

            <RecordsTable listLength={records.length}>
                {records.length > 0 ? (
                    records.map((record, index) => (
                        <Records
                            key={index}
                            id={record.id} 
                            date={record.date} 
                            description={record.description} 
                            amount={record.amount} 
                            type={record.type} 
                        />
                    ))
                ) : (
                    <h3>Não há registros de entrada ou saída</h3>
                )}

                <span>
                    <h2>SALDO</h2>
                    <Amount>{2849.96}</Amount>
                </span>
            </RecordsTable>

            <Footer>
                <Link to="/new-input">
                    <Button>
                        <img src={addIcon} alt="add-icon" />
                        <p>Nova entrada</p>
                    </Button>
                </Link>

                <Link to="/new-output">
                    <Button>
                        <img src={removeIcon} alt="remove-icon" />
                        <p>Nova saída</p>
                    </Button>
                </Link>
            </Footer>
        </Container>
    );
}

const Container = styled.div`
    color: #FFFFFF;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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
    height: 446px;
    padding: 23px 12px 10px 12px;
    margin-bottom: 13px;
    border-radius: 5px;
    overflow-y: scroll;

    ::-webkit-scrollbar {
        width: 5px;
    }
    
    ::-webkit-scrollbar-track {
        background: rgba(0, 0, 0, 0.05)
    }
    
    ::-webkit-scrollbar-thumb {
        background-color: #DB84FD;
        border-radius: 5px;
    }

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
        height: 100%;
    }
`;

const Footer = styled.div`
    display: flex;
    justify-content: space-between;
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

const Amount = styled.div`
    color: #03AC00;
`;