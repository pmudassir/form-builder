const mongoose = require("mongoose");

const formSchema = new mongoose.Schema(
    {
        header: { type: String },
        categories: { type: Array },
        items: { type: Array },
        preview: { type: String },
        options: { type: Array },
        customOptions: { type: Array },
        paragraph: { type: String },
        questions: { type: Array },
        choices: { type: Array },
    }
);

const Form = mongoose.model("Form", formSchema);
module.exports = Form;