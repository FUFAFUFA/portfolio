import React from "react";
import { Body } from "../../components/Body";
import { Footer } from "../../components/Footer";
import { NavigationBar } from "../../components/NavigationBar";
import "./style.css";

export const PortfolioWorkPage = () => {
  return (
    <div className="portfolio-work-page">
      <div className="div-2">
        <NavigationBar className="navigation-bar-instance" />
        <div className="section">
          <div className="headline">
            <div className="text-wrapper-10">Hello, I’m Mehmet Akif.</div>
            <img className="image" alt="Image" src="/img/image.svg" />
            <p className="a-senior-year-design">
              <span className="span">
                A senior-year design student who trying to specialize in 3D modeling &amp; texturing.
                <br />
              </span>
              <span className="text-wrapper-11">
                <br />
              </span>
            </p>
          </div>
          <Body className="body-instance" thumbnailClassName="design-component-instance-node" />
          <div className="body-2">
            <div className="text-wrapper-12">02 / PROJECT NAME</div>
            <p className="text-wrapper-13">
              Subsurface weight, specular roughness, diffuse maps generated with the procedure and manual techniques.
            </p>
            <div className="link-2">See case study →</div>
            <div className="thumbnail-2" />
            <img className="img" alt="Seperator" src="/img/seperator-3.svg" />
          </div>
          <div className="body-3">
            <div className="text-wrapper-12">03 / PROJECT NAME</div>
            <p className="text-wrapper-13">Experimental creature modeling for school project.</p>
            <div className="link-3">Project WIP</div>
            <div className="thumbnail-2" />
            <img className="img" alt="Seperator" src="/img/seperator-3.svg" />
          </div>
        </div>
        <Footer className="footer-instance" />
      </div>
    </div>
  );
};
