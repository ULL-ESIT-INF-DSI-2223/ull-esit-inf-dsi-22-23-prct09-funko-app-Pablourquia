import { Funko } from "./funko";

/**
 * Clase que representa una colección de Funkos
 * @class ColeccionFunkos
 * @param nombre_usuario - Nombre del usuario
 * @param funkos - Colección de Funkos
 * @method getFunkos - Devuelve la colección de Funkos
 * @method setFunkos - Establece la colección de Funkos 
 * @method addFunko - Añade un nuevo Funko a la colección
 * @method removeFunko - Elimina un Funko de la colección
 * @method updateFunko - Actualiza un Funko de la colección
 * @method getFunko - Devuelve un Funko de la colección
 * @method getNombreUsuario - Devuelve el nombre del usuario
 */
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