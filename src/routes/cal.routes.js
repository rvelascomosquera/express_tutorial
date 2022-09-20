const {Router} = require ('express')

const router = Router();



router.get('/', (request, response, next)=> {
  response.send({message: 'Calculadora'})
})

router.post('/sum', (request, response, next)=> {
  const {num1, num2} = request.body;
  const rest = num1 + num2;
  response.send({message: rest})
  
})

router.post('/res', (request, response, next)=> {
  const {num1, num2} = request.body;
  const rest = num1 - num2;
  response.send({message: rest})
})

router.post('/mult', (request, response, next)=> {
  const {num1, num2} = request.body;
  const rest = num1 * num2;
  response.send({message: rest})
})

router.post('/div', (request, response, next)=> {
  const {num1, num2} = request.body;
  const rest = num1 / num2;
  response.send({message: rest})
})

module.exports = router;