import * as express from "express";
import { getUser } from "../controllers/usercontroller";
const routes = express.Router();
routes.get("/api/v1/user", getUser);

export default routes;
