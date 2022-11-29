const express = require('express');
const app  = express();
const { v4 } = require('uuid');
const port = process.env.PORT || 5000
app.get('/' , (req, res)=>{
    const path = `/api/item/${v4()}`;
  res.setHeader('Content-Type', 'text/html');
  res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
  res.end(`Hello! Go to item: <a href="${path}">${path}</a>`);
    
})

app.get('/api/item/:slug', (req, res) => {
    const { slug } = req.params;
    res.end(`Item: ${slug}`);
  });


app.listen(port, (error)=>{
    console.log('server started at', port)
})