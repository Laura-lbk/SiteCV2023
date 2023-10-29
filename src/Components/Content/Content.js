import React from "react";
import './Content.css'
import Presentation from "./Presentation/Presentation";
import Skills from "./Skills/Skills";
import School from "./School/School";
import Experience from "./Experience/Experience";
import About from "./About/About";
import Homepage from "./Parallax/MultiLayerParallax.tsx";
import { ParallaxProvider } from "react-scroll-parallax";


class Content extends React.Component{
    render(){
        return (
            <div class='MainContainer'>
                <ParallaxProvider>
                <Homepage/>
                </ParallaxProvider>
                <Presentation></Presentation>
                <Skills></Skills>
                <School></School>
                <Experience></Experience>
                <About></About>
            </div>
        );
    }
}

export default Content;