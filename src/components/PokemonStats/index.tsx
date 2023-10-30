import { FC } from "react";
import { ColumnTitle, PokemonImage, PokemonImageWrapper, PokemonName } from "./styles";
import { imageSrc } from "../../const";
import { IPokemonStatsProps } from "../../types";
import { StatItem } from "../commonStyles";


const PokemonStats: FC<IPokemonStatsProps> = ({ pokemonStats }) => {
  return (
    <>
      <PokemonImageWrapper>
        <PokemonImage
          src={imageSrc}
          alt="Pokemon"
        />
      </PokemonImageWrapper>
      <ColumnTitle>Stats</ColumnTitle>
      {
        pokemonStats?.map((item: Record<string, any>, index: number) => (
          <StatItem key={`${item?.stat?.name}-${index}`}>
            <PokemonName>{item?.stat?.name}</PokemonName>
            <div>Base Stat: <span>{item?.base_stat}</span></div>
            <div>Effort: <span>{item?.effort}</span></div>
          </StatItem>
        ))
      }
    </>
  );
};

export default PokemonStats;
