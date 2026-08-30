import express from "express";
import submit from "../Controllers/CollaborationController.js";

const collaborationRouter = express.Router();

collaborationRouter.post("/submit", submit);

export default collaborationRouter;
