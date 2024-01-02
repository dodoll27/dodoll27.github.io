import React, { useRef } from "react";
import { Bio } from "../components/Bio";
import { Projects } from "../components/Projects";
import { Skills } from "../components/Skills";
import { Education } from "../components/Education";
import { Experiences } from "../components/Experiences";
import { Passions } from "../components/Passions";
import { Helmet } from "react-helmet";
import { ScrollComponent } from "../components/ScrollComponent";

export function HomePage() {
  const panelRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];
  return (
    <div>
      <ScrollComponent />
      {panelRefs.map((panelRef, index) => (
        <div
          key={index}
          className="panel"
          data-color={panelColors[index]}
          ref={panelRef}
        ></div>
      ))}
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;700&family=Kaisei+Tokumin&family=Outfit:wght@200;300;800&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <Bio />
      <Projects />
      <Skills />
      <Education />
      <Experiences />
      <Passions />
    </div>
  );
}

const panelColors = [
  "white",
  "violet",
  "indigo",
  "blue",
  "green",
  "yellow",
  "orange",
  "red",
];
const panelTitles = [
  "",
  "Violet panel",
  "Indigo panel",
  "Blue panel",
  "Green panel",
  "Yellow panel",
  "Orange panel",
  "Red panel",
];
