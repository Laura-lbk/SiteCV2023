import React from "react";
import './Content.css'
import Presentation from "./Presentation/Presentation";
import Skills from "./Skills/Skills";


class Content extends React.Component{
    render(){
        return (
            <div class='MainContainer'>
                <Presentation></Presentation>
                <Skills></Skills>
            </div>
        );
    }
}

export default Content;