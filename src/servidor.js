const express = require("express");
const app = express()
const PORT = 3001;

const calcRouter = require('./routes/cal.routes')

app.use(express.json());
app.use(calcRouter);

app.listen(PORT, ()=> {
  console.log(`servidor en el puerto ${PORT}`)
})