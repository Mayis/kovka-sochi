import React from "react";

// components
import { Typography } from "@mui/material";

interface Props {
  title: string;
}
function Subtitle({ title }: Props) {
  return (
    <Typography
      variant="subtitle1"
      sx={{ color: "#FFF", fontSize: { xs: 34, sm: 40, md: 46, lg: 56 } }}>
      {title}
    </Typography>
  );
}

export default Subtitle;
