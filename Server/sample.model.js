import mongoose from "mongoose";

const sampleSchema = new mongoose.Schema({
    task: { type: String, required: true } 
});

export default mongoose.model('tasks', sampleSchema); 
