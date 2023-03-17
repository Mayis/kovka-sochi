import { Grid, Typography, AppBar } from "@mui/material";
import React from "react";
import { Item } from "./custom/styledComponents";

const menu = ["Главная", "Галерея", "О нас", "Контакты"];

function Header() {
  return (
    <AppBar
      sx={{ background: "transparent", backdropFilter: "blur(8px)", height: { xs: 60, sm: 80 } }}>
      <Grid container alignContent="center" height={1}>
        {menu.map((item) => (
          <Grid item xs={3} key={item}>
            <Item>
              <Typography variant="body2" sx={{ fontSize: { xs: 15, sm: 18 } }}>
                {item}
              </Typography>
            </Item>
          </Grid>
        ))}
      </Grid>
    </AppBar>
  );
}

export default Header;
