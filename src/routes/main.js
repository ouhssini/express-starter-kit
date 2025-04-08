import express from 'express';
import userRoutes from './user.js';



const routers = express.Router();


//  default route (HomePage route)
routers.get("/", (req, res) => {
    res.send("Hello World");
});

//  use model routes
routers.use('/users', userRoutes);





// Fall back route
routers.use((req, res) => {
    res.status(404).send("Page not found");
});

export default routers;