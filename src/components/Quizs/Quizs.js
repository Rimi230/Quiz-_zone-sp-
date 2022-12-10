import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizTopics from '../Home/QuizTopics/QuizTopics';

const Quizs = () => {
    const topics = useLoaderData();
    return (
        <div>
            <QuizTopics
                topics={topics.data}
            ></QuizTopics>
        </div>
    );
};

export default Quizs;