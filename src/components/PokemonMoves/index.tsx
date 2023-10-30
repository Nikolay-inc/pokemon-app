import { FC } from "react";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { AccordionWrapper, ColumnTitle, PokemonName } from "./styles";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import AccordionDetails from "@mui/material/AccordionDetails";
import Accordion from "@mui/material/Accordion";
import { IPokemonMovesProps } from "../../types";
import { StatItem } from "../commonStyles";

const PokemonMoves: FC<IPokemonMovesProps> = ({ pokemonMoves }) => {
  return (
    <>
      <ColumnTitle>Moves</ColumnTitle>
      {pokemonMoves?.map(({ move, version_group_details }: Record<string, any>) => (
        <AccordionWrapper key={move?.url}>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`${move?.name}-content`}
              id={`${move?.name}-header`}
            >
              <Typography><PokemonName>{move?.name}</PokemonName> Group Details</Typography>
            </AccordionSummary>
            <AccordionDetails>
              {
                version_group_details?.map((item: Record<string, any>, index: number) => (
                  <StatItem key={`${item?.move_learn_method?.name}-${index}`}>
                    <p>Learned Level: <span>{item?.level_learned_at}</span></p>
                    <p>Move Learn Method: <span>{item?.move_learn_method?.name}</span></p>
                    <p>Version Group: <span>{item?.version_group?.name}</span></p>
                  </StatItem>
                ))
              }
            </AccordionDetails>
          </Accordion>
        </AccordionWrapper>
      ))}
    </>
  );
};

export default PokemonMoves;
