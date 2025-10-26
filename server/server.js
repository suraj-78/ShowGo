import express from 'express'
import cors from 'cors'
import 'dotenv/config';
import connectDb from './configs/db.js';
import { clerkMiddleware } from '@clerk/express'


import { serve } from "inngest/express";
import { inngest, functions } from "./ingest/index.js"

const app = express();
const port = 5000;

await connectDb();

app.use(express.json());
app.use(cors());
app.use(clerkMiddleware());


app.use("/api/inngest", serve({ client: inngest, functions }));
app.get('/', ( req, res) => res.send('Server is live'))



app.listen(port, () => console.log(`Server is listening at http://localost:${port}`))