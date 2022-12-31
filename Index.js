const express = require("express");
const app = express();
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors =require("cors")

mongoose.set('strictQuery', false);

// app.use("/",(req,res) => {
//     res.json("Hi friends subscribe");
// })

//middleware
app.use(cors())
app.use(morgan("dev"));
app.use(express.json());

//router file
const infoRouter = require("./router");
app.use("/info",infoRouter);

//router-product file
const infoRouterProduct = require("./router-product");
app.use("/product",infoRouterProduct);
//listen port
app.listen(5000,() => {
    console.log("server started on 5000"); 
})


//db connection
mongoose.connect('mongodb+srv://kaya:1234@cluster0.qvln2o1.mongodb.net/?retryWrites=true&w=majority', {useNewUrlParser: true}, (err) => {
    if (!err) {
        console.log('MongoDB Connection Succeeded.')
    } else {
        console.log('Error in DB connection : ' + err)
    }
});

