//Dependencias
const fs = require('fs');

const Files = require('./file');
const Data = require('./data');

//Archivo de configuracion
const fileName = require('./config.json').nombre;

//Verificar si existe el logger y registrar datos
Files.exits(fileName, Data);