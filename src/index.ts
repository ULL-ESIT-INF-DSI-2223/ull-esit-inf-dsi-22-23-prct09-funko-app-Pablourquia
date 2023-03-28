import { Usuario } from './usuario.js';
import { ColeccionFunkos } from './coleccionFunkos.js';
import { ColeccionDatos } from './coleccionDatos.js';
import { Funko,Genero } from './funko.js';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import chalk from "chalk";
import fs from 'fs';

let coleccion = new ColeccionDatos([]);


yargs(hideBin(process.argv))
  .command('add', 'Adds a funko', {
  usuario: {
    description: 'Usuario', //descripcion del campo
    type: 'string', //tipo de dato del campo
    demandOption: true //dice si el campo es obligatorio o no
  },
  id: {
   description: 'Funko ID', //descripcion del campo
   type: 'number', //tipo de dato del campo
   demandOption: true //dice si el campo es obligatorio o no
  },
  nombre: {
    description: 'Funko Nombre', //descripcion del campo
    type: 'string', //tipo de dato del campo
    demandOption: true //dice si el campo es obligatorio o no
  },
  descripcion: {
    description: 'Funko Descripcion', //descripcion del campo
    type: 'string', //tipo de dato del campo
    demandOption: true //dice si el campo es obligatorio o no
  },
  tipo: {
    description: 'Funko Tipo', //descripcion del campo
    type: 'string', //tipo de dato del campo
    demandOption: true //dice si el campo es obligatorio o no
  },
  genero: {
    description: 'Funko Genero', //descripcion del campo
    type: 'string', //tipo de dato del campo
    demandOption: true //dice si el campo es obligatorio o no
  },
  franquicia: {
    description: 'Funko Franquicia', //descripcion del campo
    type: 'string', //tipo de dato del campo
    demandOption: true //dice si el campo es obligatorio o no
  },
  numero: {
    description: 'Funko Numero Franquicia', //descripcion del campo
    type: 'number', //tipo de dato del campo
    demandOption: true //dice si el campo es obligatorio o no
  },
  exclusivo: {
    description: 'Funko Exclusivo', //descripcion del campo
    type: 'boolean', //tipo de dato del campo
    demandOption: true //dice si el campo es obligatorio o no
  },
  caracteristicas: {
    description: 'Funko Caracteristicas', //descripcion del campo
    type: 'string', //tipo de dato del campo
    demandOption: true //dice si el campo es obligatorio o no
  },
  valor: {
    description: 'Funko Precio', //descripcion del campo
    type: 'number', //tipo de dato del campo
    demandOption: true //dice si el campo es obligatorio o no
  },
 }, (argv) => {
  //añadir un funko a la coleccion del usuario y escribir en datos.json
  let usuario = new Usuario(argv.usuario);
  const genero = argv.genero as Genero;
  let funko = new Funko(argv.id, argv.nombre, argv.descripcion, argv.tipo, genero, argv.franquicia, argv.numero, argv.exclusivo, argv.caracteristicas, argv.valor);
  let bool = false;
  coleccion.getDatos().forEach((element) => {
    if (element.getNombreUsuario() === usuario.getNombre()) {
      bool = true;
      element.getFunkos().forEach((element) => {
        if (element.getId() === funko.getId()) {
          console.log(chalk.red("El funko ya existe"));
          return;
        }
      });
      element.addFunko(funko);
      console.log(chalk.green("Funko añadido"));
      return;
    }
  });
  if (!bool) {
    let coleccionFunkos = new ColeccionFunkos(usuario.getNombre(), [funko]);
    coleccion.addDatos(coleccionFunkos);
    console.log(chalk.green("Funko añadido"));
  }
  fs.writeFileSync('datos.json', JSON.stringify(coleccion.getDatos()));
 })
 .help()
 .argv;

 yargs(hideBin(process.argv))
 .command('delete', 'Deletes a funko', {
 usuario: {
   description: 'Usuario', //descripcion del campo
   type: 'string', //tipo de dato del campo
   demandOption: true //dice si el campo es obligatorio o no
 },
 id: {
  description: 'Funko ID', //descripcion del campo
  type: 'number', //tipo de dato del campo
  demandOption: true //dice si el campo es obligatorio o no
 },
}, (argv) => {
  //eliminar un funko de la coleccion del usuario y escribir en datos.json
  let tamano = coleccion.getDatos().length;
  coleccion.getDatos().forEach((element) => {
    if (element.getNombreUsuario() === argv.usuario) {
      element.removeFunko(argv.id);
      if (element.getFunkos().length === tamano) {
        console.log(chalk.red("El funko no existe"));
        return;
      }
      else {
        console.log(chalk.green("Funko eliminado"));
        return;
      }
    }
  });
  fs.writeFileSync('datos.json', JSON.stringify(coleccion.getDatos()));
})
.help()
.argv;

