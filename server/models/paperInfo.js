import mongoose from "mongoose";

const paperSchema = mongoose.Schema({
    subj: String,   // subject
    fac: String,
    exam: String,
    sem: String,    // semester
    year: String,
    file: String,

    uploadedOn:{
        type: Date,
        default: new Date()
    },
    verified: {
        type:Boolean,
        default: false
    },
})

var paperInfo = mongoose.model('paperInfo',paperSchema);

export default paperInfo;