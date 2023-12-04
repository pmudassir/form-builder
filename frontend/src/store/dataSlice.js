import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
    name: "data",
    initialState: {
        header: "",
        categories: [],
        items: [],
        preview: "",
        options: [],
        customOptions: [],
        paragraph: "",
        questions: [],
        choices: []
    },
    reducers: {
        addHeader: (state, action) => {
            state.header = action.payload;
        },
        addCategories: (state, action) => {
            state.categories.push(action.payload)
        },
        addItems: (state, action) => {
            state.items.push(action.payload)
        },
        addPreview: (state, action) => {
            state.preview = action.payload;
        },
        addOptions: (state, action) => {
            state.options.push(action.payload)
        },
        addCustomOptions: (state, action) => {
            state.customOptions.push(action.payload)
        },
        addParagraph: (state, action) => {
            state.paragraph = action.payload;
        },
        addQuestion: (state, action) => {
            state.questions.push(action.payload);
        },
        addChoice: (state, action) => {
            state.choices.push(action.payload);
        }
    }
})

export const { addHeader, addCategories, addItems, addPreview, addOptions, addCustomOptions, addParagraph, addQuestion, addChoice } = dataSlice.actions;
export default dataSlice.reducer