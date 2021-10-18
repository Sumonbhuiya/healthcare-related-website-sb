import React from 'react';
import Slider from '../../Components/Slider/Slider';
import Banner from '../../Components/Banner/Banner';
import SomeServices from '../../Components/SomeServices/SomeServices';
import Feedback from '../../Components/Feedback/Feedback';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Banner></Banner>
            <SomeServices></SomeServices>
            <Feedback></Feedback>
        </div>
    );
};

export default Home;