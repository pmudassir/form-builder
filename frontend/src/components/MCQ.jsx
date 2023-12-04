import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addQuestions, addChoices } from '../store/dataSlice';

const MCQ = ({ id }) => {
    const [questions, setQuestions] = useState([""]);
    const [choices, setChoices] = useState([""]);

    const dispatch = useDispatch();

    const handleChoices = (e) => {
        setChoices(prev => [...prev, e.target.value]);
    }

    const handleSubmit = () => {
        dispatch(addQuestions(questions));
        dispatch(addChoices(choices));
    }

    return (
        <div className="p-4 mb-8 border-2 border-gray-300 ml-20 mr-20 mt-8 rounded-md">
            <div className="mb-4">
                <input type="text" placeholder="Enter your question" className="w-full px-4 py-2 border border-gray-300 rounded" onChange={(e) => setQuestions(prev => [...prev, e.target.value])} />
            </div>
            <div className="space-y-4">
                <div className="flex items-center">
                    <input type="radio" name={`answer-${id}`} value="1" className="mr-2" />
                    <input type="text" placeholder="Option 1" className="w-full px-4 py-2 border border-gray-300 rounded" onChange={handleChoices} />
                </div>
                <div className="flex items-center">
                    <input type="radio" name={`answer-${id}`} value="2" className="mr-2" />
                    <input type="text" placeholder="Option 2" className="w-full px-4 py-2 border border-gray-300 rounded" onChange={handleChoices} />
                </div>
                <div className="flex items-center">
                    <input type="radio" name={`answer-${id}`} value="3" className="mr-2" />
                    <input type="text" placeholder="Option 3" className="w-full px-4 py-2 border border-gray-300 rounded" onChange={handleChoices} />
                </div>
                <div className="flex items-center">
                    <input type="radio" name={`answer-${id}`} value="4" className="mr-2" />
                    <input type="text" placeholder="Option 4" className="w-full px-4 py-2 border border-gray-300 rounded" onChange={handleChoices} />
                </div>
            </div>
            <button className='mt-3 ml-2 px-4 py-2 bg-blue-500 text-white rounded' onClick={handleSubmit}>Done</button>
        </div>
    )
}

export default MCQ