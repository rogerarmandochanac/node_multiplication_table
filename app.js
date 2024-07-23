const {crearArchivo} = require('./helpers/multiplicar');
const argv = require('./config/yargs');


const base = argv.b
const listar = argv.l
const max = argv.h

console.clear()

crearArchivo(base, listar, max).then((tabla)=>{
    console.log(tabla);
}).catch((error)=>{
    console.error(error)
});
