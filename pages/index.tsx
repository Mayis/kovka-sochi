import type { NextPage } from "next";

import Welcome from "../components/Welcome";
import Other from "../components/Other";
import Header from "../components/Header";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Welcome />
      <Other />
    </>
  );
};

export default Home;
