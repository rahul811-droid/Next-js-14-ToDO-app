import mongoose from "mongoose"


export const ConnectDB = async()=>{
    await mongoose.connect('mongodb+srv://rahul25062:rahul123@cluster0.qwh05.mongodb.net/todo-app?retryWrites=true&w=majority&appName=Cluster0')
console.log("DB connected")
}