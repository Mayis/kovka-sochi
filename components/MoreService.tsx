import React from "react";

// components
import { Grid, Typography, Icon } from "@mui/material";
import { Item } from "./custom/styledComponents";

// icons
import SettingsIcon from "@mui/icons-material/Settings";
import RecomendationIcon from "@mui/icons-material/AutoAwesome";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import ArchitectureIcon from "@mui/icons-material/Architecture";

function MoreService() {
  return (
    <Grid
      container
      justifyContent="center"
      p={3}
      rowSpacing={2}
      sx={{ background: "rgb(128 128 128 / 12%)" }}>
      <Grid item xs={10} sm={9}>
        <Typography variant="subtitle1" color="#FFF" sx={{ fontSize: { xs: 20, sm: 28, md: 36 } }}>
          ДОПОЛНИТЕЛЬНЫЕ УСЛУГИ
        </Typography>
      </Grid>
      <Grid item xs={10} sm={9}>
        <Grid container rowSpacing={3}>
          <Grid item xs={12}>
            <Typography variant="body1" color="#FFF" sx={{ fontSize: { xs: 14, sm: 16, md: 18 } }}>
              В наши дополнительные услуги входят- подъехать по адресу составить смету делать
              расчеты, дать нашу рекомендацию по выбору материала и советы от мастеров.
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Grid container>
              <Grid item xs={12} sm={6} md={3} p={2}>
                <Item sx={{ flexDirection: "column" }}>
                  <Icon color="primary" sx={{ height: 60, width: 60, padding: 1 }}>
                    <RecomendationIcon sx={{ fontSize: 60 }} />
                  </Icon>
                  <Typography color="#FFF" sx={{ fontSize: 20 }}>
                    Рекомендация
                  </Typography>
                </Item>
              </Grid>
              <Grid item xs={12} sm={6} md={3} p={2}>
                <Item sx={{ flexDirection: "column" }}>
                  <Icon color="primary" sx={{ height: 60, width: 60, padding: 1 }}>
                    <ArchitectureIcon sx={{ fontSize: 60 }} />
                  </Icon>
                  <Typography color="#FFF" sx={{ fontSize: 20 }}>
                    Проектирования
                  </Typography>
                </Item>
              </Grid>
              <Grid item xs={12} sm={6} md={3} p={2}>
                <Item sx={{ flexDirection: "column" }}>
                  <Icon color="primary" sx={{ height: 60, width: 60, padding: 1 }}>
                    <LocalShippingIcon sx={{ fontSize: 60 }} />
                  </Icon>
                  <Typography color="#FFF" sx={{ fontSize: 20 }}>
                    Доставка
                  </Typography>
                </Item>
              </Grid>
              <Grid item xs={12} sm={6} md={3} p={2}>
                <Item sx={{ flexDirection: "column" }}>
                  <Icon color="primary" sx={{ height: 60, width: 60, padding: 1 }}>
                    <SettingsIcon sx={{ fontSize: 60 }} />
                  </Icon>
                  <Typography color="#FFF" sx={{ fontSize: 20 }}>
                    Установка
                  </Typography>
                </Item>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default MoreService;
