import React, { useState } from "react";

// components
import { Grid, Typography, AppBar } from "@mui/material";
import { Item } from "./custom/styledComponents";

import { scroller } from "react-scroll";
["Главная", "Галерея", "О нас", "Контакты"];
const menu = {
  nav: [
    {
      id: 1,
      title: "Главная"
    },
    {
      id: 2,
      title: "Галерея"
    },
    {
      id: 3,
      title: "О нас"
    },
    {
      id: 4,
      title: "Контакты"
    }
  ]
};

function Header() {
  const [activeNav, setActiveNav] = useState("Главная");
  const handleChangeActiveNav = (title: string) => {
    setActiveNav(title);
    scroller.scrollTo(title, {
      duration: 1000,
      delay: 100,
      smooth: true,
      offset: -100
    });
  };
  return (
    <AppBar
      sx={{ background: "transparent", backdropFilter: "blur(8px)", height: { xs: 60, sm: 80 } }}>
      <Grid container alignContent="center" height={1}>
        {menu.nav.map((item) => (
          <Grid item xs={3} key={item.id}>
            <Item>
              <Typography
                onClick={() => handleChangeActiveNav(item.title)}
                variant="body2"
                color={item.title === activeNav ? "primary" : "warning"}
                sx={{ fontSize: { xs: 15, sm: 18 }, transition: ".4s" }}>
                {item.title}
              </Typography>
            </Item>
          </Grid>
        ))}
      </Grid>
    </AppBar>
  );
}

export default Header;
