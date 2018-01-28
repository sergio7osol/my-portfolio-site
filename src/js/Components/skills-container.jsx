import React from "react";
import Ico_short_long_description from "./ico-short-long-description.jsx";

class Skills_container extends React.Component {
    render(){
        return (
            <div className="row text-center">
                <div className="col-lg-4">
                    <Ico_short_long_description name={"shopping-cart"} heading={"Interactive Web-based UI"} text={"Like dashboards and the likes."}/>
                </div>
                <div className="col-lg-4">
                    <Ico_short_long_description name={"laptop"} heading={"Responsive/Adaptive Design"} text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit."}/>
				</div>
                <div className="col-lg-4">
                    <Ico_short_long_description name={"lock"} heading={"Web Security"} text={"Minima maxime quam architecto quo inventore harum ex magni, dicta impedit."}/>
				</div>
            </div>
        );
    }
}

export default Skills_container;