import React, {Component} from 'react';
import Intro from './intro'
import About from "./about";
import Social from "./social";
import Sponsors from "./sponsors";
import Contact from "./contact";
import Footer from "./footer";
import TeamGallery from "./team";

export default class KruisApp extends Component {
    render () {
        return (
            <div>
                <Intro />
                <About/>
                <TeamGallery/>
                <Social/>
                <Sponsors/>
                <Contact/>
                <Footer/>
            </div>
        )
    }
}
