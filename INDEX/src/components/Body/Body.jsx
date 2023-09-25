/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import "./style.css";

export const Body = ({ className, thumbnailClassName }) => {
  return (
    <div className={`body ${className}`}>
      <div className="text-wrapper-4">01 / PROJECT NAME</div>
      <div className="overlap-group">
        <p className="p">
          Goblin concept digital sculpture with human-like skin. Learned a lot of quick tips and look development.
        </p>
        <p className="text-wrapper-5">
          Sculpted in ZBrush, Retopologized and UVs done in Maya, Textured in Mari, Rendered using Arnold.
        </p>
      </div>
      <p className="link">More shots from this project ↗</p>
      <img className={`thumbnail ${thumbnailClassName}`} alt="Thumbnail" src="/img/thumbnail.png" />
      <img className="seperator" alt="Seperator" src="/img/seperator-3.svg" />
    </div>
  );
};
