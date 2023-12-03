import React from 'react'

const MCQ = ({ id }) => {
    return (
        <div class="p-4 mb-8 border-2 border-gray-300 ml-20 mr-20 mt-8 rounded-md">
            <div class="mb-4">
                <input type="text" placeholder="Enter your question" class="w-full px-4 py-2 border border-gray-300 rounded" />
            </div>
            <div class="space-y-4">
                <div class="flex items-center">
                    <input type="radio" name={`answer-${id}`} value="1" class="mr-2" />
                    <input type="text" placeholder="Option 1" class="w-full px-4 py-2 border border-gray-300 rounded" />
                </div>
                <div class="flex items-center">
                    <input type="radio" name={`answer-${id}`} value="2" class="mr-2" />
                    <input type="text" placeholder="Option 2" class="w-full px-4 py-2 border border-gray-300 rounded" />
                </div>
                <div class="flex items-center">
                    <input type="radio" name={`answer-${id}`} value="3" class="mr-2" />
                    <input type="text" placeholder="Option 3" class="w-full px-4 py-2 border border-gray-300 rounded" />
                </div>
                <div class="flex items-center">
                    <input type="radio" name={`answer-${id}`} value="4" class="mr-2" />
                    <input type="text" placeholder="Option 4" class="w-full px-4 py-2 border border-gray-300 rounded" />
                </div>
            </div>
        </div>
    )
}

export default MCQ