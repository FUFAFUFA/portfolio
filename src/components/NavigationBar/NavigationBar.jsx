/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { About } from "../About";
import { Contact } from "../Contact";
import { Playground } from "../Playground";
import { Work } from "../Work";
import "./style.css";

export const NavigationBar = ({ className }) => {
  return (
    <div className={`navigation-bar ${className}`}>
      <img className="site-logo" alt="Site logo" src="/img/site-logo-1.svg" />
      <div className="menu">
        <About className="about-instance" />
        <Contact className="contact-instance" />
        <Work className="work-instance" />
        <Playground className="playground-instance" />
      </div>
    </div>
  );
};
