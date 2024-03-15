import express from "express";
import cors from "cors";
import "dotevn/config";

const app = express();
app.use(express.json())
app.use(cors())