import React from "react";

// components
import { Box } from "@mui/material";
import Gallery from "./Gallery";
import MoreService from "./MoreService";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";

function Other() {
  return (
    <Box
      sx={{
        width: "100%",
        backgroundImage: "url(/images/full-back.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed"
      }}>
      <Gallery />
      <MoreService />
      <AboutUs />
      <ContactUs />
    </Box>
  );
}

export default Other;
