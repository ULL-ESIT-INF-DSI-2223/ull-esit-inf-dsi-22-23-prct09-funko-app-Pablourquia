# Práctica 9 : Aplicación de registro de Funko Pops


[![Tests](https://github.com/ULL-ESIT-INF-DSI-2223/ull-esit-inf-dsi-22-23-prct09-funko-app-Pablourquia/actions/workflows/node.js.yml/badge.svg)](https://github.com/ULL-ESIT-INF-DSI-2223/ull-esit-inf-dsi-22-23-prct09-funko-app-Pablourquia/actions/workflows/node.js.yml)

[![Coveralls](https://github.com/ULL-ESIT-INF-DSI-2223/ull-esit-inf-dsi-22-23-prct09-funko-app-Pablourquia/actions/workflows/coveralls.yml/badge.svg)](https://github.com/ULL-ESIT-INF-DSI-2223/ull-esit-inf-dsi-22-23-prct09-funko-app-Pablourquia/actions/workflows/coveralls.yml)


## Introducción

En esta práctica se nos pide haciendo uso de la API síncrona de Node.js, crear una aplicación de registro de Funko Pops. Además usaremos los paquetes *yargs* y *chalk*.
Esta aplicación nos permitirá añadir, listar, borrar y buscar Funko Pops.
Los objetivos de esta práctica son irnos familiarizando con la API síncrona de Node.js y con los paquetes *yargs* y *chalk*.

## Desarrollo

Para el desarrollo de esta práctica he creado 4 clases y un fichero index que contiene la lógica de la aplicación.

### Clases

#### Clase usuario

Esta clase nos va a permitir guardar un usuario y acceder a sus datos.

```ts

export class Usuario {
  constructor(private nombre: string) {
    this.nombre = nombre;
  }
  getNombre(): string {
    return this.nombre;
  }
  setNombre(nombre: string) {
    this.nombre = nombre;
  }
}
  
```

Esta clase es una clase muy sencilla que nos permite crear un usuario y acceder a sus datos.

#### Clase Funko 

Esta clase nos va a permitir guardar un Funko Pop y acceder a sus datos.

```ts
export enum Genero {
  Animacion = 'Animacion', 
  Accion = 'Accion', 
  Aventura = 'Aventura',
};

export enum Tipo {
  Pop = 'Pop',
  Pop_Rides = 'Pop Rides',
  Pop_Vinyl = 'Pop Vinyl',
};

export class Funko {
  constructor (private id : number, private nombre : string, private descripcion : string, private tipo : Tipo, private genero : Genero, private franquicia : string, private numero : number, private exclusivo : boolean, private caracteristicasEspeciales : string, private valorMercado : number) {
    this.id = id
    this.nombre = nombre
    this.descripcion = descripcion
    this.tipo = tipo
    this.genero = genero
    this.franquicia = franquicia
    this.numero = numero
    this.exclusivo = exclusivo
    this.caracteristicasEspeciales = caracteristicasEspeciales
    this.valorMercado = valorMercado
  }
  getId () : number {
    return this.id
  }
  getNombre () : string {
    return this.nombre
  }
  getDescripcion () : string {
    return this.descripcion
  }
  getTipo () : Tipo {
    return this.tipo
  }
  getGenero () : Genero {
    return this.genero
  }
  getFranquicia () : string {
    return this.franquicia
  }
  getNumero () : number {
    return this.numero
  }
  getExclusivo () : boolean {
    return this.exclusivo
  }
  getCaracteristicasEspeciales () : string {
    return this.caracteristicasEspeciales
  }
  getValorMercado () : number {
    return this.valorMercado
  }
  setId (id : number) {
    this.id = id
  }
  setNombre (nombre : string) {
    this.nombre = nombre
  }
  setDescripcion (descripcion : string) {
    this.descripcion = descripcion
  }
  setTipo (tipo : Tipo) {
    this.tipo = tipo
  }
  setGenero (genero : Genero) {
    this.genero = genero
  }
  setFranquicia (franquicia : string) {
    this.franquicia = franquicia
  }
  setNumero (numero : number) {
    this.numero = numero
  }
  setExclusivo (exclusivo : boolean) {
    this.exclusivo = exclusivo
  }
  setCaracteristicasEspeciales (caracteristicasEspeciales : string) {
    this.caracteristicasEspeciales = caracteristicasEspeciales
  }
  setValorMercado (valorMercado : number) {
    this.valorMercado = valorMercado
  }
}
```

Esta clase es una clase muy sencilla que nos permite crear un Funko Pop y acceder a sus datos, usando los getters y los setters.

#### Clase Colección de funkos.

En esta clase se va a almacenar una colección de funkos en un array y se van a implementar los métodos necesarios para poder añadir, borrar y buscar funkos.

```ts
export class ColeccionFunkos {
  constructor(private nombre_usuario: string, private funkos: Funko[]) {
    this.funkos = funkos;
    this.nombre_usuario = nombre_usuario;
  }
  getFunkos(): Funko[] {
    return this.funkos;
  }
  setFunkos(funkos: Funko[]) {
    this.funkos = funkos;
  }
  addFunko(funko: Funko) {
    this.funkos.forEach((f) => {
      if (f.getId() === funko.getId()) {
        return;
      }
    });
    this.funkos.push(funko);
  }
  removeFunko(id: number) {
    this.funkos = this.funkos.filter((f) => f.getId() !== id);
  }
  updateFunko(funko: Funko){
    this.funkos = this.funkos.map((f) => (f.getId() === funko.getId() ? funko : f));
  }
  getFunko(id: number): Funko | undefined {
    return this.funkos.find((f) => f.getId() === id);
  }
  getNombreUsuario(): string {
    return this.nombre_usuario;
  }
}
```

Esta clase es una clase muy sencilla que nos permite crear una colección de funkos con su usuario y acceder a sus datos, usando los getters y los setters.
Además se puede añadir, borrar y buscar funkos.

#### Clase Colección de datos.

En esta clase se va a almacenar una colección de datos en un array y se van a implementar los métodos necesarios para poder añadir, borrar y buscar datos.

```ts

export class ColeccionDatos {
  constructor(private datos: ColeccionFunkos[]) {
    this.datos = datos;
  }
  getDatos(): ColeccionFunkos[] {
    return this.datos;
  }
  addDatos(coleccion: ColeccionFunkos) {
    this.datos.push(coleccion);
  }
  removeDatos(nombre : string) {
    this.datos = this.datos.filter((c) => c.getNombreUsuario() !== nombre);
  }
}
```

En esta clase se almacenan las colecciones de las colecciones de funkos con sus usuarios.

### Index

En el index se va a crear una colección de datos, se van a crear las funciones para crear la base de datos y escribir en ella, además se van a crear las implementaciones de los diferentes comandos para interactuar con el programa.

```ts
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
```

Aquí se crea la colección de datos y se crean las funciones para crear la base de datos y escribir en ella.
En la función para leer la base de datos se recorre la carpeta datos y se crea una colección de funkos por cada usuario, y se añaden los funkos a la colección de funkos.
En la función para escribir en la base de datos se recorre la colección de datos y se recorre la carpeta datos, si el nombre del usuario coincide con el nombre de la carpeta se recorre la colección de funkos y se escribe en el archivo correspondiente.

```ts
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
```

Aquí se crea el comando add, que añade un funko a la colección del usuario y lo escribe en el archivo correspondiente.
Para ello se crea un nuevo funko con los datos introducidos por el usuario y se comprueba si el usuario existe, si no existe se crea la carpeta del usuario y se crea una nueva colección de funkos para ese usuario.

```ts
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
```

Aquí se crea el comando delete, que elimina un funko de la colección del usuario y lo elimina del archivo correspondiente.
Para ello se comprueba si el usuario existe, si existe se comprueba si el funko existe, si existe se elimina el funko de la colección y se elimina el archivo correspondiente.

```ts
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
```

Aquí se crea el comando modify, que modifica un funko de la colección del usuario y lo modifica en el archivo correspondiente.
Para ello se comprueba si el usuario existe, si existe se comprueba si el funko existe, si existe se modifica el funko de la colección y se modifica el archivo correspondiente.

```ts
yargs(hideBin(process.argv))
 .command('show', 'Shows a funko', {
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
 //añadir un funko a la coleccion del usuario y escribir en datos.json
 crearBaseDatos();
 let usuario = new Usuario(argv.usuario);
 let bool = false;
 let existe_usuario = false;
 coleccion.getDatos().forEach((element) => {
    if (element.getNombreUsuario() === usuario.getNombre()) {
      existe_usuario = true;
      element.getFunkos().forEach((element1) => {
        if (element1.getId() === argv.id) {
          bool = true;
          console.log('Nombre del funko' + element1.getNombre());
          console.log('Descripcion del funko' + element1.getDescripcion());
          console.log('Tipo del funko' + element1.getTipo());
          console.log('Genero del funko' + element1.getGenero());
          console.log('Franquicia del funko' + element1.getFranquicia());
          console.log('Numero de la franquicia del funko' + element1.getNumero());
          console.log('Exclusivo del funko' + element1.getExclusivo());
          console.log('Caracteristicas del funko' + element1.getCaracteristicasEspeciales());
          if (element1.getValorMercado() <= 10) {
            console.log(chalk.magenta('Valor del funko' + element1.getValorMercado()));
          }
          else if (element1.getValorMercado() > 10 || element1.getValorMercado() <= 20) {
            console.log(chalk.blueBright('Valor del funko' + element1.getValorMercado()));
          }
          else {
            console.log(chalk.yellowBright('Valor del funko' + element1.getValorMercado()));
          }
        }
      });
    }
  });
  if (!existe_usuario) {
    console.log(chalk.red("El usuario no existe"));
  }
  if (!bool) {
    console.log(chalk.red("El funko no existe"));
  }
  guardarBaseDatos();
})
.help()
.argv;
```

Aquí se crea el comando show, que muestra un funko de la colección del usuario.
Para ello se comprueba si el usuario existe, si existe se comprueba si el funko existe, si existe se muestra el funko de la colección.
Además se tiene en cuenta el precio del funko para mostrarlo en diferentes colores.

```ts
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
```

Aquí se crea el comando list, que lista todos los funkos de la colección de todos los usuarios.
Además se tiene en cuenta el precio del funko para mostrarlo en diferentes colores.

### Modificación

En la modificación se nos pide usando la metodología Template Method crear una clase abstracta que contenga una lista de elementos, que contenga los métodos Filtrado, Map y Reduce, aunque reduce se definirá como funciona en las clases hijas.

```ts
export abstract class ListaNumeros {
  protected lista : number[];
  constructor(lista : number[]) {
    this.lista = lista;
  }
  protected FiltradoLista (predicado : (valor : number) => boolean = (valor : number ) => valor > 5) : void {
    let resultado : number[] = [];
    this.lista.forEach (valor => {
      if (predicado(valor)) {
        resultado.push(valor);
      }
    }
    );
    this.lista = resultado;
  }
  protected MapLista (funcion : (valor : number) => number = (valor : number) => valor * 2) : void {
    let resultado : number[] = [];
    this.lista.forEach (valor => {
      resultado.push(funcion(valor));
    }
    );
    this.lista = resultado;
  }
  protected abstract ReducirLista () : number;
  protected afterFiltrado(): void {
    console.log("Despues filtrado:" + this.lista);
  }
  protected afterMap(): void {
    console.log("Despues map:" + this.lista);
  };
  protected afterReducir(): void {
    console.log("Despues reducir:" + this.lista);
  };
  protected beforeFiltrado(): void {
    console.log("Antes filtrado:" + this.lista);
  }
  protected beforeMap(): void {
    console.log("Antes map:" + this.lista);
  };
  protected beforeReducir(): void {
    console.log("Antes reducir:" + this.lista);
  };

  public run () {
    this.beforeFiltrado();
    this.FiltradoLista();
    this.afterFiltrado();
    this.beforeMap();
    this.MapLista();
    this.afterMap();
    this.beforeReducir();
    let resultado = this.ReducirLista();
    this.afterReducir();
    return resultado;
  }
}
```

Esta clase tiene los métodos hooks para ver el estado de la lista antes y después de filtrar, reducir y hacer el map. Tiene las implementaciones de los método filtrado y map y el método reducir es abstracto. Luego en el método run se llama a los hooks y se llama a los métodos de la clase.

En las clases hijas se define el método reducir de manera difente en cada una de ellas.

```ts
export class FilterMapAddReduce extends ListaNumeros {
  constructor (lista : number[]) {
    super(lista);
  }
  protected ReducirLista () : number {
    let resultado : number = 0;
    this.lista.forEach((n) => {
      resultado += n;
    });
    this.lista = [resultado];
    return resultado;
  }
}
```

En esta implementación se crea la clase hija de la anterior, encargada de sumar. Por lo tanto en el método reducir se van sumando los elementos. Hay tres clases hijas más, las cuáles son para la resta, la multiplicación y la división.  Son iguales pero en cada una de ellas se modifica la operación de reduce.

## Conclusiones

En esta práctica he aprendido a utilizar los paquetes *yarg* y *chalk* para crear una aplicación de línea de comandos que permite gestionar una colección de Funkos.
Estos paquetes son muy útiles para crear aplicaciones de línea de comandos, ya que permiten crear comandos que permiten realizar acciones con los datos de la aplicación.
Además me he empezado a familiarizar con el uso de la API de Node.js.

## Bibliografía

* [Yargs](https://www.npmjs.com/package/yargs)
* [Chalk](https://www.npmjs.com/package/chalk)
* [Node.js](https://nodejs.org/es/)