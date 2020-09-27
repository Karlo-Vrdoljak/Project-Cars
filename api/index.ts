import express from 'express';
import cors from "cors";
// rest of the code remains same
const app = express();
app.use(cors())
const PORT = 8000;

app.get('/', (req, res) => res.send('Express + TypeScript Server'));

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});