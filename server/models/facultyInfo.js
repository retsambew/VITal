import mongoose from "mongoose";

const facultySchema = mongoose.Schema({
    id: String,     // mst id
    name: String,
    desn: String,   // designation
    subj: [String], // subjects taught
    desc: String,   // breif introduction
    link: [String], // social handles
    file: String,   // Selected File
    valid: {
        type:Boolean,
        default: false
    },
})

var facultyInfo = mongoose.model('facultyInfo',facultySchema);

export default facultyInfo;