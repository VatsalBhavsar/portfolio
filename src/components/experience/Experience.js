import React from "react";
import experienceStyles from "./Experience.styles";
import { ReactComponent as CompanyIcon } from "../../assets/icons/company.svg";
import FractalLogo from "../../assets/images/fractal-logo.png";
import CoforgeLogo from "../../assets/images/coforge-logo.png";
import UplandLogo from "../../assets/images/upland-logo.svg";

const Experience = () => {
  const classes = experienceStyles();
  return (
    <section className={`${classes.experienceContainer} container`}>
      <div className="section-sub-title">{`Professional experience so far`}</div>
      <div className={classes.expBlock}>
        <div className={classes.expBlockLeft}>
          <div className="exp-block-content hide-md">
            <div className={classes.companyLogo}>
              <div className={classes.companyLogo}>
                <img src={UplandLogo} alt="Fractal-Logo"></img>
              </div>
            </div>
            <div className={classes.companyName}>Upland Software</div>
            <div className={classes.role}>Senior Software Engineer</div>
          </div>
        </div>
        <span className={`${classes.expBlockSeperator} ${classes.expBlockSeperatorFirst}`}>
          <span className={`hide-md ${classes.presentDayTagLeft}`}>Present Day</span>
          <span className={`hide-sm ${classes.presentDayTagRight}`}>Present Day</span>
          <span className={classes.expYearTagRight}>Sept 2023</span>
        </span>
        <div className={classes.expBlockRight}>
          <div className="exp-block-content hide-sm">
            <div className={classes.companyLogo}>
              <div className={classes.companyLogo}>
                <img src={UplandLogo} alt="Upland-Logo"></img>
              </div>
            </div>
            <div className={classes.companyName}>Upland Software</div>
            <div className={classes.role}>Senior Software Engineer</div>
          </div>
        </div>
      </div>
      <div className={classes.expBlock}>
        <div className={classes.expBlockLeft}></div>
        <span
          className={classes.expBlockSeperator}
        >
          <span className={`hide-md ${classes.expYearTagLeft}`}>Oct 2021</span>
          <span className={`hide-sm ${classes.expYearTagRight}`}>Oct 2021</span>
        </span>
        <div className={classes.expBlockRight}>
          <div className="exp-block-content">
            <div className={classes.companyLogo}>
              <img src={CoforgeLogo} alt="Coforge-Logo"></img>
            </div>
            <div className={classes.companyName}>Coforge</div>
            <div className={classes.role}>
              Senior Software Engineer (Frontend)
            </div>
          </div>
        </div>
      </div>
      <div className={classes.expBlock}>
        <div className={classes.expBlockLeft}>
          <div className="exp-block-content hide-md">
            <div className={classes.companyLogo}>
              <div className={classes.companyLogo}>
                <img src={FractalLogo} alt="Fractal-Logo"></img>
              </div>
            </div>
            <div className={classes.companyName}>Fractal Analytics</div>
            <div className={classes.role}>Frontend Engineer</div>
          </div>
        </div>
        <span className={classes.expBlockSeperator}>
          <span className={classes.expYearTagRight}>Feb 2019</span>
        </span>
        <div className={classes.expBlockRight}>
          <div className="exp-block-content hide-sm">
            <div className={classes.companyLogo}>
              <div className={classes.companyLogo}>
                <img src={FractalLogo} alt="Fractal-Logo"></img>
              </div>
            </div>
            <div className={classes.companyName}>Fractal Analytics</div>
            <div className={classes.role}>Frontend Engineer</div>
          </div>
        </div>
      </div>
      <div className={classes.expBlock}>
        <div className={classes.expBlockLeft}></div>
        <span className={classes.expBlockSeperator}>
          <span className={`hide-md ${classes.expYearTagLeft}`}>Feb 2017</span>
          <span className={`hide-sm ${classes.expYearTagRight}`}>Feb 2017</span>
        </span>
        <div className={classes.expBlockRight}>
          <div className="exp-block-content">
            <div className={classes.companyLogo}>
              <CompanyIcon />
            </div>
            <div className={classes.companyName}>
              Technical Bazaar Solutions
            </div>
            <div className={classes.role}>Frontend Engineer</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
