import { ColeccionFunkos } from "./coleccionFunkos";

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