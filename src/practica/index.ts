import { Usuario } from './usuario';
import { ColeccionFunkos } from './coleccionFunkos';
import { ColeccionDatos } from './coleccionDatos';
import { Funko,Genero, Tipo } from './funko';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import chalk from "chalk";
import fs from 'fs';

let coleccion = new ColeccionDatos([]);

function crearBaseDatos(){
  if(!fs.existsSync('./datos')){
    fs.mkdirSync('./datos');
  }
  fs.readdirSync('./datos').forEach(folder => {
    let usuario = new Usuario(folder);
    let ColeccionFunkos1 = new ColeccionFunkos(usuario.getNombre(), []);
    fs.readdirSync('./datos/'+folder).forEach(file => {
      let funko = fs.readFileSync('./datos/'+folder+'/'+file);
      let funkoJson = JSON.parse(funko.toString());
      const tipo = funkoJson.tipo as Tipo;
      const genero = funkoJson.genero as Genero;
      let funkoObjeto = new Funko(parseInt(funkoJson.id),funkoJson.nombre,funkoJson.descripcion,tipo,genero,funkoJson.franquicia,parseInt(funkoJson.numero),funkoJson.exclusivo,funkoJson.caracteristicasEspeciales,parseInt(funkoJson.valorMercado));
      ColeccionFunkos1.addFunko(funkoObjeto);
    });
    coleccion.addDatos(ColeccionFunkos1);
  });
}

function guardarBaseDatos(){
  coleccion.getDatos().forEach(coleccion1 => {
    fs.readdirSync('./datos').forEach(folder => {
      if(folder == coleccion1.getNombreUsuario()){
        coleccion1.getFunkos().forEach(funko => {
          fs.writeFileSync('./datos/'+folder+'/'+funko.getId()+'.json',JSON.stringify(funko));
        });
      }
    });
  });
}

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
  crearBaseDatos();
  let usuario = new Usuario(argv.usuario);
  //comprueba si existe el usuario y si no lo crea
  const genero = argv.genero as Genero;
  const tipo = argv.tipo as Tipo;
  let funko = new Funko(argv.id, argv.nombre, argv.descripcion, tipo, genero, argv.franquicia, argv.numero, argv.exclusivo, argv.caracteristicas, argv.valor);
  let bool = false;
  let encontrado = false;
  coleccion.getDatos().forEach((element) => {
    if (element.getNombreUsuario() === usuario.getNombre()) {
      bool = true;
      element.getFunkos().forEach((element) => {
        if (element.getId() === funko.getId()) {
          console.log(chalk.red("El funko ya existe"));
          encontrado = true;
        }
      });
      if (!encontrado) {
        element.addFunko(funko);
      console.log(chalk.green("Funko añadido"));
      return;
      }
    }
  });
  if (!bool) {
    fs.mkdirSync('./datos/'+argv.usuario);
    let NuevaColeccionFunkos = new ColeccionFunkos(argv.usuario, [funko]);
    coleccion.addDatos(NuevaColeccionFunkos);
    console.log(chalk.green("Funko añadido"));
  }
  guardarBaseDatos();
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
  crearBaseDatos();
  //eliminar un funko de la coleccion del usuario y escribir en datos.json
  let tamano = coleccion.getDatos().length;
  let bool = false;
  coleccion.getDatos().forEach((element) => {
    if (element.getNombreUsuario() === argv.usuario) {
      bool = true;
      element.removeFunko(argv.id);
      if (element.getFunkos().length === tamano) {
        console.log(chalk.red("El funko no existe"));
        return;
      }
      else {
        fs.unlink('./datos/'+argv.usuario+'/'+argv.id+'.json', (err) => {
          if (err) {
            console.error(err);
            return;
          }
        });
        console.log(chalk.green("Funko eliminado"));
        return;
      }
    }
    
  });
  if (!bool) {
    console.log(chalk.red("El usuario no existe"));
  }
  guardarBaseDatos();
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
  crearBaseDatos();
  let usuario = new Usuario(argv.usuario);
  const genero = argv.genero as Genero;
  const tipo = argv.tipo as Tipo;
  let bool = false;
  let existe_usuario = false;
  let funko = new Funko(argv.id, argv.nombre, argv.descripcion, tipo, genero, argv.franquicia, argv.numero, argv.exclusivo, argv.caracteristicas, argv.valor);
  coleccion.getDatos().forEach((element) => {
    if (element.getNombreUsuario() === usuario.getNombre()) {
      existe_usuario = true;
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
  if (!existe_usuario) {
    console.log(chalk.red("El usuario no existe"));
  }
  guardarBaseDatos();
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
  crearBaseDatos();
  let usuario = new Usuario(argv.usuario);
  const genero = argv.genero as Genero;
  const tipo = argv.tipo as Tipo;
  let bool = false;
  let existe_usuario = false;
  let funko = new Funko(argv.id, argv.nombre, argv.descripcion, tipo, genero, argv.franquicia, argv.numero, argv.exclusivo, argv.caracteristicas, argv.valor);
  coleccion.getDatos().forEach((element) => {
    if (element.getNombreUsuario() === usuario.getNombre()) {
      existe_usuario = true;
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
  if (!existe_usuario) {
    console.log(chalk.red("El usuario no existe"));
  }
  guardarBaseDatos();
 })
 .help()
 .argv;
yargs(hideBin(process.argv))
 .command('list', 'Lists a funko', {
}, (argv) => {
  //añadir un funko a la coleccion del usuario y escribir en datos.json
  crearBaseDatos();
  coleccion.getDatos().forEach((element) => {
    element.getFunkos().forEach((element1) => {
      if (element1.getValorMercado() <= 10) {
        console.log(chalk.magenta(element1.getNombre()));
      }
      else if (element1.getValorMercado() > 10 || element1.getValorMercado() <= 20) {
        console.log(chalk.blueBright(element1.getNombre()));
      }
      else {
        console.log(chalk.yellowBright(element1.getNombre()));
      }
    });
  });
  guardarBaseDatos();
})
.help()
.argv;