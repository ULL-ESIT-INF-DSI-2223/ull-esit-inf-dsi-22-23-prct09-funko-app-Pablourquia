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

/**
 * Clase que representa un Funko
 * @class Funko
 * @method getId - Devuelve el id del Funko
 * @method getNombre - Devuelve el nombre del Funko
 * @method getDescripcion - Devuelve la descripción del Funko
 * @method getTipo - Devuelve el tipo del Funko
 * @method getGenero - Devuelve el género del Funko
 * @method getFranquicia - Devuelve la franquicia del Funko
 * @method getNumero - Devuelve el número del Funko
 * @method getExclusivo - Devuelve si el Funko es exclusivo o no
 * @method getCaracteristicasEspeciales - Devuelve las características especiales del Funko
 * @method getValorMercado - Devuelve el valor de mercado del Funko
 * @method setId - Establece el id del Funko
 * @method setNombre - Establece el nombre del Funko
 * @method setDescripcion - Establece la descripción del Funko
 * @method setTipo - Establece el tipo del Funko
 * @method setGenero - Establece el género del Funko
 * @method setFranquicia - Establece la franquicia del Funko
 * @method setNumero - Establece el número del Funko
 * @method setExclusivo - Establece si el Funko es exclusivo o no
 * @method setCaracteristicasEspeciales - Establece las características especiales del Funko
 * @method setValorMercado - Establece el valor de mercado del Funko
 * 
 */
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