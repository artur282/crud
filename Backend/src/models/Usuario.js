const { Schema,model } = require("mongoose");

const usuarioSchema = new Schema({
    nombre: String,
    apellido: String,
    edad : String,
    correo : String,
    nacimiento: String,
    cedula: String,
    telefono: String,
    sexo: String,
    etnia: String,
    discapacidad:String,
    status: String

},{
    timestamps:true
})


module.exports = model('usuario',usuarioSchema)