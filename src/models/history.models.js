const mongoose = require('mongoose');
const { Schema } = mongoose;

const HistorySchema = new Schema({
  auto: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'Autos',
    autopopulate: true
  },
  promotor: {
    type: Schema.Types.ObjectId,
    ref: 'promotores',
    autopopulate: true
  }
},
  {
    timestamps: true
  })
HistorySchema.plugin(require('mongoose-autopopulate'));

module.exports = mongoose.model('History', HistorySchema)