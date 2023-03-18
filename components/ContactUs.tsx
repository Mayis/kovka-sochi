import React from "react";

// components
import { Grid, Icon, Typography } from "@mui/material";
import Subtitle from "./custom/Subtitle";

// icons
import PhoneIcon from "@mui/icons-material/LocalPhone";
import MailIcon from "@mui/icons-material/Mail";
import PlaceIcon from "@mui/icons-material/Place";
import { Item } from "./custom/styledComponents";
import { Element } from "react-scroll";

function ContactUs() {
  return (
    <Element name="Контакты">
      <Grid
        container
        justifyContent="center"
        pt={10}
        pb={10}
        rowGap={10}
        sx={{ background: "rgb(128 128 128 / 12%)" }}>
        <Grid item xs={10}>
          <Subtitle title="КОНТАКТНАЯ ИНФОРМАЦИЯ" />
        </Grid>
        <Grid item xs={12}>
          <Grid container flexDirection={"column"} alignItems={"center"} rowGap={6}>
            <Grid item container xs={10}>
              <Grid item xs={4}>
                <Item>
                  <PhoneIcon color="warning" sx={{ fontSize: { xs: 28, sm: 36, md: 42 } }} />
                </Item>
              </Grid>
              <Grid item xs={8}>
                <Typography align="center" sx={{ fontSize: { xs: 16, sm: 18, md: 22, lg: 24 } }}>
                  +777 777 77 77
                </Typography>
              </Grid>
            </Grid>
            <Grid item container xs={10}>
              <Grid item xs={4}>
                <Item>
                  <MailIcon color="warning" sx={{ fontSize: { xs: 28, sm: 36, md: 42 } }} />
                </Item>
              </Grid>
              <Grid item xs={8}>
                <Typography align="center" sx={{ fontSize: { xs: 16, sm: 18, md: 22, lg: 24 } }}>
                  kovkakovka@mail.ru
                </Typography>
              </Grid>
            </Grid>
            <Grid item container xs={10}>
              <Grid item xs={4}>
                <Item>
                  <PlaceIcon color="warning" sx={{ fontSize: { xs: 28, sm: 36, md: 42 } }} />
                </Item>
              </Grid>
              <Grid item xs={8}>
                <Typography align="center" sx={{ fontSize: { xs: 16, sm: 18, md: 22, lg: 24 } }}>
                  Sochi Russiaa
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Element>
  );
}

export default ContactUs;
