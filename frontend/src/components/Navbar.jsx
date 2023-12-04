import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addHeader } from '../store/dataSlice';
import axios from 'axios';

const Navbar = () => {
    const [editableTitle, setEditableTitle] = useState('Untitled Quiz');
    const [isEditing, setIsEditing] = useState(false);

    const dispatch = useDispatch();

    const { header, items, options, customOptions, categories, questions, choices, preview, paragraph } = useSelector(state => state.data);

    const handleTitleEdit = () => {
        setIsEditing(true);
    };

    const handleTitleSave = () => {
        dispatch(addHeader(editableTitle));
        setIsEditing(false);
    };

    const handleTitleChange = (e) => {
        setEditableTitle(e.target.value);
    };

    const handleFormBuild = async () => {
        console.log("here");

        try {
            await axios.post('http://localhost:4000/api/form/data', { header, items, options, customOptions, categories, questions, choices, preview, paragraph });
            console.log("done");
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <nav className="bg-gray-100 p-4 flex justify-between items-center">
            <div>
                {isEditing ? (
                    <input
                        type="text"
                        value={editableTitle}
                        onChange={handleTitleChange}
                        className="text-black font-bold text-lg focus:outline-none"
                    />
                ) : (
                    <h1 className="text-black font-bold text-lg cursor-pointer" onClick={handleTitleEdit}>
                        {editableTitle}
                    </h1>
                )}
            </div>

            <div>
                <button
                    onClick={handleTitleSave}
                    className="bg-white text-blue-500 px-4 py-2 rounded-md hover:bg-blue-100 focus:outline-none mr-2"
                >
                    Save
                </button>
                <button
                    onClick={handleFormBuild}
                    className="bg-white text-blue-500 px-4 py-2 rounded-md hover:bg-blue-100 focus:outline-none"
                >
                    Save & Proceed
                </button>
            </div>
        </nav>
    );
};

export default Navbar;