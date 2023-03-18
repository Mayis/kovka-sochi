import React from "react";

// swiper slider
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

// components
import { Grid, Box, IconButton, useMediaQuery, Theme, Typography } from "@mui/material";
import Subtitle from "./custom/Subtitle";
import { Item } from "./custom/styledComponents";

// icons
import NavNextIcon from "@mui/icons-material/NavigateNext";
import NavBeforeIcon from "@mui/icons-material/NavigateBefore";
import { Element } from "react-scroll";

const aboutUs = {
  whyUs: [
    {
      title: " Добросовестность и ответственность",
      description:
        "Отзывы сотен благодарных клиентов и безупречная репутация в деловой среде — лучшие доказательства нашего профессионализма."
    },
    {
      title: "Оперативность и пунктуальность",
      description:
        "Даже самые объемные заказы выполняем в сжатые сроки. Четко придерживаемся графика, зафиксированного в договоре."
    },
    {
      title: "Комплексный подход и эффективный инструментарий",
      description:
        "Задействуем наиболее современные и результативные методы, постоянно повышаем свою квалификацию."
    },
    {
      title: "Здравый перфекционизм",
      description:
        "Если что-то можно сделать лучше, значит, мы сделаем это лучше всех и по разумной стоимости."
    }
  ]
};

function AboutUs() {
  const { whyUs } = aboutUs;
  const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down("md"));

  return (
    <Element name="О нас">
      <Grid container justifyContent={"center"} pt={10} pb={10} rowGap={5}>
        <Grid item xs={12}>
          <Item>
            <Subtitle title="ПОЧЕМУ ВЫБИРАЮТ НАС?" fs={{ xs: 30, sm: 40, md: 46, lg: 56 }} />
          </Item>
        </Grid>
        <Grid item xs={10} sm={10}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <IconButton
              className="prevCourse"
              disableRipple={true}
              sx={{
                color: "#FFFFFF",
                p: 0
              }}>
              <NavBeforeIcon sx={{ fontSize: { xs: 20, sm: 80 } }} />
            </IconButton>
            <Swiper
              navigation={{
                nextEl: ".nextCourse",
                prevEl: ".prevCourse"
              }}
              slidesPerView={isMobile ? 1 : 2}
              loop={true}
              spaceBetween={30}
              modules={[Navigation]}
              className="mySwiper"
              style={{ borderRadius: 32 }}>
              {whyUs?.map((desc) => (
                <SwiperSlide key={desc.title}>
                  <Grid
                    container
                    p={{ xs: 1, sm: 2 }}
                    height={300}
                    sx={{ background: "rgb(128 128 128 / 12%)", borderRadius: 8 }}>
                    <Grid item xs={12} height={80} pt={5}>
                      <Item>
                        <Typography align="center" sx={{ fontSize: { xs: 22, sm: 26, md: 24 } }}>
                          {desc.title}
                        </Typography>
                      </Item>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography align="center" sx={{ fontSize: { xs: 14, sm: 16 } }}>
                        {desc.description}
                      </Typography>
                    </Grid>
                  </Grid>
                </SwiperSlide>
              ))}
            </Swiper>
            <IconButton
              className="nextCourse"
              disableRipple={true}
              sx={{
                color: "#FFFFFF",
                p: 0
              }}>
              <NavNextIcon sx={{ fontSize: { xs: 20, sm: 80 } }} />
            </IconButton>
          </Box>
        </Grid>
      </Grid>
    </Element>
  );
}

export default AboutUs;
