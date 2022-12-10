import React, { useState } from 'react';
import QuizForm from '../QuizForm/QuizForm';
import { toast } from 'react-toastify'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';

const SingleQuizCard = ({ singleQuestion, index, userCorrectAnswer, setUserCorrectAnswer, quizParticipateNumber, setQuizParticipateNumber }) => {
    const { correctAnswer, question, options } = singleQuestion;

    const [clickIndex, setClickIndex] = useState(-1);
    const [color, setColor] = useState(false);

    // console.log(singleQuestion);

    const handleOnchangeForm = event => {
        // event.preventDefault();
        const newParticipateNumber = [...quizParticipateNumber, index]
        setQuizParticipateNumber(newParticipateNumber)

        console.log(index);
        const userAnswer = event.target.value;
        if (correctAnswer === userAnswer) {
            console.log(index , clickIndex);
            if(clickIndex !== index){
                setUserCorrectAnswer(userCorrectAnswer + 1);
                setClickIndex(index);
                
            }
            // setUserCorrectAnswer(userCorrectAnswer + 1)
            setColor(true)
            toast.success("WOW ! That's correct.", {
                position: toast.POSITION.TOP_CENTER
            });
        }
        else {
            if(clickIndex === index){
                console.log(index , clickIndex);
                setUserCorrectAnswer(userCorrectAnswer - 1);
                setClickIndex(-1);
            }
            setColor(false)
            toast.error("OPPS! That's Wrong.", {
                position: toast.POSITION.TOP_CENTER
            });
        }

    }

    const handleEyeButton = ()  => {
        toast.info(correctAnswer, {
            position: toast.POSITION.TOP_CENTER
          });
    }

    return (
        <div>
            <div className="card w-11/12 lg:w-10/12 xl:w-2/3 shadow-2xl  mx-auto mb-6">
                <div className="card-body  ">
                    <h2 className="card-title text-center justify-center mb-4 px-4 lg:px-24">Quiz {index + 1}: {question}</h2>

                    <form  onChange={handleOnchangeForm} className="grid justify-self-start ml-4 lg:ml-16 gap-5">
                        {
                            // mapping for quiz option show 
                            options.map((singleQuestion, index) => <QuizForm
                                key={index}
                                singleQuestion={singleQuestion}
                                correctAnswer={correctAnswer}
                                color={color}
                            ></QuizForm>)
                        }
                    </form>

                    {/* Eye icon   show correct answer for single quiz  */}
                    <div className='absolute right-2 lg:right-10 '>
                        <FontAwesomeIcon
                        onClick={handleEyeButton}
                            icon={faEye} className="text-slate-400 text-xl  cursor-pointer">

                        </FontAwesomeIcon>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleQuizCard;