import { styled } from "styled-components";

export const PokemonListItem = styled.div`
    margin: 18px 9px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid gray;
    border-radius: 5px;
    padding: 10px;

    span {
        text-transform: capitalize;
    }
`;