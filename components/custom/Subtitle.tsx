import React from "react";

// components
import { Typography } from "@mui/material";

interface Props {
  title: string;
  fs?: object;
}
function Subtitle({ title, fs }: Props) {
  return (
    <Typography
      variant="subtitle1"
      align="center"
      color={"secondary"}
      sx={{ fontSize: fs ? fs : { xs: 34, sm: 40, md: 46, lg: 56 }, fontWeight: 800 }}>
      {title}
    </Typography>
  );
}

export default Subtitle;
