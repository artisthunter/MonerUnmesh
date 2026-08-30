import express from "express";
import submit from "../Controllers/QueryController.js";

const queryRouter = express.Router();

queryRouter.post("/submit", submit);

export default queryRouter;
