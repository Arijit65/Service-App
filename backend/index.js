import express from 'express';
import 'dotenv/config';
import mongoose from 'mongoose';
import cors from 'cors';
import {User,Service} from './mongoDB.js';
import jwt from 'jsonwebtoken';
import upload from './multer.js';
import path from 'path';
import { fileURLToPath } from 'url';


const __filename = fileURLToPath(import.meta.url); 
const __dirname = path.dirname(__filename);

const port = process.env.PORT || 8000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended:false}));
app.use(cors());

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));



app.post('/sign-up',async (req,res)=>{
    try {
        const user = new User(req.body);
        const {email,password}=req.body;
        const token = jwt.sign(email+password,process.env.JWT_SECRET)
        console.log(user);
        await user.save();
        res.status(200).send({user,token});
     
    } catch (error) {
        res.status(400).send(error.message);
        
    }
})

app.post('/add-service',upload,async (req,res)=>{
    try {
        const {serName,description}=req.body;
        const image = req.file.path;
        const service = new Service({
            image,
            serName,
            description,
            
        });
        await service.save();
        res.status(200).send(service);
     
    } catch (error) {
        res.status(400).send(error.message);
        
    }
})






const authUser = (req,res,next)=>{

    // try {
    //     const authHeader = req.headers.authorization;
    // if(!authHeader){
    //     return res.json({success:false,message:'token not provided'})
    // }
    // const token = authHeader.split(' ')[1];
    // const decoded = jwt.verify(token,process.env.JWT_SECRET)
    // // if(decoded !== req.body.email + req.body.password){
    // //     return res.json({success:false,message:'wrong token'})
    // req.user = decoded

    
    next()
        
    // } catch (error) {
    //     console.log(error)
    //     return res.status(403).json({success:false,message:'Invalid token'})
    // }

    
}




app.post('/login',authUser, async (req,res)=>{
    try {
      
       const {email,password} = req.body;
       const user = await User.findOne({email});
       if(!user){
        return res.status(404).send('invalid user')
       }
       if(user.password !== password){
        return res.status(401).send('password is incorrect');
       }

        res.status(200).send(user);
        console.log(user)

    } catch (error) {
       console.error('Error during login:', error); 
       res.status(500).send('Internal server error');
    
    }
})


app.get('/services',async(req,res)=>{
    try {
        const service = await Service.find({})
        res.status(200).send(service)
        
    } catch (error) {
        console.error(error);
        
    }
})

// app.get('/services/fetch',async(req,res)=>{
//     try {
//         const services = await Service.find({})
//         const modifiedServices = services.map((service) => ({
//             ...service,
//             image: `http://localhost:4000/${service.image}`, // Assuming images are in uploads folder
//           }));
//           res.send(modifiedServices);
        
        
//     } catch (error) {
//         console.error(error);
        
//     }
// })











app.get('/users',async(req,res)=>{
    try {
        const user = await User.find({})
        res.status(200).send(user)
    } catch (error) {
        console.error(error);
        
    }
})



app.post('/users/delete',async(req,res)=>{
    try {
        const email=req.body.email;
        await User.findOneAndDelete({email:email})
        res.status(200).send('User deleted successfully')
    } catch (error) {
        console.log(error)
    }
})



mongoose.connect('mongodb://localhost:27017/test_users').then(()=>{
    console.log('Connected to MongoDB');
    app.listen(port,()=>{
    console.log(`Server running on port ${port}`);
})
})

