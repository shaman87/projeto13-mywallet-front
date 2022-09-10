import { Link } from "react-router-dom";
import styled from "styled-components";

export default function SignUpScreen() {
    function handleForm() {
        return console.log("teste");
    }
    
    return (
        <Container>
            <Title>
                <h1>MyWallet</h1>
            </Title>

            <Form onSubmit={handleForm}>
                <input type="text" placeholder="Nome" />
                <input type="email" placeholder="E-mail" />
                <input type="password" placeholder="Senha" />
                <input type="password" placeholder="Confirme a senha" />
                <Button type="submit">Cadastrar</Button>
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