const express = require('express')
const router = express.Router();
const Autos = require('../models/autos.models')

router.get('/', async (req, res) => {
  const autos = await Autos.find()
  console.log(autos)
  res.json(autos)
})

router.get('/:id', async (req, res) => {
  const auto = await Autos.findById(req.params.id)

  res.json(auto)
})

router.post('/', async (req, res) => {
  const { filename, path, originalname, mimetype, size, precio, marca, modelo, age, km, transmision, cambio, extra, unico, fallas, placa } = req.body

  const newAuto = new Autos({
    precio, marca, modelo, age, km, transmision, cambio, extra, unico, fallas, filename, path, originalname, mimetype, size, placa
  })
  newAuto.filename = req.file.filename;
  newAuto.path = '/uploads/' + req.file.filename;
  newAuto.originalname = req.file.originalname;
  newAuto.mimetype = req.file.mimetype;
  newAuto.size = req.file.size
  // if (req.file) {
  //   const { filename } = req.file
  //   newAuto.setImgUrl(filename)
  // }
  await newAuto.save()
  console.log(newAuto)
  // console.log(req.body)
  // console.log(req.file)
  res.json({ status: 'auto guardado' })
})


router.put('/:id', async (req, res) => {
  const { precio, marca, modelo, age, km, transmision, cambio, extra, unico, fallas, send } = req.body
  const newAuto = { precio, marca, modelo, age, km, transmision, cambio, extra, unico, fallas, send };
  await Autos.findByIdAndUpdate(req.params.id, newAuto)
  console.log(newAuto)
  res.json({
    status: 'auto actualizado'
  })
})

router.delete('/:id', async (req, res) => {
  await Autos.findByIdAndRemove(req.params.id)
  res.json({ status: 'auto eliminado' });
});

module.exports = router;