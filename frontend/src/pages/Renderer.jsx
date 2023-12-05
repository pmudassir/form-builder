import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { Draggable, Droppable, DragDropContext } from 'react-beautiful-dnd';

const Renderer = () => {
    const { header, items, options, customOptions, categories, questions, choices, preview, paragraph } = useSelector(state => state.data);

    const [itemsState, setItemsState] = useState(items);

    const handleDragEnd = (result) => {
        const { destination, source } = result;

        // Check if the drag result has a valid destination
        if (!destination) {
            return;
        }

        // Check if the draggable item was dropped in a different position
        if (
            destination.droppableId === source.droppableId &&
            destination.index === source.index
        ) {
            return;
        }

        // Perform the necessary updates based on the drag and drop result
        if (source.droppableId === 'droppable') {
            // Handle drag and drop within the main droppable container
            const updatedItems = Array.from(items[0]);
            const [draggedItem] = updatedItems.splice(source.index, 1);
            updatedItems.splice(destination.index, 0, draggedItem);

            setItemsState(updatedItems);
            // Update the state with the new order of items
            // Note: You will need to dispatch an action to update the Redux store
        } else {
            // Handle drag and drop within the category droppable containers
            const categoryId = parseInt(source.droppableId.replace('droppable', ''));
            const updatedCategories = [...categories[1]];
            const updatedCategoryItems = [...updatedCategories[categoryId]];
            const [draggedItem] = updatedCategoryItems.splice(source.index, 1);
            updatedCategoryItems.splice(destination.index, 0, draggedItem);
            updatedCategories[categoryId] = updatedCategoryItems;

            // Update the state with the new order of category items
            // Note: You will need to dispatch an action to update the Redux store
        }
    };

    return (
        <div className="flex flex-col items-center justify-center">
            {/* header */}
            <nav className="bg-gray-100 p-4 flex justify-between items-center w-full">
                <h1 className="text-black font-bold text-lg cursor-pointer">
                    {header}
                </h1>
            </nav>
            {/* Categorize */}
            <div className="border-l-4 border-r-4 border-blue-500 p-4 mx-20 mt-5 w-3/4">
                <h2 className="text-lg font-semibold">Question 1</h2>
                <DragDropContext onDragEnd={handleDragEnd}>
                    <Droppable droppableId="droppable">
                        {(provided) => (
                            <div ref={provided.innerRef} {...provided.droppableProps} className='flex'>
                                {/* draggable elements go here */}
                                {items[0].map((item, index) => (
                                    <Draggable draggableId={index.toString()} index={index} key={index}>
                                        {(provided) => (
                                            <div
                                                ref={provided.innerRef}
                                                {...provided.draggableProps}
                                                {...provided.dragHandleProps}
                                                className="ml-2 border-2 text-black rounded w-20"
                                            >
                                                {item}
                                            </div>
                                        )}
                                    </Draggable>
                                ))}
                                {provided.placeholder}
                            </div>
                        )}
                    </Droppable>
                </DragDropContext>
                <div className='flex mt-5'>
                    {categories[1].map((category, index) => (
                        <div className='ml-5'>
                            <div className="flex justify-center">
                                <div key={index} className="bg-pink-200 w-40 h-10 mb-2 rounded-md text-center">{category}</div>
                            </div>
                            <div className="flex justify-center">
                                <DragDropContext onDragEnd={handleDragEnd}>
                                    <Droppable droppableId={`droppable${index}`}>
                                        {(provided) => (
                                            <div ref={provided.innerRef} {...provided.droppableProps}>
                                                {/* Your draggable components go here */}
                                                <Draggable draggableId={`draggable${index}`} index={0}>
                                                    {(provided) => (
                                                        <div
                                                            ref={provided.innerRef}
                                                            {...provided.draggableProps}
                                                            {...provided.dragHandleProps}
                                                            className="bg-pink-200 w-40 h-40 rounded-md"
                                                        >
                                                            {itemsState[1]}
                                                        </div>
                                                    )}
                                                </Draggable>
                                                {provided.placeholder}
                                            </div>
                                        )}
                                    </Droppable>
                                </DragDropContext>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="mt-4">Question 2</div>
            <div className="mt-4">Question 3</div>
        </div>
    )
}

export default Renderer