import styled from "styled-components";

export const Title = styled.h1`
    font-size: 36px;
    font-weight: 400;
    text-align: center;
    text-transform: capitalize;
`;

export const Loader = styled.div`
    font-size: 32px;
    margin-top: 60px;
    text-align: center;
`;

export const StatItem = styled.div`
    border: 1px solid gray;
    border-radius: 5px;
    margin: 10px;
    padding: 10px;
    background-color: aliceblue;

    span {
        color: #1976d2;
        text-transform: capitalize;
    }
`;

export const ErrorMessage = styled.div`
    font-size: 32px;
    margin: 30px 0;
    text-align: center;
    color: red;
`;