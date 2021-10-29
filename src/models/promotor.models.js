const mongoose = require('mongoose');
const { Schema } = mongoose;

const PromotoresSchema = new Schema({
  correo: {
    type: String,
    required: true
  },
  cedula: {
    type: String,
    required: true
  },
  nombre: {
    type: String,
    required: true
  },
  apellido: {
    type: String,
    required: true
  },
  nacimiento: {
    type: String,
    required: true
  },
  edad: {
    type: Number,
    required: true
  },
  instagram: {
    type: String
  },
  facebook: {
    type: String
  },
  pais: {
    type: String,
    required: true
  },
  ciudad: {
    type: String,
    required: true
  },
  direccion: {
    type: String,
    required: true
  },
  tlf: {
    type: String,
    required: true
  },
  filename: {
    type: String
  },
  path: {
    type: String
  },
  originalname: {
    type: String
  },
  mimetype: {
    type: String
  },
  size: {
    type: Number
  },
  approved: {
    type: Boolean,
    default: false
  }
},
  {
    timestamps: true
  })

module.exports = mongoose.model('promotores', PromotoresSchema)