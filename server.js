const express = require("express")
const app=express()

app.get('/products/cases')
app.get('/products/protections')
app.get('/products/bands')

app.get('/products/:categories',(req,res)=>{
    console.log(req.params)
    res.send("PING")
})

app.listen(3001, ()=>{
    console.log("LISTENING AT PORT 3001")
})
