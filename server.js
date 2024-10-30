import express from "express";
import cors from 'cors';
import Router from './routes/routes.js'

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());
app.use(Router);

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});