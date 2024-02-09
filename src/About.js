import React, { Component } from "react";

class About extends React.Component {
    render() {
        return (
            <div className="bio-section">
                <div className="bio-content">
                    <h1 className="mt-3">About Me</h1>
                    <p className="mb-3">I am a highly motivated and dedicated full stack web
                        developer with experience in building responsive websites,
                        applications, and APIs using various programming languages including HTML5, CSS3, JavaScript,
                        SQL, MongoDB, Firebase, and React
                        along with the use of agile methodologies such as Scrum.
                    </p>
                    <a href={process.env.PUBLIC_URL + "/resume.pdf"} download>
                        Download Resume
                    </a>
                </div>
            </div>
        )
    }
}
export default About;