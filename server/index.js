




const express=require('express')
const  app=express()
app.use(express.json())



app.get('/',(req,resp)=>{
    resp.send('data is created')
})


app.listen(6006,()=>{
    console.log(`server is runnning on 6006`)
})