import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import { Link, useParams } from "react-router-dom";
import { fetchPokemonItem } from "../../thunks/pokemonsThunks";
import Button from "@mui/material/Button";
import {
  DetailColumn,
  DetailColumns,
  PokemonSpec,
} from "./styles";
import PokemonMoves from "../PokemonMoves";
import PokemonStats from "../PokemonStats";
import { Loader, Title } from "../commonStyles";

const PokemonPage: FC = () => {
  const dispatch: Dispatch = useDispatch();
  const { data, loading } = useSelector((state: any) => state.pokemonItem);
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchPokemonItem(id || '') as any);
  }, [dispatch, id]);

  return (
    <div>
      {loading ?
        <Loader>Loading...</Loader> :
        <div>
          <Link to='/'>
            <Button variant="contained">
              Back
            </Button>
          </Link>
          <div>
            <Title>{data?.name}</Title>
            <PokemonSpec>Height: <span>{data?.height}</span></PokemonSpec>
            <PokemonSpec>Weight: <span>{data?.weight}</span></PokemonSpec>
          </div>
          <DetailColumns>
            <DetailColumn>
              <PokemonMoves pokemonMoves={data?.moves} />
            </DetailColumn>
            <DetailColumn>
              <PokemonStats pokemonStats={data?.stats} />
            </DetailColumn>
          </DetailColumns>
        </div>
      }
    </div>
  );
};

export default PokemonPage;
