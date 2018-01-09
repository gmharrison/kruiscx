import React, {Component} from 'react';
import Intro from './intro'
import About from "./about";
import Team from "./team";
import Sponsors from "./sponsors";
import Contact from "./contact";
import Footer from "./footer";

export default class App extends Component {
    render () {
        return (
            <div>
                <Intro />
                <About/>
                <Team/>
                <Sponsors/>
                <Contact/>
                <Footer/>
            </div>
        )
    }
}