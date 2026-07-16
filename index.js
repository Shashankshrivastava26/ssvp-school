const express = require("express");
const app = express();
const path = require("path");
// const mongoose = require("mongoose");
// const Photo = require("./models/photos");



const port = process.env.PORT || 8080;


app.use(express.static(path.join(__dirname, "public")));

app.set("view engine","ejs");



// Database

// mongoose.connect('mongodb://127.0.0.1:27017/test')
// .then(() => {
//     console.log("Connected!");

    

// })
// .catch(err=>{
//     console.log(err);
// });



app.get("/",(req,res)=>{

    res.render("index");

});



// const addphoto = async()=>{
//     console.log("addphoto hit")
//     let newphoto = new Photo({

//         url:"https://tse4.mm.bing.net/th/id/OIP.7S3Sq0mhzzrCZdCqgWhUUwHaFF?r=0&pid=Api&P=0&h=180"

//     });


//     await newphoto.save();

//     console.log("Photo saved");

// };


// addphoto();
app.listen(port,()=>{

    console.log("port is listening");

});