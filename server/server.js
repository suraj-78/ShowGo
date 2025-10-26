import express from 'express'
import cors from 'cors'
import 'dotenv/config';

const app = express();
const port = 5000;

app.use(express.json());
app.use(cors());

app.get('/', ( req, res) => res.send('Server is live'))



app.listen(port, () => console.log(`Server is listening at http://localost:${port}`);
)