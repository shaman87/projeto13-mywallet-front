import styled from "styled-components";


export default function NewOutput() {
    function handleForm() {
        return console.log("teste");
    }    

    return (
        <Container>
            <Header>
                <h1>Nova saída</h1>
            </Header>

            <Form onSubmit={handleForm}>
                <input type="text" placeholder="Valor" />
                <input type="text" placeholder="Descrição" />

                <Button type="submit">Salvar saída</Button>
            </Form>
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
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    margin: 36px 0;

    input {
        font-size: 20px;
        width: 326px;
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
    width: 326px;
    height: 46px;
    border: none;
    border-radius: 5px;

    :hover {
        filter: brightness(1.1);
    }
`;