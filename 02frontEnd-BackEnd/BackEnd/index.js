import express from 'express';

const app = express();

const port = process.env.PORT || 4000;

const jokes = [
  {
    id: 1,
    title: 'First joke',
    content: 'This is the first joke'
  },
  {
    id: 2,
    title: 'Another joke',
    content: 'This is another joke'
  },
  {
    id: 3,
    title: 'A third joke',
    content: 'This is a third joke'
  },
  {
    id: 4,
    title: 'A fourth joke',
    content: 'This is a fourth joke'
  },
  {
    id: 5,
    title: 'A fifth joke',
    content: 'This is a fifth joke'
  },
  {
    id: 6,
    title: 'Sixth joke',
    content: 'This is the Sixth joke'
  }
];


app.get('/',(req,res)=>{
res.send("You Server is here!")
})

app.get('/api/jokes',(req,res)=>{
    res.send(jokes);
})

app.listen(port,()=>{
    console.log("Server is listening on port: ",port);
    
})