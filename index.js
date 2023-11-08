import express from 'express';
const app = express();
import cors from 'cors';
import bodyParser from 'body-parser';
import routes from './routes/userRoutes'

const corsOption = {
    origin: "*",
    method: ["GET","POST"],
    credentials: true,
    optionSuccessStatus: 200
}
 
app.use(cors(corsOption));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); 


const port = process.env.PORT || 3001

routes(app);

app.listen(port, ()=> {
    console.log("running on port 3001")
})