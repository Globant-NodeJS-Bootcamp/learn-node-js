const argv = require('yargs').argv;

const fecha = new Date();

var Data = `Mensaje: ${argv.msg}, Fecha: ${fecha.toUTCString()} \n`;
    
module.exports = Data;