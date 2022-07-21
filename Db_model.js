import mongoose from "mongoose";

const videoesSchema = mongoose.Schema({
    url:String,
    channel_name:String,
    channel_description:String,
    song:String,
    likes:String,
    comments:String,
    shares:String
});

// collection inside the database
export default mongoose.model("tiktokVideoes",videoesSchema);