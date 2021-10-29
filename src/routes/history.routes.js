const express = require('express')
const router = express.Router();
const History = require('../models/history.models')

router.get('/', async (req, res) => {
  const history = await History.find()
  console.log(history)
  res.json(history)
})

// router.get('/:id', async (req, res) => {
//   const auto = await Autos.findById(req.params.id)

//   res.json(auto)
// })

router.post('/', async (req, res) => {
  const { auto, promotor } = req.body

  const history = new History({ auto, promotor })

  await history.save()
  console.log(history)
  res.json({ status: 'history guardado' })
})


// router.put('/:id', async (req, res) => {
//   const { precio, marca, modelo, age, km, transmision, cambio, extra, unico, fallas } = req.body
//   const newAuto = { precio, marca, modelo, age, km, transmision, cambio, extra, unico, fallas };
//   await Autos.findByIdAndUpdate(req.params.id, newAuto)
//   res.json({
//     status: 'auto actualizado'
//   })
// })

router.delete('/:id', async (req, res) => {
  await History.findByIdAndRemove(req.params.id)
  res.json({ status: 'history eliminado' });
});

module.exports = router;