import React, { Component } from 'react'

//Importing Components into Home Page
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Slider from "../components/Slider";


class Home extends Component {
    render() {
        return (
            <div>
                <Announcement />
                <Navbar />
                <Slider />
            </div>
        );
    }
}

export default Home;

