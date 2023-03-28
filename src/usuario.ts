
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