import mongoose from "mongoose";

const clubSchema = mongoose.Schema({
    id: String,
    name: String,
    core: [String],   // core members
    cord: [String],   // faculty coordinator
    desc: String,     // description
    links: [String],  // Social Handles    
    logo: String,
    verified: {
        type:Boolean,
        default: false
    },
})

var clubInfo = mongoose.model('clubInfo',clubSchema);

export default clubInfo;