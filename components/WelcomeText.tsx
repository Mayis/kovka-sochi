import React from "react";

// components
import { Box, Button, Grid, Typography } from "@mui/material";
import { Item } from "./custom/styledComponents";

//icons
import PlaceIcon from "@mui/icons-material/Place";

const welcomeTxt = {
  best: "ЛУЧШИЕ",
  work: "В ЭТОМ ДЕЛЕ"
};
function WelcomeText() {
  const { best, work } = welcomeTxt;
  return (
    <Grid container height={{ xs: "70vh", md: "80vh" }} alignItems={"center"}>
      <Grid item container xs={12} spacing={10}>
        <Grid item xs={12}>
          <Item sx={{ flexDirection: "column" }}>
            <Typography
              color="secondary"
              variant="subtitle2"
              sx={{ fontSize: { xs: 60, sm: 100, md: 120, lg: 180 } }}>
              {best}
            </Typography>
            <Typography
              color="secondary"
              variant="h1"
              sx={{ fontSize: { xs: 25, sm: 30, md: 50 } }}>
              {work}
            </Typography>
          </Item>
        </Grid>
        <Grid item xs={12}>
          <Item>
            <Button
              startIcon={<PlaceIcon />}
              variant="contained"
              sx={{
                width: { xs: 150, sm: 200, md: 300 },
                height: { xs: 50, sm: 80 },
                fontSize: { xs: 12, sm: 18 },
                fontFamily: "Jura, sans-serif"
              }}>
              get in touch
            </Button>
          </Item>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default WelcomeText;
