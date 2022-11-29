const express = require('express');
const app  = express();
const port = process.env.PORT || 5000
app.get('/' , (req, res)=>{
    res.status(200).json({success: true})
})


app.listen(port, (error)=>{
    console.log('server started at', port)
})