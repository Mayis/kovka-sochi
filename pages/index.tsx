import type { NextPage } from "next";
import Welcome from "../components/Welcome";
import Header from "../components/Header";
import { Box } from "@mui/material";

const Home: NextPage = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "110vh",
        backgroundImage: "url(/images/main-back.jpg)",
        backgroundSize: "cover",
        backgroundAttachment: "fixed"
      }}>
      <Header />
      <Welcome />
    </Box>
  );
};

export default Home;
