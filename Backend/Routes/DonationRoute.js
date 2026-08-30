import express from "express";
import submit from "../Controllers/DonationController.js";

const donationRouter = express.Router();

donationRouter.post("/submit", submit);

export default donationRouter;
