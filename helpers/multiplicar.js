const fs = require('fs');
var colors = require('colors');

const crearArchivo = async function(base=5, listar=false, max=10){
    let salida, consola = '';
    try{
        consola = "=======TABLAS DE MULTIPLICAR=======\n".blue;
        salida = "=======TABLAS DE MULTIPLICAR=======\n"
        for(let i=1;i<=max;i++){
            salida += `${i} x ${base} = ${i * base}\n`
            consola += `${i} ${'x'.green} ${base} ${'='.green} ${i * base}\n`
        };
        if (listar){
            console.log(consola);
        }
        fs.writeFileSync(`./salida/tabla del ${base}.txt`, salida);
        return `tabla del ${base}.txt creada con exito.`.green;
    }
    catch{
        return "Hubo un error".red
    }

   
}

module.exports = {crearArchivo}