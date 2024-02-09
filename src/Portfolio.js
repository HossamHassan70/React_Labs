import React from "react";
import Card from "./Card";

class Portfolio extends React.Component {
  render() {
    const projects = [
      { title: "Web Design" },
      { title: "Mobile Design" },
      { title: "Logo Design" },
      { title: "Web Application Devlepment" },
      { title: "Mobile Application Development" },
      { title: "PWA Development" }
    ];

    return (
      <div className="portfolio-section mt-3 container">
        <h2 className="port display-3">Portfolio</h2>
        <div className="card-container">
          {projects.map((project, index) => (
            <Card className="card" key={index} title={project.title} />
          ))}
        </div>
      </div>
    );
  }
}
export default Portfolio;