import mongoose from "mongoose";

const courseSchema = mongoose.Schema({
    title: String,  
    auth: String,
    platform: String,
    link: String,
    year: String,
    section: String,
    img: String,

    likes:{
        type: Number,
        default: 0,
    },
    verified: {
        type:Boolean,
        default: false
    },
})

var courseInfo = mongoose.model('courseInfo',courseSchema);

export default courseInfo;