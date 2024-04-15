import { Box, Container, useMediaQuery, useTheme } from "@mui/material";
import { redirect } from "@src/utils/common";
import { useRouter } from "next/router";
import { SwiperSlide } from "swiper/react";
import CoreSwiper from "@src/components/DataDisplay/Swiper";
import { __LOCALDB } from "@src/utils/database";
import { useState } from "react";

const Main = ({ datas }) => {
  const router = useRouter();
  const theme = useTheme();
  const { palette } = theme;
  const isSM = useMediaQuery(theme.breakpoints.up("sm"));

  const [data, setData] = useState(null);

  const handleAddData = () => {
    __LOCALDB.create("tbl_users", { name: "John Doe", age: 30 }).then(() => {
      console.log("Data added successfully");
    });
  };

  const handleGetData = () => {
    __LOCALDB.read(1).then((result) => {
      setData(result);
    });
  };

  const handleUpdateData = () => {
    __LOCALDB.update(1, { name: "Jane Doe", age: 35 }).then(() => {
      console.log("Data updated successfully");
    });
  };

  const handleDeleteData = () => {
    __LOCALDB.delete(4).then(() => {
      console.log("Data deleted successfully");
    });
  };

  const redirectHandler = (action, url) => {
    if (action !== "_blank" && action !== "popup") return router.push(url);
    redirect(action, url);
  };

  return (
    <Box height="calc(100% - 70px)" width="100%" color={palette.primary.light}>
      <Container
        maxWidth="container"
        disableGutters
        sx={{ py: { sm: "96px", xxs: "48px" } }}
      >
        <button onClick={handleAddData}>Add Data</button>
        <button onClick={handleGetData}>Get Data</button>
        <button onClick={handleUpdateData}>Update Data</button>
        <button onClick={handleDeleteData}>Delete Data</button>
        {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
      </Container>
    </Box>
  );
};

export default Main;
