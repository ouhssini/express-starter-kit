import express from 'express';
import { index, show, destroy, store, update } from '../controllers/UserController.js';



const router = express.Router();
// start routing system
router.get('/', (req, res) => {
    index(req, res);
});
router.post('/', (req, res) => {
    store(req, res);
});

router.get('/:id', (req, res) => {
    show(req, res);
});


router.put('/:id', (req, res) => {
    update(req, res);
});


router.delete('/:id', (req, res) => {
    destroy(req, res);
});




export default router;