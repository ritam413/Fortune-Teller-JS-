import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import {dirname} from 'path'
import {fortuneTeller} from './routes/fortuneteller.js'
import cors from 'cors';


const __filename = dirname(fileURLToPath(import.meta.url))
const __dirname=dirname(__filename)

const app = express()

// ✅ Allow CORS from Netlify frontend
app.use(cors({
  origin: 'https://fortune-wxy.netlify.app' // Replace with your real Netlify URL
}));
//Middleware to parse JSON Bodies 

app.use(express.json())


// Serve static files from public/
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/fortuneteller', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.post('/fortuneteller',(req,res)=>{
  const userInput  = req.body.input;

  if(!userInput){
    return res.status(400).json({error:'No Input Provided'})
  }

  const fortune = fortuneTeller(userInput);

  console.log(`Received input: ${userInput}`);
  console.log(`${fortune}`);

  res.json({message:fortune,input:userInput})
})

// Port setup for Render and local dev
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
