import React, { useState } from "react";
import { Link } from "react-router-dom";
import { activeOrUnactiveProp } from "../../interrfaces/activeOrUnactiveProp";

export const NavBar: React.FC = () => {
  const [homeColor, setHomeColor] = useState<activeOrUnactiveProp>({
    colorValue: "red"
  });
  const [aboutColor, setAboutColor] = useState<activeOrUnactiveProp>({
    colorValue: "white"
  });
  const [projectColor, setProjectColor] = useState<activeOrUnactiveProp>({
    colorValue: "white"
  });

  const highlightPageTitleAbout = (): void => {
    setAboutColor({ colorValue: "red" });
    setHomeColor({ colorValue: "white" });
    setProjectColor({ colorValue: "white" });
  };

  const highlightPageTitleHome = (): void => {
    setAboutColor({ colorValue: "white" });
    setHomeColor({ colorValue: "red" });
    setProjectColor({ colorValue: "white" });
  };
  const highlightPageTitleProject = (): void => {
    setAboutColor({ colorValue: "white" });
    setHomeColor({ colorValue: "white" });
    setProjectColor({ colorValue: "red" });
  };

  const style = "color:red";
  return (
    <div id="Nav">
      <div className="home">
        <Link
          to="/"
          onClick={highlightPageTitleHome}
          style={{ color: homeColor.colorValue }}
        >
          Home
        </Link>
      </div>
      <div className="about-me">
        <Link
          to="/about"
          onClick={highlightPageTitleAbout}
          style={{ color: aboutColor.colorValue }}
        >
          About Me
        </Link>
      </div>
      <div className="projects">
        <Link
          to="/projects"
          onClick={highlightPageTitleProject}
          style={{ color: projectColor.colorValue }}
        >
          Projects
        </Link>
      </div>
    </div>
  );
};
