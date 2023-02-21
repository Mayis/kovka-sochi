import { Grid, Typography } from "@mui/material";
import React from "react";
import { Item } from "./custom/styledComponents";
import HeadContact from "./HeadContact";

const menu = ["Главная", "Каталог", "О нас", "Контакты"];

function Header() {
  return (
    <>
      <HeadContact />
      <Grid
        container
        alignContent="center"
        sx={{ height: 50, background: "transparent", position: "sticky", top: 0, zIndex: 1 }}>
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
    </>
  );
}

export default Header;
