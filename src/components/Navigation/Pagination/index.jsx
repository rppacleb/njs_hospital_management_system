import React from "react";
import { Pagination as MUIPagination } from "@mui/material";
import usePaginationStyle from "./usePaginationStyle";
import { Container } from "@src/components/Layout";

const Pagination = (props) => {
  const {
    count = 10,
    size = "small",
    disabled = false,
    onChange = () => {},
    showLastButton = false,
    showFirstButton = false,
  } = props;
  const style = usePaginationStyle();

  return (
    <Container
      fullWidth
      sx={{ container: style?.mainContainer, content: style?.widthControl }}
    >
      <MUIPagination
        size={size}
        sx={style?.mainPagination}
        count={count}
        shape="rounded"
        variant="outlined"
        onChange={onChange}
        disabled={disabled}
        showLastButton={showLastButton}
        showFirstButton={showFirstButton}
        // color='primary' @DESC: Dont remove please -Jehu
      />
    </Container>
  );
};

export default Pagination;
