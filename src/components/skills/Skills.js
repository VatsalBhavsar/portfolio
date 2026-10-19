import React from "react";
import skillsStyles from "./Skills.styles";
import { ReactComponent as HtmlIcon } from "../../assets/icons/html.svg";
import { ReactComponent as CssIcon } from "../../assets/icons/css.svg";
import { ReactComponent as JSIcon } from "../../assets/icons/javascript.svg";
import { ReactComponent as ReactIcon } from "../../assets/icons/react.svg";
import { ReactComponent as ReduxIcon } from "../../assets/icons/redux.svg";
import { ReactComponent as NodejsIcon } from "../../assets/icons/nodejs.svg";
import { ReactComponent as TSIcon } from "../../assets/icons/typescript.svg";
import { ReactComponent as MDBIcon } from "../../assets/icons/mongodb.svg";
import { ReactComponent as GQLIcon } from "../../assets/icons/graphql.svg";
import { ReactComponent as JestIcon } from "../../assets/icons/jest.svg";
import { ReactComponent as ReactTestingLibraryIcon } from "../../assets/icons/rtl.svg";
import { ReactComponent as AngularIcon } from "../../assets/icons/angular.svg";
import { ReactComponent as StorybookIcon } from "../../assets/icons/storybook.svg";
import { ReactComponent as FigmaIcon } from "../../assets/icons/figma.svg";

const Skills = () => {
  const classes = skillsStyles();

  const careerStartDate = new Date("2017-02-25");
  const today = new Date();

  const years = today.getFullYear() - careerStartDate.getFullYear();

  return (
    <section id="about" className={`${classes.skillsContainer} container`}>
      <div className="section-title">{`About me & my Career`}</div>
      <div className="section-description">
        {`Senior Frontend Engineer with ${years}+ years building enterprise web applications in React, Angular, and TypeScript across fintech (Goldman Sachs), FMCG analytics (P&G, Coca-Cola), and enterprise SaaS. Currently leading frontend architecture for a greenfield micro-frontend platform, from technology selection to engineering standards, while mentoring engineers and shipping features as a hands-on senior IC. Bringing UI/UX design thinking into technical decisions, with an interest in owning both the engineering and design direction of a product.`}
      </div>
      <div className="section-sub-title">{`Skills I've used or practiced so far`}</div>
      <div className={classes.skillsList}>
        <div className={classes.skillsListItem}>
          <div className={classes.skillItemIcon}>
            <JSIcon />
          </div>
          <div className={classes.skillItemName}>JavaScript</div>
        </div>
        <div className={classes.skillsListItem}>
          <div className={classes.skillItemIcon}>
            <ReactIcon />
          </div>
          <div className={classes.skillItemName}>ReactJs</div>
        </div>
        <div className={classes.skillsListItem}>
          <div className={classes.skillItemIcon}>
            <ReduxIcon />
          </div>
          <div className={classes.skillItemName}>Redux</div>
        </div>
        <div className={classes.skillsListItem}>
          <div className={classes.skillItemIcon}>
            <HtmlIcon />
          </div>
          <div className={classes.skillItemName}>HTML</div>
        </div>
        <div className={classes.skillsListItem}>
          <div className={classes.skillItemIcon}>
            <CssIcon />
          </div>
          <div className={classes.skillItemName}>CSS</div>
        </div>
        <div className={classes.skillsListItem}>
          <div className={classes.skillItemIcon}>
            <AngularIcon />
          </div>
          <div className={classes.skillItemName}>Angular</div>
        </div>
        <div className={classes.skillsListItem}>
          <div className={classes.skillItemIcon}>
            <JestIcon />
          </div>
          <div className={classes.skillItemName}>Jest</div>
        </div>
        <div className={classes.skillsListItem}>
          <div className={classes.skillItemIcon}>
            <ReactTestingLibraryIcon />
          </div>
          <div className={classes.skillItemName}>React Testing Library</div>
        </div>
        <div className={classes.skillsListItem}>
          <div className={classes.skillItemIcon}>
            <TSIcon />
          </div>
          <div className={classes.skillItemName}>Typescript</div>
        </div>
        <div className={classes.skillsListItem}>
          <div className={classes.skillItemIcon}>
            <StorybookIcon />
          </div>
          <div className={classes.skillItemName}>Storybook</div>
        </div>
        <div className={classes.skillsListItem}>
          <div className={classes.skillItemIcon}>
            <FigmaIcon />
          </div>
          <div className={classes.skillItemName}>Figma</div>
        </div>
        <div className={classes.skillsListItem}>
          <div className={classes.skillItemIcon}>
            <GQLIcon />
          </div>
          <div className={classes.skillItemName}>GraphQL</div>
        </div>
        <div className={classes.skillsListItem}>
          <div className={classes.skillItemIcon}>
            <NodejsIcon />
          </div>
          <div className={classes.skillItemName}>NodeJs</div>
        </div>
        <div className={classes.skillsListItem}>
          <div className={classes.skillItemIcon}>
            <MDBIcon />
          </div>
          <div className={classes.skillItemName}>MongoDB</div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
