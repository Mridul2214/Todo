import express from 'express'
import connect from './connection.js'
import router from './router.js'
import cors from 'cors'

const app=express()
app.use(express.json())
app.use(cors()) 
app.use('/', router)

connect().then(()=>{
    app.listen(3000,()=>{
        console.log('server started at http://localhost:3000');
        
    })
}) .catch((error)=>{
    console.log(error);
    
})