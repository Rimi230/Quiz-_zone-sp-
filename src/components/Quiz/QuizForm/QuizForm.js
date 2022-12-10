import React from 'react';

const QuizForm = ({ singleQuestion , color }) => {
    
    // console.log(singleQuestion , correctAnswer);
    return (
        
        <label className=" cursor-pointer flex">
            <input  type="radio" name="question" value={singleQuestion} className={`radio ${color ?  "checked:bg-green-500" : "checked:bg-red-500"  } `} />
            <span className="label-text ml-4 text-lg"> {singleQuestion } </span>
        </label>
    );
};

export default QuizForm;