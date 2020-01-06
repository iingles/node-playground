const express = require('express')

const app = express()

const port = 3000

app.use('/', (req, res, next)=>{
    console.log(`New request was recieved at ${new Date().toLocaleString()}`)
})

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`)
})