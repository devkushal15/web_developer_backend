

const express = require('express')

const blog = require('./routers/blog')

// ...





const app = express()
const port = 3000



app.use(express.static("public"))

app.use('/blog', blog)




app.get('/', (req, res) => {

    console.log("hey its a get request");
    res.send('Hello World! get')
})



app.get('/public/:slug', (req, res) => {

    console.log("hey its a put request");

    res.send(`Hello World! post ${req.params.slug}`)
})


app.get("/index",(req,res)=>{

    console.log("this is index .html");

res.sendFile("template/main.html",{root:__dirname})



})



app.get("/about",(req,res)=>{

    console.log("this is index .html");

res.sendFile("template/page.html",{root:__dirname})



})



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})