import mongoose from 'mongoose';
const userSchema = new mongoose.Schema({
    name:{type:String, required:true},
    email:{type:String, required:true, unique:true},
    password:{type:String, required:true}
},{timestamps:true})

const serviceSchema = new mongoose.Schema({
    image:{type:String,required:true},
    serName:{type:String,required:true},
    description:{type:String, required:true}
})

const User = mongoose.model('user',userSchema)
const Service = mongoose.model('service',serviceSchema)

export {User,Service} ;