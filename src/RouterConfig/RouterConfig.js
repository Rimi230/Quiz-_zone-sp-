import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Blog from '../components/Blog/Blog';
import Chart from '../components/Chart/Chart';
import Home from '../components/Home/Home/Home';
import Quiz from '../components/Quiz/Quiz/Quiz';
import Quizs from '../components/Quizs/Quizs';
import ErrorPage from '../components/shared/ErrorPage/ErrorPage';
import Main from '../Layout/Main';

const RouterConfig = () => {

    const router = createBrowserRouter([
        {
            path: "/",
            element: <Main></Main>,
            errorElement: <ErrorPage></ErrorPage>,
            children: [
                {
                    path: "/",
                    element: <Home></Home>,
                    loader: () => fetch('https://openapi.programming-hero.com/api/quiz')
                },
                {
                    path: "/home",
                    element: <Home></Home>,
                    loader: () => fetch('https://openapi.programming-hero.com/api/quiz')
                },
                {
                    path: "/quizs",
                    element: <Quizs></Quizs>,
                    loader: () => fetch('https://openapi.programming-hero.com/api/quiz')
                },
                {
                    path: "/home/:id",
                    element: <Quiz></Quiz>,
                    loader: async ({ params }) => fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`),
                },
                {
                    path: "/chart",
                    element: <Chart></Chart>,
                    loader: () => fetch('https://openapi.programming-hero.com/api/quiz')
                },
                {
                    path: "/blog",
                    element: <Blog></Blog>
                }
            ]
        },

    ]);

    return router;
};

export default RouterConfig;