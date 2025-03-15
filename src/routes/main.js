import express from 'express';
import modelsRouter from './model.js';



const routers = express.Router();


//  default route (HomePage route)
routers.get("/", (req, res) => {
    res.send("Hello World");
});

//  use model routes
routers.use('/models', modelsRouter);





// Fall back route
routers.use((req, res) => {
    res.status(404).send("Page not found");
});

export default routers;