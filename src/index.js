const express = require('express');
const ConectarBD = require('../config/db');
const cors = require ('cors');

const app = express();
const port = process.env.PORT || 5000;

// enlazar conexion con la base de datos

ConectarBD();
app.use(cors());


app.use(express.json());
app.use('/api/clientes', require('../routers/cliente'));
app.use('/api/productos', require('../routers/producto'));

app.get('/', (req, res) =>{
    res.send("Bienvenidos estamos desde el navegador");
})

app.listen(port, () => console.log('Esta conectado con el servidor con el puerto', port));



