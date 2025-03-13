import express from 'express';




const routers = express.Router();



routers.get("/", (req, res) => {
    res.send("Hello World");
});

//  use student routes
// routers.use('/students', studentRoutes);
// routers.use('/teachers', teacherRoutes);






// 404 route should be at the end of all routes to catch all undefined routes
routers.use((req, res) => {
    res.status(404).send("Page not found");
});

export default routers;