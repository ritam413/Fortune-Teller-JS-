import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import {dirname} from 'path'
import {fortuneTeller} from './routes/fortuneteller.js'


const __filename = dirname(fileURLToPath(import.meta.url))
const __dirname=dirname(__filename)

const app = express()
const port = 3000

//Middleware to parse JSON Bodies 

app.use(express.json())

const fortunes = {
  1: "You will have a great day!",
  2: "Something unexpected will come your way.",
  3: "Be cautious of new opportunities.",
  // add more as needed
};

// Serve static files from public/
app.use('/fortuneteller',express.static('public'));

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/fortuneteller', (req, res) => {
  res.sendFile(path.join(__dirname, 'Fortuneteller/public', 'index.html'));
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

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
