import { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPokemonTypes, fetchPokemons, fetchPokemonsByType } from "../../thunks/pokemonsThunks";
import { Dispatch } from "redux";
import { IPokemon } from "../../types";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import useDebounce from "../../hooks";
import { ListSettings, ListWrapper } from "./styles";
import Pagination from "../Pagination";
import PokemonItem from "../PokemonItem";
import { ErrorMessage, Loader, Title } from "../commonStyles";

const PokemonList: FC = () => {
  const dispatch: Dispatch = useDispatch();
  const { data, loading, error } = useSelector((state: any) => state.pokemons);
  const typesData = useSelector((state: any) => state.pokemonTypes);
  const pokemonsByType = useSelector((state: any) => state.pokemonsByType);
  const pokemonsByTypeList = pokemonsByType?.data?.pokemon;

  const [paggeOffset, setPageOffset] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(20);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredPokemons, setFilteredPokemons] = useState([]);
  const [pokemonType, setPokemonType] = useState("");
  const [isItemsFound, setIsItemsFound] = useState(true);
  const debounceDelay = 300;

  const debouncedSearchQuery = useDebounce(searchQuery, debounceDelay);

  const handleItemsPerPage = (e: SelectChangeEvent) => {
    setItemsPerPage(Number(e.target.value));
    setPageOffset(0);
  };

  const handlePokemonType = (e: SelectChangeEvent) => {
    setPokemonType(e.target.value);
  };

  const pageHandler = (pageOffset: number) => {
    setPageOffset(prevState => prevState + pageOffset);
  };

  useEffect(() => {
    dispatch(fetchPokemonTypes() as any);
  }, [dispatch]);

  useEffect(() => {
    if(pokemonType !== "") {
      dispatch(fetchPokemonsByType(pokemonType) as any);
    }
  }, [dispatch, pokemonType]);

  useEffect(() => {
    dispatch(fetchPokemons(paggeOffset, itemsPerPage) as any);
  }, [dispatch, paggeOffset, itemsPerPage]);

  useEffect(() => {
    const query = debouncedSearchQuery.trim().toLowerCase();

    if (query === '') {
      setFilteredPokemons([]);
      setIsItemsFound(true);
    } else {
      let filtered = [];
      if(pokemonsByTypeList?.length && pokemonType) {
        filtered = pokemonsByTypeList?.filter(({ pokemon }: {pokemon: IPokemon}) =>
          pokemon.name.toLowerCase().includes(query)
        );
      } else {
        filtered = data?.results.filter((pokemon: IPokemon) =>
          pokemon.name.toLowerCase().includes(query)
        );
      }
      if(filtered?.length === 0) {
        setIsItemsFound(false);
      } else {
        setIsItemsFound(true);
        setFilteredPokemons(filtered);
      }
    }
  }, [debouncedSearchQuery, data?.results, pokemonsByTypeList]);

  if (error) {
    return <ErrorMessage>Error: {error.message}</ErrorMessage>;
  }

  return (
    <ListWrapper>
      <Title>Pokemon List</Title>
      {loading ?
        <Loader>Loading...</Loader> :
        <div>
          <ListSettings>
            <FormControl sx={{ m: 1, minWidth: 250 }} size="small">
              <TextField
                label="Search by name"
                id="search-input"
                defaultValue=""
                size="small"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 250 }} size="small">
              <InputLabel id="select-pokemon-type">Pokemon Type</InputLabel>
              <Select
                labelId="select-pokemon-type"
                id="pokemon-type"
                value={pokemonType}
                label="Pokemon Type"
                onChange={handlePokemonType}
              >
                <MenuItem value="">All</MenuItem>
                {typesData?.data?.results?.length && typesData?.data?.results.map((type: Record<string, string>) => (
                  <MenuItem key={type?.name} value={type?.name}>{type?.name}</MenuItem>
                ))}
              </Select>
            </FormControl>
            {!pokemonType &&
            <FormControl sx={{ m: 1, minWidth: 150 }} size="small">
              <InputLabel id="select-item-per-page">Items per page</InputLabel>
              <Select
                labelId="select-item-per-page"
                id="item-per-page"
                value={itemsPerPage.toString()}
                label="Items per page"
                onChange={handleItemsPerPage}
              >
                <MenuItem value={10}>10</MenuItem>
                <MenuItem value={20}>20</MenuItem>
                <MenuItem value={30}>30</MenuItem>
                <MenuItem value={40}>40</MenuItem>
                <MenuItem value={50}>50</MenuItem>
              </Select>
            </FormControl>
            }
          </ListSettings>
          {!isItemsFound && <ErrorMessage>No Pokemons Found According Your Search Params</ErrorMessage>}
          <div>
            {pokemonsByTypeList?.length > 0 && pokemonType ?
              (filteredPokemons?.length > 0 ?
                filteredPokemons : pokemonsByTypeList)?.map(({ pokemon }: {pokemon: IPokemon}) => (
                <PokemonItem key={pokemon.name} pokemonName={pokemon.name} />
              )) :
              (filteredPokemons?.length > 0 ?
                filteredPokemons : data?.results)?.map((pokemon: IPokemon) => (
                <PokemonItem key={pokemon.name} pokemonName={pokemon.name} />
              ))
            }
          </div>
          {!pokemonType &&
            <Pagination
              pageHandler={pageHandler}
              itemsPerPage={itemsPerPage}
              paggeOffset={paggeOffset}
              itemsNumber={data?.count}
            />
          }
        </div>
      }
    </ListWrapper>
  );
};

export default PokemonList;
