const Producto = require('../models/Producto');


// funcion agregar producto

exports.agregarProductos = async (req, res) => {
    try {

        let productos;
        productos = new Producto(req.body);
        await productos.save();
        res.send(productos);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error al agregar producto');
    }
}

// funcion que nos va a mostrar todos los productos

exports.mostrarProductos = async (req, res) => {

    try {
        // find metodo para mostrar productos
        const productos = await Producto.find();
        res.json(productos);


    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error al mostrar los productos');

    }
}

//funcion para mostrar productos

exports.buscarProducto = async (req, res) => {

    try {

        let producto = await Producto.findById(req.params.id);

        if (!producto) {
            res.status(404).json({ msg: 'No se encontro el producto' });
        } else {
            res.json(producto);
        }

    } catch (error) {

        console.log(error);
        res.status(500).send('Hubo un error al consultar el producto')

    }

}

exports.actualizarProductos = async (req, res) => {
    try {
        const producto = await Producto.findOneAndUpdate(
            { _id: req.params.id }, req.body);

        if (!producto) res.status(404).send("producto no encontrado");
        else
            res.json(producto);
    } catch (error) {

        console.log(error);
        res.status(500).send("Hubo un eror al actualizar el producto");
    }
};
/*
exports.modificarClientes = async(req,res) =>{

    try {
        const cliente = await Cliente.findByIdAndUpdate(req.params.id, req.body, {new: true});
        if(!cliente){
            return res.status(404).send('Cliente no encontrado');
        }
        res.json(cliente)

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error al modifica el cliente');
        
    }
}*/

/*exports.actualizarCliente = async (req, res) =>{
    try {
        const {nombres, apellidos, documento, correo, telefono, dirreccion} =req.body
        let cliente = await Cliente.findById(req.params.id);

        if(!cliente){

            res.status(404).json({msg: " El cliente no existe"});
            return
        }

        cliente.nombres = nombres;
        cliente.apellidos = apellidos;
        cliente.documento = documento;
        cliente.correo = correo;
        cliente.telefono = telefono;
        cliente.dirreccion = dirreccion;

        cliente = await Cliente.findOneAndUdate({_id: req.params.id}, cliente,{new:true});
        res.json(cliente);

    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error al actualizar el cliente');
    } 
    }*/


exports.eliminarProductos = async (req, res) => {
    try {

        //metodo para buscar cliente findById  y pasamos los parametros
        let productos = await Producto.findById(req.params.id);
        if (!productos) {

            res.status(404).json({ msg: " Producto no encontrado" });
        } else {

            //metodo eliminar findOneAndRemove
            await Producto.findOneAndDelete({_id: req.params.id});
            res.json({msg:"El producto ha sido eliminado"});

            }

    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error al actualizar el producto');
    }
}