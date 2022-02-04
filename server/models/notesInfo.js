import mongoose from "mongoose";

const notesSchema = mongoose.Schema({
    subj: String,   // subject
    fac: String,
    sem: String,    // semester
    year: String,
    file: String,   // Selected File

    uploadedOn:{
        type: Date,
        default: new Date()
    },
    verified: {
        type:Boolean,
        default: false
    },
})

var notesInfo = mongoose.model('notesInfo',notesSchema);

export default notesInfo;