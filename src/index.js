import dotenv from "dotenv";
import connectDB from "./database/index.js";
dotenv.config();





connectDB();







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