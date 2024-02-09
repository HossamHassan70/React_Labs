import React from "react";
import MyButton from "./Button";

class HeroSection extends React.Component {
    render() {
        return (
            <div className="heroSection">
                <div className="heroContent">
                    <img id="heroPhoto" src={process.env.PUBLIC_URL + "/img/neos-blog_jetbrains.jpg"} />
                    <div className="text-overlay">
                        <h1 id="title" className="">Hossam Hassan</h1>
                        <h4>Full Stack Web Developer</h4>
                        <br />
                        <MyButton variant="outline-light">Contact Me</MyButton>
                    </div>
                </div>
            </div>
        )
    }
}

export default HeroSection;
