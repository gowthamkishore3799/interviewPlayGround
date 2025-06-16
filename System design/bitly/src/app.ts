import express, { Request, Response } from 'express';
const app = express();
require('dotenv').config();

import bodyParser from 'body-parser';
app.use(bodyParser.json({
    limit: "5mb",

}))

app.use(express.json()); // For parsing JSON request bodies

app.post('/createUrl', (req: Request, res: Response) => {
  const { url } = req.body;
  if (!url) {
    return res.status(400).json({ error: "URL is required" });
  }
  // Handle success
  res.status(201).json({ url });
});


app.listen(process.env.PORT,()=>{
    console.log("Listening to port 3000")
})