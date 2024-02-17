import * as dotenv from 'dotenv'
dotenv.config()
import express from 'express'
const app = express()
import morgan from 'morgan'
import mongoose from 'mongoose'

//routes
import authRouter from './routes/authRouter.js'



if(process.env.NODE_ENV==='development'){
    app.use(morgan('dev'));
}

app.use(express.json())


app.get('/',(req,res)=>{
    res.send('Hello world')
})


app.get('/api/v1/test',(req,res)=>{
    res.json({msg:'test route'})
})

app.use('/api/v1/auth',authRouter)

app.post('/',(req,res)=>{
    console.log(req);
    res.json({message:'data recived',data:req.body})
})



app.use('*',(req,res)=>{
    res.status(404).json({msg:'not found!'})
})
app.use((err,req,res,next)=>{
    console.log(err);
    res.status(500).json({msg:'something get wrong!'})
})






const port=process.env.PORT || 5100
try {
    await mongoose.connect(process.env.MONGO_URL)
    app.listen(port,()=>{
        console.log(`server is running on port ${port}...`);
    })
    
} catch (error) {
    console.log(error);
    process.exit(1)
}