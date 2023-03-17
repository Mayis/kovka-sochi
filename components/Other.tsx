import React from "react";

// components
import Gallery from "./Gallery";
import MoreService from "./MoreService";

function Other() {
  return (
    <div
      style={{
        width: "100%",
        backgroundImage: "url(/images/full-back.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed"
      }}>
      <Gallery />
      <MoreService />
    </div>
  );
}

export default Other;
