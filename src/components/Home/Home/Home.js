import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Banner from '../Banner/Banner';

import QuizTopics from '../QuizTopics/QuizTopics';

const Home = () => {
    const topics = useLoaderData();
    // console.log(topics);
    return (
        <div>
            <Banner></Banner>
            <QuizTopics
                topics={topics.data}
            ></QuizTopics>
        </div>
    );
};

export default Home;