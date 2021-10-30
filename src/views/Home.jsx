import React from 'react';

//Reacstrap components

import { HomeNavbar } from "../components/Navbar"
import { HomeHeader } from "../components/Headers";

const Home = () => {

    document.documentElement.classList.remove("nav-open");
    React.useEffect(() => {
        document.body.classList.add("index");
        return function cleanup() {
            document.body.classList.remove("index");
        };
    });
    return (
        <div>
            <HomeNavbar/>
            <HomeHeader/>

        </div>
    );
};

export default Home;
