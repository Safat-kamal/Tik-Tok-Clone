import 'dotenv/config'
import express from "express";
import mongoose from "mongoose";
const app = express();
const port = process.env.PORT || 9000;
import VideoesModel from './Db_model.js';

// middleware 
app.use(express.json());
//cores middleware
app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin','*'),
    res.setHeader('Access-Control-Allow-Headers','*'),
    next();
});


// Db configuration
const db_connection_url = process.env.DATABASE_URL;
mongoose.connect(db_connection_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then((response)=>{   
    console.log("Database Connection Successfull");
}).catch((error)=>{
    console.log(error)
});

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
    app.get("/", (req, res) => {
        res.sendFile(path.join(__dirname + "/client/build/index.html"));
    });
    //Get all the reels
    app.get("/posts",(req,res)=>{
        VideoesModel.find((err,data)=>{
            if(err){
                res.status(500).send(err);
            }
            else{
                res.status(200).send(data);
            }
        });
    });

    // Add new Reel
    app.post("/create-post",(req,res)=>{
        VideoesModel.create(req.body,(err,data)=>{
            if(err){
                res.status(500).send(err);
            }
            else{
                res.status(201).send(data);
            }
        });
    });

}

// api end-points
// app.get("/", (req, res) => {
//     res.status(200).send("Server is online");
// });

//Get all the reels
// app.get("/posts",(req,res)=>{
//     VideoesModel.find((err,data)=>{
//         if(err){
//             res.status(500).send(err);
//         }
//         else{
//             res.status(200).send(data);
//         }
//     });
// });

// Add new Reel
// app.post("/create-post",(req,res)=>{
//     VideoesModel.create(req.body,(err,data)=>{
//         if(err){
//             res.status(500).send(err);
//         }
//         else{
//             res.status(201).send(data);
//         }
//     });
// });


//listener
app.listen(port, () => {
    console.log(`App is running on port ${port}....`);
});