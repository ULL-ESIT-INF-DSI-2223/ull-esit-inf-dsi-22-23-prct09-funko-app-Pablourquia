export enum Genero {
  Animacion = 'Animacion', 
  Accion = 'Accion', 
  Aventura = 'Aventura',
};

export class Funko {
  constructor (private id : number, private nombre : string, private descripcion : string, private tipo : string, private genero : Genero, private franquicia : string, private numero : number, private exclusivo : boolean, private caracteristicasEspeciales : string, private valorMercado : number) {
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
  getTipo () : string {
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
  setTipo (tipo : string) {
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