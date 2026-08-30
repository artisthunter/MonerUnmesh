import express from "express";
import submit from "../Controllers/AdmissionController.js";

const admissionRouter = express.Router();

admissionRouter.post("/submit", submit);

export default admissionRouter;
