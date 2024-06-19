const Cliente = require('../models/Cliente');


// funcion agregar cliernte

exports.agregarClientes = async (req, res) => {
    try {

        let clientes;
        clientes = new Cliente(req.body);
        await clientes.save();
        res.send(clientes);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error al agregar cliente');
    }
}

// funcion que nos va a mostrar todos los cliente

exports.mostrarClientes = async (req, res) => {

    try {
        // find metodo para mostrar clientes
        const clientes = await Cliente.find();
        res.json(clientes);


    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error al mostrar los clientes');

    }
}

//funcion para mostrar cliente

exports.buscarCliente = async (req, res) => {

    try {

        let cliente = await Cliente.findById(req.params.id);

        if (!cliente) {
            res.status(404).json({ msg: 'No se encontro el cliente' });
        } else {
            res.json(cliente);
        }

    } catch (error) {

        console.log(error);
        res.status(500).send('Hubo un error al consultar cliente')

    }

}

exports.actualizarClientes = async (req, res) => {
    try {
        const cliente = await Cliente.findOneAndUpdate(
            { _id: req.params.id }, req.body);

        if (!cliente) res.status(404).send("cliente no encontrado");
        else
            res.json(cliente);
    } catch (error) {

        console.log(error);
        res.status(500).send("Hubo un eror al actualizar el cliente");
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


exports.eliminarClientes = async (req, res) => {
    try {

        //metodo para buscar cliente findById  y pasamos los parametros
        let clientes = await Cliente.findById(req.params.id);
        if (!clientes) {

            res.status(404).json({ msg: " El cliente no encontrado" });
        } else {

            //metodo eliminar findOneAndRemove
            await Cliente.findOneAndDelete({_id: req.params.id});
            res.json({msg:"El cliente ha sido eliminado"});

            }

    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error al actualizar el cliente');
    }
}