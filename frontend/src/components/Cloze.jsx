import React, { useState } from 'react'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { MdOutlineDragIndicator } from "react-icons/md";


const Cloze = () => {
    const [editorContent, setEditorContent] = useState("");
    const [selectedWord, setSelectedWord] = useState("");
    const [options, setOptions] = useState([""]);
    const [customOptions, setCustomOptions] = useState([""]);

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

    const handleCustomOptionsChange = (index, value) => {
        const newOptions = [...customOptions];
        newOptions[index] = value;
        setCustomOptions(newOptions);
    };

    const addInput = () => {
        setCustomOptions([...customOptions, '']);
    };

    const removeInput = (index) => {
        const newOptions = [...customOptions];
        newOptions.splice(index, 1);
        setCustomOptions(newOptions);
    };

    const onDragEnd = (result) => {
        if (!result.destination) return;

        const updatedOptions = [...options];
        const [draggedOption] = updatedOptions.splice(result.source.index + 1, 1);
        updatedOptions.splice(result.destination.index + 1, 0, draggedOption);

        setOptions(updatedOptions);
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
            <DragDropContext onDragEnd={onDragEnd}>
                {/* <p className="text-sm mt-5">Options</p> */}
                <Droppable droppableId="droppable">
                    {(provided) => (
                        <div ref={provided.innerRef} {...provided.droppableProps}>
                            <div>
                                <p className="text-sm mt-5">Options</p>
                                {options && options.slice(1).map((word, index) => (
                                    <Draggable key={index} draggableId={`draggable-${index}`} index={index}>
                                        {(provided) => (
                                            <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                                <div className="flex items-center mt-2">
                                                    <div className="cursor-move mr-2">
                                                        <MdOutlineDragIndicator />
                                                    </div>
                                                    <input
                                                        type="text"
                                                        value={word}
                                                        className="block w-30 p-2 border rounded focus:outline-none focus:border-blue-500 mt-3"
                                                    />
                                                </div>
                                            </div>
                                        )}
                                    </Draggable>
                                ))}
                                <div>
                                    {customOptions.map((option, index) => (
                                        <div key={index} className="flex items-center">
                                            <input
                                                type="text"
                                                placeholder="Options (optional)"
                                                value={option}
                                                onChange={(e) => handleCustomOptionsChange(index, e.target.value)}
                                                className="w-30 p-2 border rounded focus:outline-none focus:border-blue-500 mt-3"
                                            />
                                            {index === customOptions.length - 1 ? (
                                                <button onClick={addInput} className="mt-3 ml-2 px-4 py-2 bg-blue-500 text-white rounded">+</button>
                                            ) : (
                                                <button onClick={() => removeInput(index)} className="mt-3 ml-2 px-4 py-2 bg-red-500 text-white rounded">-</button>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </DragDropContext>
        </div>
    )
}

export default Cloze