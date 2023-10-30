import styled from "styled-components";

export const PokemonSpec = styled.div`
    margin: 15px 0;
    text-align: center;

    span {
        color: #1976d2;
    }
`;

export const DetailColumns = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    gap: 30px;
    @media screen and (max-width: 790px) {
        flex-direction: column-reverse;
    }
`;

export const DetailColumn = styled.div`
    width: 49%;
    @media screen and (max-width: 790px) {
        width: 100%;
    }
`;

export const AccordionWrapper = styled.div`
    margin: 10px 0;
`;