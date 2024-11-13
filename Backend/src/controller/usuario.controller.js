const Usuario = require("../models/Usuario.js")

const usuarioCtrl={}

usuarioCtrl.getUsu = async(req,res)=>{
    const usuarios = await Usuario.find()
    res.json(usuarios)
}

usuarioCtrl.createUsu = async(req,res)=>{
    const {nombre,apellido,correo,telefono,edad,nacimiento,cedula,sexo,etnia,discapacidad,status} = req.body;
    const newUsu = new Usuario({
    nombre: String,
    apellido: String,
    correo : String,
    telefono: String,
    edad : String,
    nacimiento: String,
    cedula: String,
    sexo: String,
    etnia: String,
    discapacidad:String,
    status:String
    })
    await newUsu.save();
    res.json({message:"el usuario a sido creado"})
}

usuarioCtrl.getUsuario = async(req,res)=>{
    const usuario = await Usuario.findById(req.params.id)
    res.json(usuario)
}

usuarioCtrl.deleteUsu = async(req,res)=>{
    await Usuario.findByIdAndDelete(req.params.id)
    res.json({message:"usuario a sido eliminado"})
}

usuarioCtrl.updateUsu = async(req,res)=>{
    const {nombre,apellido,correo,telefono,edad,nacimiento,etnia,discapacidad,cedula,sexo,status} = req.body;
    await Usuario.findByIdAndUpdate(req.params.id,{
        nombre,
        apellido,
        correo,
        telefono,
        edad,
        nacimiento,
        etnia,
        discapacidad,
        cedula,
        sexo,
        status

    })
    res.json({message:"el usuario a sido actualizado"})
}

module.exports = usuarioCtrl