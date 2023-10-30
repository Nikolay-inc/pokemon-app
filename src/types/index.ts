import { SetStateAction } from "react";

export interface IPokemon {
    name: string;
    url: string;
}

export interface IPaginationProps {
	pageHandler: SetStateAction<number>;
	itemsPerPage: number;
	paggeOffset: number;
	itemsNumber: number;
}

export interface IPokemonItemProps {
	pokemonName: string;
}

export interface IPokemonMovesProps {
	pokemonMoves: any[];
}

export interface IPokemonStatsProps {
	pokemonStats: any[];
}