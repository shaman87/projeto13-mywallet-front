import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { postSignUp } from "../services/myWalletService";
import styled from "styled-components";

export default function SignUpScreen() {
    const navigate = useNavigate();
    const [disabled, setDisabled] = useState(false);
    const [form, setForm] = useState({
        name: "", 
        email: "", 
        password: "", 
        confirmPassword: ""
    });

    function handleForm(event) {
        setForm({
            ...form, 
            [event.target.name]: event.target.value
        });
    }
    
    function signUp(event) {
        event.preventDefault();

        setDisabled(true);

        postSignUp(form)
            .then(resp => {
                setDisabled(false);
                alert("usuário criado com sucesso!");
                navigate("/");
            })
            .catch(resp => {
                setDisabled(false);
                console.error(resp);
                if(resp.response.status === 409) return alert("E-mail já cadastrado!");
                if(resp.response.status === 422) return alert("Confirme a senha corretamente");
            });
    }

    return (
        <Container>
            <Title>
                <h1>MyWallet</h1>
            </Title>

            <Form onSubmit={signUp}>
                <input 
                    type="text" 
                    name="name" 
                    value={form.name} 
                    placeholder="Nome" 
                    onChange={handleForm} 
                    disabled={disabled} 
                    required 
                />

                <input 
                    type="email" 
                    name="email" 
                    value={form.email} 
                    placeholder="E-mail" 
                    onChange={handleForm} 
                    disabled={disabled} 
                    required 
                />

                <input 
                    type="password" 
                    name="password" 
                    value={form.password} 
                    placeholder="Senha" 
                    onChange={handleForm} 
                    disabled={disabled} 
                    required 
                />

                <input 
                    type="password" 
                    name="confirmPassword" 
                    value={form.confirmPassword} 
                    placeholder="Confirme a senha" 
                    onChange={handleForm} 
                    disabled={disabled} 
                    required 
                />
                
                <Button type="submit" disabled={disabled}>Cadastrar</Button>
            </Form>

            <Link to={"/"}>
                <p>Já tem uma conta? Entre agora!</p>
            </Link>
        </Container>
    );
}

const Container = styled.div`
    color: #FFFFFF;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 25px;
    margin: 15vh 0 0 0;

    p {
        font-size: 15px;
        font-weight: 700;
    }
`;

const Title = styled.div`
    font-family: 'Saira Stencil One', cursive;
    font-size: 32px;
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