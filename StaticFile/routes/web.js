import express  from "express";
import {Root} from '../controller/UserSkill.js'
const Router = express.Router();


Router.get('/', Root)

export default Router
