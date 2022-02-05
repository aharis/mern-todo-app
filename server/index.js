import express from 'express'; 
import dotenv from 'dotenv'; //Use to create .env file
import cors from 'cors'; //Use to connect with frontend
import mongoose from 'mongoose';

import todosRoutes from "./routes/todos.js"

const app = express();
dotenv.config();

app.use(express.json({extended: true}));
app.use(express.urlencoded({extended: true}));
app.use(cors());

app.use("/todos", todosRoutes)

const PORT = process.env.PORT ;
//Connect to DB
mongoose.connect(process.env.mongoDB,
    {
        useUnifiedTopology: true,
        useNewUrlParser: true,
    })
.then(() =>app.listen(PORT,
    console.log(`Server running on port ${PORT}`)
))

.catch(err => console.log(err))