const express = require('express');
const mongoose = require('mongoose');
const Product =require('./models/product.model.js')
const productRoute=require("./routes/product.route.js")
const app = express();


//middleware
app.use(express.json());
app.use(express.urlencoded({extended:false}));



app.use("/api/products",productRoute)

app.get('/',(req,res)=>{
    res.send("hello from Node API  ")
})






mongoose.connect('mongodb+srv://kousikamayan06:gcfnt08nMvj3lOpt@backenddb.jfpe35q.mongodb.net/Node-API?retryWrites=true&w=majority&appName=backendDB').then(
    ()=>{console.log("connected!");
    app.listen(3000,()=>{console.log("server is running on port 3000")})


    }
).catch(
    ()=>console.log("connection failed")
)
