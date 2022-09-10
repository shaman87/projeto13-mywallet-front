import styled from "styled-components";

export default function Records({ id, date, description, amount, type }) {
    return (
        <Record>
            <div>
                <Date>{date}</Date>
                <div>{description}</div>
            </div>
            <Amount type={type}>{amount}</Amount>
        </Record>
    );
}

const Record = styled.div`
    color: #000000;
    font-size: 16px;
    display: flex;
    justify-content: space-between;

    div {
        display: flex;
        padding-bottom: 10px;
    }
`;

const Date = styled.div`
    color: #C6C6C6;
    width: 50px;
`;

const Amount = styled.div`
    color: ${props => props.type === "input" ? "#03AC00" : "#C70000"};
`;