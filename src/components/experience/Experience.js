import React from "react";
import experienceStyles from "./Experience.styles";
import { ReactComponent as CompanyIcon } from "../../assets/icons/company.svg";
import FractalLogo from "../../assets/images/fractal-logo.png";

const Experience = () => {
  const classes = experienceStyles();
  return (
    <section className={`${classes.experienceContainer} container`}>
      <div className="section-sub-title">{`Professional experience so far`}</div>
      <div className={classes.expBlock}>
        <div className={classes.expBlockLeft}></div>
        <span
          className={`${classes.expBlockSeperator} ${classes.expBlockSeperatorFirst}`}
        >
          <span className={classes.presentDayTag}>Present Day</span>
          <span className={`hide-md ${classes.expYearTagLeft}`}>Feb 2019</span>
          <span className={`hide-sm ${classes.expYearTagRight}`}>Feb 2019</span>
        </span>
        <div className={classes.expBlockRight}>
          <div className="exp-block-content">
            <div className={classes.companyLogo}>
              <img src={FractalLogo} alt="Fractal-Logo"></img>
            </div>
            <div className={classes.companyName}>Fractal Analytics</div>
            <div className={classes.role}>Frontend Engineer</div>
          </div>
        </div>
      </div>
      <div className={classes.expBlock}>
        <div className={classes.expBlockLeft}>
          <div className="exp-block-content hide-md">
            <div className={classes.companyLogo}>
              <CompanyIcon />
            </div>
            <div className={classes.companyName}>
              Technical Bazaar Solutions
            </div>
            <div className={classes.role}>Frontend Engineer</div>
          </div>
        </div>
        <span className={classes.expBlockSeperator}>
          <span className={classes.expYearTagRight}>Feb 2017</span>
        </span>
        <div className={classes.expBlockRight}>
          <div className="exp-block-content hide-sm">
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
