import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const QuizTopicCard = ({ quizTopic }) => {
    const { id, logo, name, total } = quizTopic;
    const navigate = useNavigate();

    const handleStartQuiz = () => {
        navigate(`/home/${id}`);
    }
    return (
        <div className="card lg::h-60 lg:card-side bg-slate-200 shadow-2xl mb-8">
            <figure><img src={logo} alt="Album" className='h-60 lg::h-full' /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>Total Questions: {total}</p>
                <div className="card-actions justify-end">
                    <button
                        onClick={handleStartQuiz}
                        className="btn bg-[#3A4256]">
                        Start Quiz
                        <FontAwesomeIcon icon={faArrowRight} className="text-white ml-4"></FontAwesomeIcon>
                    </button>

                </div>
            </div>
        </div>
    );
};

export default QuizTopicCard;