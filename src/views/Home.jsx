import React from 'react';
import { Helmet } from "react-helmet";
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

       <>
         <Helmet>
           <style>{`body { display: flex !important }`}</style>
         </Helmet>
         <Helmet>
           <style>{`body { flex-direction: column !important }`}</style>
         </Helmet>
         <Helmet>
           <style>{`body { overflow: hidden !important }`}</style>
         </Helmet>
         <Helmet>
           <style>{`$html { display: flex !important }`}</style>
         </Helmet>
         <HomeNavbar/>
         <HomeHeader/>
       </>


    );
};

export default Home;


