const mongoose = require('mongoose')
const { Schema } = mongoose;

const AutosSchema = new Schema({
  precio: {
    type: Number,
    required: true
  },
  marca: {
    type: String,
    required: true
  },
  modelo: {
    type: String,
    required: true
  },
  age: {
    type: String,
    required: true
  },
  km: {
    type: String,
    required: true
  },
  transmision: {
    type: String,
    required: true
  },
  cambio: {
    type: String,
  },
  extra: {
    type: String,
  },
  unico: {
    type: String,
  },
  fallas: {
    type: String,
  },

  title: {
    type: String
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
  send: {
    type: Boolean,
    default: false
  },
  placa: {
    type: String,
    required: true
  }
},
  {
    timestamps: true
  });

AutosSchema.method.setImgUrl = function setImgUrl(filename) {
  this.imgUrl = `http://localhost:5000/public/${filename}`
}

module.exports = mongoose.model('Autos', AutosSchema)