import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      <p>
        This project is{" "}
        <a
          className="githubLink"
          href="https://github.com/Burgundypanda/"
          target="_blank"
          rel="noreferrer"
        >
          open-sourced{" "}
        </a>
        and was coded by{" "}
        <a
          className="linkedinProfile"
          href="https://www.linkedin.com/in/jakiyarahman/"
          target="_blank"
          rel="noreferrer"
        >
          Jakiya Rahman
        </a>
      </p>
    </div>
  );
}
