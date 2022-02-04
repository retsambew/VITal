import mongoose from "mongoose";

const memberSchema = mongoose.Schema({
    id: String,
    name: String,
    desn: String,   //designation
    links: [String],  // Social Handles    
    verified: {
        type:Boolean,
        default: false
    },
})

var memberInfo = mongoose.model('memberInfo',memberSchema);

export default memberInfo;