import React, { useState } from 'react'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { MdOutlineDragIndicator } from "react-icons/md";

const Categorize = () => {
    const [categories, setCategories] = useState(['']);
    const [items, setItems] = useState(['']);

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

    const DraggableItem = ({ item, index, onDrag, onDrop }) => {
        return (
            <Draggable draggableId={`item-${index}`} index={index}>
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
                                placeholder="Add item..."
                                value={item}
                                onChange={(e) => onDrag(index, e.target.value)}
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
                    </div>
                )}
            </Draggable>
        );
    };

    const ItemsList = ({ items, onItemDrag, onItemDrop }) => {
        return (
            <Droppable droppableId="items-list" direction="vertical">
                {(provided) => (
                    <div ref={provided.innerRef} {...provided.droppableProps}>
                        <div className="w-1/2">
                            <p className="text-sm font-semibold">Item</p>
                            {items.map((item, index) => (
                                <DraggableItem key={index} item={item} index={index} onDrag={onItemDrag} onDrop={onItemDrop} />
                            ))}
                            {provided.placeholder}
                        </div>
                    </div>
                )}
            </Droppable>
        );
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

    const handleItemDrop = (sourceIndex, targetIndex) => {
        // Handle drop event (reorder the items in the state, etc.)
        const updatedItems = [...items];
        const [draggedItem] = updatedItems.splice(sourceIndex, 1);
        updatedItems.splice(targetIndex, 0, draggedItem);
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
                <p className="text-sm font-semibold">Categories</p>
                {categories.map((category, index) => (
                    <div key={index} className="flex items-center mt-2">
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
                ))}
            </div>
            <div className="flex mt-20">
                {/* Left Section (Items) */}
                {/* <div className='w-1/2'>
                    <p className="text-sm font-semibold">Item</p>
                    {items.map((item, index) => (
                        <div key={index} className="flex items-center mt-2">
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
                    ))}
                </div> */}
                <div className="w-1/2">

                    <DragDropContext onDragEnd={handleItemDrag}>
                        {/* Left Section (Items) */}
                        <ItemsList items={items} onItemDrag={handleItemDrag} onItemDrop={handleItemDrop} />

                        {/* ... (Other sections) */}
                    </DragDropContext>
                </div>
                {/* Right Section (Categories Dropdown) */}
                <div className="ml-20 w-1/2">
                    <p className="text-sm font-semibold">Categories</p>
                    <select className="block w-40 p-2 border rounded focus:outline-none focus:border-blue-500 mt-2">
                        {categories.map((category, index) => (
                            <option key={index} value={category}>
                                {category}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
        </div>
    )
}

export default Categorize