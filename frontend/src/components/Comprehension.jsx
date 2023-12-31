import React, { useState } from 'react'
import MCQ from './MCQ'
import { addParagraph } from '../store/dataSlice'
import { useDispatch } from 'react-redux';

const Comprehension = () => {
    const [mcqComponents, setMCQComponents] = useState([<MCQ key={0} />]);
    const [paragraph, setParagraph] = useState("");

    const dispatch = useDispatch();

    const handleAddMCQ = () => {
        setMCQComponents(prevComponents => [...prevComponents, <MCQ key={prevComponents.length} />]);
    }

    const handleRemoveMCQ = (index) => {
        setMCQComponents(prevComponents => prevComponents.filter((_, i) => i !== index));
    }

    const handleInputChange = (e) => {
        setParagraph(e.target.value);
    }

    const handleSubmit = () => {
        dispatch(addParagraph(paragraph));
    }

    return (
        <div className="border-l-4 border-r-4 border-blue-500 p-4 mx-20 mt-5">
            <h2 className="text-lg font-semibold">Question 3</h2>
            <textarea className="border border-gray-300 p-2 mt-2" onChange={handleInputChange} rows={15} cols={50}></textarea>
            <div className='flex'>
                <div className="flex-grow">
                    {mcqComponents}
                </div>
                <div className="float-right">
                    <button
                        onClick={handleAddMCQ}
                        className="mt-3 ml-2 px-4 py-2 bg-blue-500 text-white rounded"
                    >
                        +
                    </button>
                </div>
                <div className="float-right">
                    {mcqComponents.length > 1 &&
                        <button
                            onClick={() => handleRemoveMCQ(mcqComponents.length - 1)}
                            className="mt-3 ml-2 px-4 py-2 bg-red-500 text-white rounded"
                        >
                            -
                        </button>}
                </div>
            </div>
            <button className='mt-3 ml-2 px-4 py-2 bg-blue-500 text-white rounded' onClick={handleSubmit}>Done</button>
        </div>
    )
}

export default Comprehension