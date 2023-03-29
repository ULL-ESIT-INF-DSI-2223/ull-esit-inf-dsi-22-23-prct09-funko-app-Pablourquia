/**
 * Clase Usuario
 * @class Usuario
 * @param nombre - Nombre del usuario
 * @method getNombre - Devuelve el nombre del usuario
 * @method setNombre - Establece el nombre del usuario
 */
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