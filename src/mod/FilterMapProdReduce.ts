import { ListaNumeros } from './listanumeros';

/**
 * Clase que representa una lista de números
 * @method ReducirLista
 */
export class FilterMapProdReduce extends ListaNumeros {
  constructor (lista : number[]) {
    super(lista);
  }
  protected ReducirLista () : number {
    let resultado : number = 0;
    this.lista.forEach((n) => {
      resultado *= n;
    });
    this.lista = [resultado];
    return resultado;
  }
}