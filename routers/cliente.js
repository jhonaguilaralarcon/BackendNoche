const express = require('express');
const router = express.Router();
const clienteController = require('../controller/clienteController');


//creamos las rutas del crud

router.post('/', clienteController.agregarClientes);
router.get('/', clienteController.mostrarClientes);
router.get('/:id', clienteController.buscarCliente);
router.put('/:id', clienteController.actualizarClientes);
//router.patch('/:id', clienteController.modificarClientes);
//router.put('/:id', clienteController.actualizarCliente);
router.delete('/:id', clienteController.eliminarClientes);

module.exports = router;