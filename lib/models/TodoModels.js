import mongoose from "mongoose";

const Schema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    isComplited:{
        type:Boolean,
        default:false
    }
},
{timestamps:true});


 const ToModel =mongoose.models.todo || mongoose.model('todo',Schema);
 
 export default ToModel
