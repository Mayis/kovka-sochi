import React from "react";

//components
import { Grid, Typography } from "@mui/material";
import { Item } from "./custom/styledComponents";

// icons
import Phone from "@mui/icons-material/LocalPhone";
import Email from "@mui/icons-material/AlternateEmail";

const headCont = {
  phone: "+7 333 444 555",
  email: "kovka-sochi-best@mail.ru"
};
function HeadContact() {
  const { phone, email } = headCont;
  return (
    <Grid container alignItems="center" sx={{ height: 50, background: "transparent", zIndex: 1 }}>
      <Grid item xs={6}>
        <Item>
          <Phone color="warning" />
          <Typography variant="body2" sx={{ fontSize: { xs: 10, sm: 14 }, padding: "0px 5px" }}>
            {phone}
          </Typography>
        </Item>
      </Grid>
      <Grid item xs={6}>
        <Item>
          <Email color="warning" />
          <Typography variant="body2" sx={{ fontSize: { xs: 10, sm: 14 }, padding: "0px 5px" }}>
            {email}
          </Typography>
        </Item>
      </Grid>
    </Grid>
  );
}

export default HeadContact;
