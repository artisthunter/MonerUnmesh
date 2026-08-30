import express from "express";
import submit from "../Controllers/RecruitmentController.js";

const recruitmentRouter = express.Router();

recruitmentRouter.post("/submit", submit);

export default recruitmentRouter;
