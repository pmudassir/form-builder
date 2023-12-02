import React, { useState } from 'react';

const Navbar = () => {
    const [editableTitle, setEditableTitle] = useState('Untitled Quiz');
    const [isEditing, setIsEditing] = useState(false);

    const handleTitleEdit = () => {
        setIsEditing(true);
    };

    const handleTitleSave = () => {
        setIsEditing(false);
    };

    const handleTitleChange = (e) => {
        setEditableTitle(e.target.value);
    };

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
                    onClick={handleTitleSave}
                    className="bg-white text-blue-500 px-4 py-2 rounded-md hover:bg-blue-100 focus:outline-none"
                >
                    Save & Proceed
                </button>
            </div>
        </nav>
    );
};

export default Navbar;