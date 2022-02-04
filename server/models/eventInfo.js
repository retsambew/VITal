import mongoose from "mongoose";

const eventSchema = mongoose.Schema({
    name: String,
    desc: String,
    host: String,
    reward: String,
    eleg: String, //elegibility criteria
    date: String,
    link: String, //registration link
    logo: String,
    
    verified: {
        type:Boolean,
        default: false
    },
})

var eventInfo = mongoose.model('eventInfo',eventSchema);

export default eventInfo;