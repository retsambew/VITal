import mongoose from "mongoose";

const roadmapSchema = mongoose.Schema({
    title: String,  
    auth: String,
    platform: String,
    link: String,
    year: String,
    section: String,
    img: String,

    uploadedOn:{
        type: Date,
        default: new Date()
    },
    verified: {
        type:Boolean,
        default: false
    },
})

var roadmapInfo = mongoose.model('roadmapInfo',roadmapSchema);

export default roadmapInfo;