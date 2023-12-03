import React, { useState } from 'react'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { MdOutlineDragIndicator } from "react-icons/md";

const Categorize = () => {
    const [categories, setCategories] = useState(['']);
    const [items, setItems] = useState(['']);

    // item category handlers -----------------------------------------------

    const addCategoryInput = () => {
        setCategories([...categories, '']);
    };

    const handleCategoryChange = (index, value) => {
        const updatedCategories = [...categories];
        updatedCategories[index] = value;
        setCategories(updatedCategories);
    };

    const removeCategoryInput = (index) => {
        const updatedCategories = [...categories];
        updatedCategories.splice(index, 1);
        setCategories(updatedCategories);
    };

    const handleCategoryDrag = (result) => {
        if (!result.destination) {
            return;
        }

        const updatedCategories = Array.from(categories);
        const [removed] = updatedCategories.splice(result.source.index, 1);
        updatedCategories.splice(result.destination.index, 0, removed);

        setCategories(updatedCategories);
    };

    // item function handlers -----------------------------------------------

    const addItemInput = () => {
        setItems([...items, '']);
    };

    const handleItemChange = (index, value) => {
        const updatedItems = [...items];
        updatedItems[index] = value;
        setItems(updatedItems);
    };

    const removeItemInput = (index) => {
        const updatedItems = [...items];
        updatedItems.splice(index, 1);
        setItems(updatedItems);
    };

    const handleItemDrag = (result) => {
        if (!result.destination) {
            return;
        }

        const updatedItems = Array.from(items);
        const [removed] = updatedItems.splice(result.source.index, 1);
        updatedItems.splice(result.destination.index, 0, removed);

        // Update the state with the reordered items
        setItems(updatedItems);
    };

    return (
        <div className="border-l-4 border-r-4 border-blue-500 p-4 mx-20 mt-5">
            <h2 className="text-lg font-semibold">Question 1</h2>
            <input
                type="text"
                placeholder="Description(Optional)"
                className="block px-10 mt-2 p-2 border rounded focus:outline-none focus:border-blue-500"
            />
            <div className="mt-20">
                {/* Categories section */}
                <p className="text-sm font-semibold">Categories</p>
                <DragDropContext onDragEnd={handleCategoryDrag}>
                    <Droppable droppableId="categories">
                        {(provided) => (
                            <div ref={provided.innerRef} {...provided.droppableProps}>
                                {categories.map((category, index) => (
                                    <Draggable key={index} draggableId={`category-${index}`} index={index}>
                                        {(provided) => (
                                            <div
                                                ref={provided.innerRef}
                                                {...provided.draggableProps}
                                                {...provided.dragHandleProps}
                                            >
                                                <div className="flex items-center mt-2">
                                                    <div className="cursor-move mr-2">
                                                        <MdOutlineDragIndicator />
                                                    </div>
                                                    <input
                                                        type="text"
                                                        placeholder="Add categories..."
                                                        value={category}
                                                        onChange={(e) => handleCategoryChange(index, e.target.value)}
                                                        className="block w-30 p-2 border rounded focus:outline-none focus:border-blue-500"
                                                    />
                                                    {index === categories.length - 1 && (
                                                        <button onClick={addCategoryInput} className="ml-2 px-4 py-2 bg-blue-500 text-white rounded">
                                                            +
                                                        </button>
                                                    )}
                                                    {categories.length > 1 && (
                                                        <button onClick={() => removeCategoryInput(index)} className="ml-2 px-4 py-2 bg-red-500 text-white rounded">
                                                            -
                                                        </button>
                                                    )}
                                                </div>
                                            </div>
                                        )}
                                    </Draggable>
                                ))}
                                {provided.placeholder}
                            </div>
                        )}
                    </Droppable>
                </DragDropContext>
            </div>
            <div className="flex mt-20">
                {/* Left Section (Items) */}
                <div className='w-1/2'>
                    <p className="text-sm font-semibold">Item</p>
                    <DragDropContext onDragEnd={handleItemDrag}>
                        <Droppable droppableId="items">
                            {(provided) => (
                                <div ref={provided.innerRef} {...provided.droppableProps}>
                                    {items.map((item, index) => (
                                        <Draggable key={index} draggableId={`item-${index}`} index={index}>
                                            {(provided) => (
                                                <div
                                                    ref={provided.innerRef}
                                                    {...provided.draggableProps}
                                                    {...provided.dragHandleProps}
                                                    className="flex items-center mt-2"
                                                >
                                                    <div className="cursor-move mr-2">
                                                        <MdOutlineDragIndicator />
                                                    </div>
                                                    <input
                                                        type="text"
                                                        placeholder="Add item..."
                                                        value={item}
                                                        onChange={(e) => handleItemChange(index, e.target.value)}
                                                        className="block w-30 p-2 border rounded focus:outline-none focus:border-blue-500"
                                                    />
                                                    {index === items.length - 1 && (
                                                        <button onClick={addItemInput} className="ml-2 px-4 py-2 bg-blue-500 text-white rounded">
                                                            +
                                                        </button>
                                                    )}
                                                    {items.length > 1 && (
                                                        <button onClick={() => removeItemInput(index)} className="ml-2 px-4 py-2 bg-red-500 text-white rounded">
                                                            -
                                                        </button>
                                                    )}
                                                </div>
                                            )}
                                        </Draggable>
                                    ))}
                                    {provided.placeholder}
                                </div>
                            )}
                        </Droppable>
                    </DragDropContext>
                </div>
                <div className="w-1/2">
                </div>
                {/* Right Section (Categories Dropdown) */}
                <div className="ml-20 w-1/2">
                    <p className="text-sm font-semibold">Belongs To</p>
                    {items.map((item, index) => (
                        <select className="block w-40 p-2 border rounded focus:outline-none focus:border-blue-500 mt-2">
                            {categories.map((category, index) => (
                                <option key={index} value={category}>
                                    {category}
                                </option>
                            ))}
                        </select>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Categorize