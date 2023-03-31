const express=require('express')

const app =express()
const server=require('http').createServer(app)
// const sequelize = require('./db')

app.get('/',async(req,res)=>{
    // const data=await sequelize.query(`SELECT * FROM orders;`)
//    res.send(data)
    res.send('hello')
})

server.listen(3333,()=>{
    console.log("listening on port 3333");
})