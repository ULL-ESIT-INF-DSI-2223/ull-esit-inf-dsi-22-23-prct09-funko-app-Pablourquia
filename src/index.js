"use strict";
exports.__esModule = true;
var coleccionFunkos_js_1 = require("./coleccionFunkos.js");
var yargs_1 = require("yargs");
var helpers_1 = require("yargs/helpers");
var coleccionDatos = new coleccionFunkos_js_1.ColeccionFunkos(1, []);
//Quiero que haciendo uso de yargs se pueda crear un usuario y una coleccion de funkos
(0, yargs_1["default"])((0, helpers_1.hideBin)(process.argv))
    .command('add', 'aniade funko', {
    id: {
        description: 'Id del usuario',
        type: 'number',
        demandOption: true //dice si el campo es obligatorio o no
    }
}, function (argv) {
    console.log(argv.id);
});
