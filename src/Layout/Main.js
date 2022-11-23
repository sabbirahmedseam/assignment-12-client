import React from 'react';
import { Outlet } from 'react-router-dom';
import Banner from '../Home/Banner';
import BannerPart from '../Home/BannerPart';
import Footer from '../Shared/Footer';
import Navbar from '../Shared/Navbar';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <BannerPart></BannerPart>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;