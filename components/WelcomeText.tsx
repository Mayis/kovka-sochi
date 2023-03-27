import React from "react";
import { scroller } from "react-scroll";

// components
import { Button, Grid, Typography } from "@mui/material";
import { Item } from "./custom/styledComponents";

//icons
import PlaceIcon from "@mui/icons-material/Place";

const welcomeTxt = {
  best: "ЛУЧШИЕ",
  work: "В ЭТОМ ДЕЛЕ"
};
function WelcomeText() {
  const { best, work } = welcomeTxt;
  const handleContact = () => {
    scroller.scrollTo("Контакты", {
      duration: 1000,
      delay: 100,
      smooth: true,
      offset: -100
    });
  };
  return (
    <Grid
      container
      height={1}
      justifyContent={"center"}
      alignItems={"center"}
      pt={{ xs: 8, sm: 10 }}>
      <Grid
        item
        container
        p={{ xs: 4, sm: 8 }}
        width={{ xs: "90%", sm: "80%" }}
        sx={{ background: "rgb(0 0 0 / 70%)", borderRadius: 8 }}>
        <Grid item xs={12}>
          <Item>
            <Typography
              color="secondary"
              variant="subtitle2"
              sx={{ fontSize: { xs: 50, sm: 80, md: 100, lg: 180 } }}>
              {best}
            </Typography>
          </Item>
        </Grid>
        <Grid item xs={12}>
          <Item>
            <Typography
              color="secondary"
              variant="h1"
              sx={{ fontSize: { xs: 23, sm: 30, md: 50 } }}>
              {work}
            </Typography>
          </Item>
        </Grid>
        <Grid item xs={12} pt={8}>
          <Item>
            <Button
              onClick={handleContact}
              startIcon={<PlaceIcon />}
              variant="contained"
              sx={{
                width: { xs: 200, sm: 230, md: 300 },
                height: { xs: 50, sm: 80 },
                fontSize: { xs: 12, sm: 18 },
                fontFamily: "Jura, sans-serif"
              }}>
              Связываться с нами
            </Button>
          </Item>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default WelcomeText;
