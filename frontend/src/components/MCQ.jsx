import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addQuestion, addChoice } from '../store/dataSlice';

const MCQ = ({ id }) => {
    const [questions, setQuestions] = useState([""]);
    const [choices, setChoices] = useState([""]);
    const [choice1, setChoice1] = useState("");
    const [choice2, setChoice2] = useState("");
    const [choice3, setChoice3] = useState("");
    const [choice4, setChoice4] = useState("");

    const dispatch = useDispatch();

    const handleChoices = () => {
        let newChoices = [choice1, choice2, choice3, choice4]
        choices.push(newChoices)
    };

    const handleSubmit = () => {
        handleChoices();
        dispatch(addQuestion(questions));
        dispatch(addChoice(choices));
    }

    return (
        <div className="p-4 mb-8 border-2 border-gray-300 ml-20 mr-20 mt-8 rounded-md">
            <div className="mb-4">
                <input type="text" placeholder="Enter your question" className="w-full px-4 py-2 border border-gray-300 rounded" onChange={(e) => setQuestions(e.target.value)} />
            </div>
            <div className="space-y-4">
                <div className="flex items-center">
                    <input
                        type="radio"
                        name={`answer-${id}`}
                        className="mr-2"
                    />
                    <input
                        type="text"
                        placeholder="Option 1"
                        className="w-full px-4 py-2 border border-gray-300 rounded"
                        onChange={(e) => setChoice1(e.target.value)}
                    />
                </div>
                <div className="flex items-center">
                    <input
                        type="radio"
                        name={`answer-${id}`}
                        className="mr-2"
                    />
                    <input
                        type="text"
                        placeholder="Option 2"
                        className="w-full px-4 py-2 border border-gray-300 rounded"
                        onChange={(e) => setChoice2(e.target.value)}
                    />
                </div>
                <div className="flex items-center">
                    <input
                        type="radio"
                        name={`answer-${id}`}
                        className="mr-2"
                    />
                    <input
                        type="text"
                        placeholder="Option 3"
                        className="w-full px-4 py-2 border border-gray-300 rounded"
                        onChange={(e) => setChoice3(e.target.value)}
                    />
                </div>
                <div className="flex items-center">
                    <input
                        type="radio"
                        name={`answer-${id}`}
                        className="mr-2"
                    />
                    <input
                        type="text"
                        placeholder="Option 4"
                        className="w-full px-4 py-2 border border-gray-300 rounded"
                        onChange={(e) => setChoice4(e.target.value)}
                    />
                </div>
            </div>
            <button className='mt-3 ml-2 px-4 py-2 bg-blue-500 text-white rounded' onClick={handleSubmit}>Done</button>
        </div>
    )
}

export default MCQ