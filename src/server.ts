import express from "express";
import dotenv from 'dotenv';
import cors from 'cors';
import fruitRoutes from './routes/fruitRouter';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
app.use('/fruit', fruitRoutes);

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
