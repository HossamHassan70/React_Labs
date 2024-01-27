import React, {Component} from "react";

class Skills extends React.Component {
    skillsData = [
        { name: "HTML", value: 75 },
        { name: "CSS", value: 70 },
        { name: "Bootstrap", value: 75 },
        { name: "JavaScript", value: 65 },
        { name: "React", value: 40 },
        { name: "PosgreSQL", value: 75 },
        { name: "Python", value: 90 }
      ];
    render() {
    return (
        <div className="skills-section mt-3">
        <h2 className="display-2">Skills</h2>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
            et itaque dicta odio dolore dolores, modi ipsum sit placeat, fugiat
            consequatur rerum non sint porro voluptates iusto. Expedita, libero,
            voluptas reprehenderit labore officia iure assumenda alias amet
            architecto quam beatae cumque aliquid fugiat corrupti excepturi harum
            nulla. Dicta, consequatur adipisci.
        </p>
        {this.skillsData.map((skill, index) => (
            <div key={index} className="skill-item">
            <p>{skill.name}</p>
            <progress value={skill.value} max="100" className="prog"></progress>
            </div>
        ))}
        </div>
    );
    }
}

export default Skills;
    
