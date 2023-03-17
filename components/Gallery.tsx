import React from "react";

import { Grid } from "@mui/material";
import Subtitle from "./custom/Subtitle";
import { Item } from "./custom/styledComponents";

function Gallery() {
  return (
    <Grid container justifyContent="center" p={4}>
      <Grid item xs={12} pt={3} pb={3}>
        <Item>
          <Subtitle title="НАШИ РАБОТЫ" />
        </Item>
      </Grid>
      <Grid item xs={8} sm={10}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={4} height={{ xs: 250, sm: 300 }}>
            <img
              src="/images/gallery/example.jpg"
              alt="example"
              style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: 5 }}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4} height={{ xs: 250, sm: 300 }}>
            <img
              src="/images/gallery/example.jpg"
              alt="example"
              style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: 5 }}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4} height={{ xs: 250, sm: 300 }}>
            <img
              src="/images/gallery/example.jpg"
              alt="example"
              style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: 5 }}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4} height={{ xs: 250, sm: 300 }}>
            <img
              src="/images/gallery/example.jpg"
              alt="example"
              style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: 5 }}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Gallery;