yargs(hideBin(process.argv))
  .command('modify', 'Modifys a funko', {
  usuario: {
    description: 'Usuario', //descripcion del campo
    type: 'string', //tipo de dato del campo
    demandOption: true //dice si el campo es obligatorio o no
  },
  id: {
   description: 'Funko ID', //descripcion del campo
   type: 'number', //tipo de dato del campo
   demandOption: true //dice si el campo es obligatorio o no
  },
  nombre: {
    description: 'Funko Nombre', //descripcion del campo
    type: 'string', //tipo de dato del campo
    demandOption: true //dice si el campo es obligatorio o no
  },
  descripcion: {
    description: 'Funko Descripcion', //descripcion del campo
    type: 'string', //tipo de dato del campo
    demandOption: true //dice si el campo es obligatorio o no
  },
  tipo: {
    description: 'Funko Tipo', //descripcion del campo
    type: 'string', //tipo de dato del campo
    demandOption: true //dice si el campo es obligatorio o no
  },
  genero: {
    description: 'Funko Genero', //descripcion del campo
    type: 'string', //tipo de dato del campo
    demandOption: true //dice si el campo es obligatorio o no
  },
  franquicia: {
    description: 'Funko Franquicia', //descripcion del campo
    type: 'string', //tipo de dato del campo
    demandOption: true //dice si el campo es obligatorio o no
  },
  numero: {
    description: 'Funko Numero Franquicia', //descripcion del campo
    type: 'number', //tipo de dato del campo
    demandOption: true //dice si el campo es obligatorio o no
  },
  exclusivo: {
    description: 'Funko Exclusivo', //descripcion del campo
    type: 'boolean', //tipo de dato del campo
    demandOption: true //dice si el campo es obligatorio o no
  },
  caracteristicas: {
    description: 'Funko Caracteristicas', //descripcion del campo
    type: 'string', //tipo de dato del campo
    demandOption: true //dice si el campo es obligatorio o no
  },
  valor: {
    description: 'Funko Precio', //descripcion del campo
    type: 'number', //tipo de dato del campo
    demandOption: true //dice si el campo es obligatorio o no
  },
 }, (argv) => {
  //añadir un funko a la coleccion del usuario y escribir en datos.json
  let usuario = new Usuario(argv.usuario);
  const genero = argv.genero as Genero;
  let bool = false;
  let funko = new Funko(argv.id, argv.nombre, argv.descripcion, argv.tipo, genero, argv.franquicia, argv.numero, argv.exclusivo, argv.caracteristicas, argv.valor);
  coleccion.getDatos().forEach((element) => {
    if (element.getNombreUsuario() === usuario.getNombre()) {
      element.updateFunko(funko);
      element.getFunkos().forEach((element) => {
        if (element.getId() === funko.getId()) {
          bool = true;
          return;
        }
      });
      if (bool) {
        console.log(chalk.green("Funko modificado"));
        return;
      }
      else {
        console.log(chalk.red("El funko no existe"));
        return;
      }
    }
  });
  fs.writeFileSync('datos.json', JSON.stringify(coleccion.getDatos()));
 })
 .help()
 .argv;



