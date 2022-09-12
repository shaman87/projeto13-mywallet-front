import { useContext, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { postTransactions } from "../services/myWalletService";
import styled from "styled-components";
import UserContext from "../contexts/UserContext";

export default function NewInput() {
    const navigate = useNavigate();
    const { transactionType, token } = useContext(UserContext);
    const [disabled, setDisabled] = useState(false);
    const [form, setForm] = useState({
        amount: "", 
        description: "", 
        type: transactionType
    });

    function handleForm(event) {
        setForm({
            ...form, 
            [event.target.name]: event.target.value
        });
    }    

    function newTransaction(event) {
        event.preventDefault();
        form.amount = form.amount.replace(",", ".");
        setDisabled(true);

        postTransactions(form, token)
            .then(resp => {
                setDisabled(false);
                navigate("/main-screen");
            })
            .catch(resp => {
                setDisabled(false);
                console.error(resp);
            });
    }

    if(token) {
        return (
            <Container>
                <Header>
                    {transactionType === "credit" ? (<h1>Nova entrada</h1>) : (<h1>Nova saída</h1>)}
                </Header>
    
                <Form onSubmit={newTransaction}>
                    <input 
                        type="text" 
                        name="amount" 
                        value={form.amount} 
                        placeholder="Valor" 
                        onChange={handleForm} 
                        disabled={disabled} 
                        required 
                    />
    
                    <input 
                        type="text" 
                        name="description" 
                        value={form.description} 
                        placeholder="Descrição" 
                        onChange={handleForm} 
                        disabled={disabled} 
                        required 
                    />
    
                    <Button type="submit">
                        {transactionType === "credit" ? ("Salvar entrada") : ("Salvar saída")}
                    </Button>
                </Form>
            </Container>
        );
    } else {
        return <Navigate to={"/"} />
    }
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
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 36px 0;

    input {
        font-size: 20px;
        height: 58px;
        margin-bottom: 13px;
        padding-left: 15px;
        border: none;
        border-radius: 5px;
    }

    input::placeholder {
        color: #000000;
    }

    input:focus {
        outline: 1px solid rgba(0, 0, 0, 0);
    }
`;

const Button = styled.button`
    background-color: #A328D6;
    color: #FFFFFF;
    font-size: 20px;
    font-weight: 700;
    height: 46px;
    border: none;
    border-radius: 5px;

    :hover {
        filter: brightness(1.1);
    }
`;