import { Box } from "@mui/material";
import WelcomeText from "./WelcomeText";
import { Element } from "react-scroll";
function Welcome() {
  return (
    <Element name="Главная">
      <Box
        sx={{
          width: "100%",
          height: { xs: "90vh", sm: "100vh" },
          backgroundImage: "url(/images/main-back.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: { sm: "fixed" }
        }}>
        <WelcomeText />
      </Box>
    </Element>
  );
}
export default Welcome;
