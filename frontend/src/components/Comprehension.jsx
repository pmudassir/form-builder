import React, { useState } from 'react'
import MCQ from './MCQ'

const Comprehension = () => {
    const [mcqComponents, setMCQComponents] = useState([<MCQ key={0} />]);

    const handleAddMCQ = () => {
        setMCQComponents(prevComponents => [...prevComponents, <MCQ key={prevComponents.length} />]);
    }

    const handleRemoveMCQ = (index) => {
        setMCQComponents(prevComponents => prevComponents.filter((_, i) => i !== index));
    }

    return (
        <div className="border-l-4 border-r-4 border-blue-500 p-4 mx-20 mt-5">
            <h2 className="text-lg font-semibold">Question 3</h2>
            <textarea className="border border-gray-300 p-2 mt-2" rows={15} cols={50}></textarea>
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
        </div>
    )
}

export default Comprehension