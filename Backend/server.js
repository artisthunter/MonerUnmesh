import express from "express";
import cors from "cors";
import { connectDB } from "./Config/DB.js";
import dotenv from "dotenv";
import queryRouter from "./Routes/QueryRoute.js";
import collaborationRouter from "./Routes/CollaborationRoute.js";
import admissionRouter from "./Routes/AdmissionRoute.js";
import recruitmentRouter from "./Routes/RecruitmentRoute.js";
import donationRouter from "./Routes/DonationRoute.js";
import visitorRouter from "./Routes/VisitorRoute.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(
  cors({
    origin: "https://monerunmesh.vercel.app",
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization"],
  }),
);

app.use("/api/query", queryRouter);
app.use("/api/collaboration", collaborationRouter);
app.use("/api/admission", admissionRouter);
app.use("/api/recruitment", recruitmentRouter);
app.use("/api/donation", donationRouter);
app.use("/api/visitor", visitorRouter);

app.get("/", (req, res) => {
  res.send("Server is running");
});

connectDB();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
