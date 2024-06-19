
const mongoose = require ('mongoose');

const ProductoSchema = mongoose.Schema({

    nombres:{
        type: String,
        required: true
    },

    ingredientes: {
        type: String,
        required: true
    },

    cantidad:{
        type: Number,
        required: true
    },
    peso: {
        type: String,
        required: true
    },

    contenido:{
        type: Number,
        required: true
    },

    valor:{
        type: Number,
        required: true
    },

    fechaVencimiento:{
        type: String,
        required: true
    }
}, {versionkey:false});

module.exports = mongoose.model('Producto', ProductoSchema);

