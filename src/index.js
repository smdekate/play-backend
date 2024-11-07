import dotenv from "dotenv"
dotenv.config();

import connectDB from "./db/index.js";
import { app } from "./app.js";

const port = process.env.PORT || 8000

connectDB()
.then(
    app.on("error", (error) => {
        console.log(`Error :: ${error}`);
        throw error
    }),
    app.listen(port, () => {
        console.log(`server is listening on port ${port}`);
        
    })
)
.catch((error) => {
    console.log(`MongoDB connection failed :: ${error}`);
    
})















/*************************************

import express from "express"

const app = express()
const port = process.env.PORT

(async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)

        app.on("error", (error) => {
            console.log(`Error :: ${error}`);
            throw error
        })

        app.listen(port, () => {
            console.log(`app is listening on port ${port}`);
        })
    } catch (error) {
        console.error("Error :: ", error)
        throw error
    }
})()

******************************************/