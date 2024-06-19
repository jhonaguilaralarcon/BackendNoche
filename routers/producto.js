const express = require('express');
const router = express.Router();
const productoController = require('../controller/productoController');


//creamos las rutas del crud

router.post('/', productoController.agregarProductos);
router.get('/', productoController.mostrarProductos);
router.get('/:id', productoController.buscarProducto);
router.put('/:id', productoController.actualizarProductos);
//router.patch('/:id', clienteController.modificarClientes);
//router.put('/:id', clienteController.actualizarCliente);
router.delete('/:id', productoController.eliminarProductos);

module.exports = router;