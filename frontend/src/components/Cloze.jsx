import React, { useState } from 'react'

const Cloze = () => {
    const [editorContent, setEditorContent] = useState("");
    const [selectedWord, setSelectedWord] = useState("");
    const [options, setOptions] = useState([""]);

    const handleUnderline = () => {
        const newEditorContent = editorContent.replace(selectedWord, "____");
        setEditorContent(newEditorContent);
        setOptions([...options, selectedWord]);
        console.log(options);
    };

    const handleInputChange = (e) => {
        setEditorContent(e.target.value);
    };

    const handleInputSelect = (e) => {
        const selectedText = e.target.value.substring(
            e.target.selectionStart,
            e.target.selectionEnd
        );
        setSelectedWord(selectedText);
    };

    return (
        <div className="border-l-4 border-r-4 border-blue-500 p-4 mx-20 mt-5">
            <h2 className="text-lg font-semibold">Question 2</h2>
            <p className="text-sm mt-5">Preview</p>
            <input
                type="text"
                placeholder='Preview'
                value={editorContent}
                className="block w-1/2 mt-2 p-2 border rounded focus:outline-none focus:border-blue-500"
            />
            <div>
                <p className="text-sm mt-5">Sentence</p>
                {editorContent && <button onClick={handleUnderline}><u>U</u></button>}
                <input
                    type="text"
                    onChange={handleInputChange}
                    onSelect={handleInputSelect}
                    placeholder='Underline the word here to convert them into blanks'
                    className="block w-1/2 mt-2 p-2 border rounded focus:outline-none focus:border-blue-500"
                />
            </div>
            <div>
            <p className="text-sm mt-5">Options</p>
                {options && options.slice(1).map((word, index) => (
                    <div key={index}>
                        <input
                            type="text"
                            value={word}
                            className="block w-30 p-2 border rounded focus:outline-none focus:border-blue-500 mt-3"
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Cloze