import { ColeccionFunkos } from "./coleccionFunkos";

/**
 * Clase que representa una colección de datos de los usuarios
 * @class ColeccionDatos
 * @param datos - Colección de datos de los usuarios
 * @method getDatos - Devuelve la colección de datos de los usuarios
 * @method addDatos - Añade una nueva colección de datos de un usuario
 * @method removeDatos - Elimina una colección de datos de un usuario
 */
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