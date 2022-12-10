import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizScore from '../QuizScore/QuizScore';
import SingleQuizCard from '../SingleQuizCard/SingleQuizCard';

const Quiz = () => {
    const [userCorrectAnswer, setUserCorrectAnswer] = useState(0);
    const [scoreShow, setScoreShow] = useState(false);
    const [quizParticipateNumber, setQuizParticipateNumber] = useState([]);
    const allQuestionsLoad = useLoaderData();

    const uniqQuizNumber = [...new Set(quizParticipateNumber)];



    const allQuestions = allQuestionsLoad.data;


    const handleScoreShow = () => {
        setScoreShow(true);
    }
    // console.log(allQuestions);
    return (
        <div>
            <h1 className="text-3xl font-bold text-center my-10 text-blue-300">Quiz Topic: {allQuestions.name}</h1>
            {/* question show  */}
            <div className='flex flex-col-reverse  lg:flex-row justify-center items-center lg:items-start '>
                <div className='basis-full lg:basis-4/5'>
                    {
                        allQuestions.questions.map((singleQuestion, index) => <SingleQuizCard
                            key={singleQuestion.id}
                            singleQuestion={singleQuestion}
                            index={index}
                            userCorrectAnswer={userCorrectAnswer}
                            setUserCorrectAnswer={setUserCorrectAnswer}
                            quizParticipateNumber={quizParticipateNumber}
                            setQuizParticipateNumber={setQuizParticipateNumber}
                        ></SingleQuizCard>)
                    }
                </div>
                {/* quiz score card  */}
                <div className='text-center  w-80 mb-10'>
                    <div className='bg-orange-300  rounded-2xl'>
                        <div className='py-5'>
                            <button
                                onClick={handleScoreShow}
                                className='btn'>Check Score</button>
                        </div>
                        {
                            scoreShow &&
                            <QuizScore
                                topic={allQuestions.name}
                                totalQuestion={allQuestions.questions.length}
                                participate={uniqQuizNumber.length}
                                userCorrectAnswer={userCorrectAnswer}
                            ></QuizScore>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Quiz;