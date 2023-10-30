import { styled } from "styled-components";

export const PokemonImageWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px;
`;

export const PokemonImage = styled.img`
    max-width: 300px;
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
`;

export const ColumnTitle = styled.div`
    font-size: 30px;
    font-weight: 400;
    text-align: center;
`;

export const PokemonName = styled.span`
    text-transform: capitalize;
    color: #1976d2;
`;