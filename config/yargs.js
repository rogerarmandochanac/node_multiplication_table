const { number } = require('yargs');

const argv = require('yargs')
                    .option('b', {
                        alias:'base',
                        type:'number',
                        default:5,
                        describe:"Es la base para la tabla de multiplicar"
                    })
                    .check((a, options)=>{
                        if (isNaN(a.b)){
                            throw "La base tiene que ser un numero"
                        }
                        return true
                    })
                    .option('l', {
                        alias:'lista',
                        type:'boolean',
                        default:false,
                        describe:"Muestra la tabla en consola"
                    })
                    .option('h', {
                        alias:'hasta',
                        type:'number',
                        default:10,
                        describe:"Determina hasta donde sera el limite de la tabla de multiplicar"
                    })
                    .argv

module.exports = argv;