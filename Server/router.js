import { Router } from "express";
import * as rh from "./requestHandler.js";

const router = Router();

router.route('/').get(rh.get);
router.route('/').post(rh.add);
router.route('/:id').put(rh.update); 
router.route('/:id').delete(rh.remove); 

export default router;
