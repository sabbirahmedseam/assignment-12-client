import React from 'react';
import Banner from './Banner';
import Categories from './Categories';
import ExtraBannerPart from './ExtraBannerPart';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ExtraBannerPart></ExtraBannerPart>
            <Categories></Categories>
        </div>
    );
};

export default Home;