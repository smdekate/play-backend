import dotenv from "dotenv";
import connectDB from "./database/index.js";
import app from "./app.js";
dotenv.config();

const port = process.env.PORT || 3000;

connectDB()
.then(() => {
    app.on("error", (error) => {
        console.log(`Application error :: ${error}`);
        throw error;
    })

    app.listen(port, () => {
        console.log(`Server is running on port ${port}`)
    })
})
.catch((error) => {
    console.log(`Database connection error :: ${error}`);
    throw error;
})







/*********************************************************************************************
import { DB_NAME } from "./constants";

const app = express();
const port = process.env.PORT ||  3000;


(async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);

        app.on("error", (error) => {
            console.log("Failed to connect with database::", error);
            throw error;
        })

        app.listen(port, () => {
            console.log(`Server is running on port ${port}`;
            console.log('MongoDB connection  is ready');
        })
    } catch (error) {
        console.error(`Failed to connect with database :: ${error}`);
        throw error;
    }
})()

*********************************************************************************************/