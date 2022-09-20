const { response } = require("express");
const express = require("express");
const app = express()
const PORT = 3000;

app.use(express.json());

app.get('/', (request, response, next)=> {
  response.send({message: 'Calculadora'})
})

app.post('/sum', (request, response, next)=> {
  const {num1, num2} = request.body;
  const rest = num1 + num2;
  response.send({message: rest})
  
})

app.post('/res', (request, response, next)=> {
  const {num1, num2} = request.body;
  const rest = num1 - num2;
  response.send({message: rest})
})

app.post('/mult', (request, response, next)=> {
  const {num1, num2} = request.body;
  const rest = num1 * num2;
  response.send({message: rest})
})

app.post('/div', (request, response, next)=> {
  const {num1, num2} = request.body;
  const rest = num1 / num2;
  response.send({message: rest})
})

app.listen(PORT, ()=> {
  console.log(`servidor en el puerto ${PORT}`)
})