import express  from "express";
import {index, AddUser} from "../controller/HomeController.js";
const router = express.Router();

router.get('/', index)
router.post('add-user', AddUser)

export default router;