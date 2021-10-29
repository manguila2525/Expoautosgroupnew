const express = require('express');
const router = express.Router()
const Promotores = require('../models/promotor.models')

router.get('/', async (req, res) => {
  const promotores = await Promotores.find()
  console.log(promotores)
  res.json(promotores)
})

router.get('/:id', async (req, res) => {
  const promotores = await Promotores.findById(req.params.id)
  console.log(promotores)
  res.json(promotores)
})

router.post('/', async (req, res) => {
  const promotor = new Promotores(req.body)
  promotor.filename = req.file.filename;
  promotor.path = '/uploads/' + req.file.filename;
  promotor.originalname = req.file.originalname;
  promotor.mimetype = req.file.mimetype;
  promotor.size = req.file.size
  const savePromotor = await promotor.save()
  console.log(savePromotor)
  res.json({ status: 'Send promotor' })
})

router.put('/:id', async (req, res) => {
  const { approved } = req.body
  const promotorA = approved;
  const promotor = await Promotores.findByIdAndUpdate(req.params.id, { approved: promotorA })
  res.json({
    status: 'promotor actualizado'
  })
})


router.delete('/:id', async (req, res) => {
  await Promotores.findByIdAndRemove(req.params.id)
  res.json({ status: 'Promotor delete' })
})




module.exports = router;