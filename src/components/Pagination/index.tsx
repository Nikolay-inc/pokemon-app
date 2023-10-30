import { FC } from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

const Pagination: FC<any> = ({ pageHandler, itemsPerPage, paggeOffset, itemsNumber }) => {
  return (
    <Stack justifyContent="center" direction="row" spacing={2}>
      <Button
        variant="contained"
        onClick={() => pageHandler(-itemsPerPage)}
        disabled={paggeOffset <= 0}
      >
				Previos Page
      </Button>
      <Button
        variant="contained"
        onClick={() => pageHandler(itemsPerPage)}
        disabled={paggeOffset > itemsNumber}
      >
				Next Page
      </Button>
    </Stack>
  );
};

export default Pagination;
