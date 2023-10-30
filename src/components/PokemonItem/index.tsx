import { FC } from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { PokemonListItem } from "./styles";
import { IPokemonItemProps } from "../../types";

const PokemonItem: FC<IPokemonItemProps> = ({ pokemonName }) => {
  return (
    <PokemonListItem>
      <span>{pokemonName}</span>
      <Link to={`/pokemon/${pokemonName}`}>
        <Button variant="contained">
					Details
        </Button>
      </Link>
    </PokemonListItem>
  );
};

export default PokemonItem;
