import React from 'react';

const QuizScore = ({topic, totalQuestion, participate, userCorrectAnswer}) => {
    return (
        <div className='grid justify-center pb-10'>
            <div className="card w-64 shadow-2xl  ">
                <div className="card-body items-center text-center bg-slate-100">
                    <h2 className="card-title">Your Score for {topic}</h2>
                    <p>Total Question: {totalQuestion}</p>
                    <p>Your Participation: {participate}</p>
                    <p><span className='text-green-500'>Correct Answer</span> : {userCorrectAnswer}</p>
                    <p ><span className='text-green-500'>Your Progress:</span> { userCorrectAnswer || participate ?  ((userCorrectAnswer / participate) * 100) : 0}  %</p>
                </div>
            </div>
        </div>
    );
};

export default QuizScore;