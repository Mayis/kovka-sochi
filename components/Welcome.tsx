import { Box } from "@mui/material";
import WelcomeText from "./WelcomeText";
function Welcome() {
  return (
    <Box
      sx={{
        width: "100%",
        height: { xs: "90vh", sm: "110vh" },
        backgroundImage: "url(/images/main-back.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed"
      }}>
      <WelcomeText />
    </Box>
  );
}
export default Welcome;
