const fs = require('fs');

const Files = {


    exits: (file,data) => {

        fs.exists(file, (exists) => {
            if (exists){
                //Se agrega al log el dato
                Files.add(file,data);
            }else{
                //Se crea un nuevo log
                Files.create(file, data);
            }
        });
    },

    add: (file, data) => {

        fs.appendFile(file, (data), (err) => {

            if (err) {
                return console.error(err);
            }

            console.log('Se agrego un nuevo registro');

            Files.read(file); 
        });

    },

    read: (file) => {

        fs.readFile(file, { encoding: 'UTF-8'} , (err, data) => {
            if(err) {
                return console.error(err);
            }

            return console.log(`Lectura del archivo: \n${data}`);
           
        })
    },

    create : (file, data) => {
        
        fs.writeFile(file, data, (err) => {

            if (err) {
               return console.error(err);
            }

            console.log('Se creo el archivo');

            Files.read(file); 
        });
    }


}


module.exports = Files;