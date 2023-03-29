/**
 * Clase abstracta que representa una lista de números
 * @abstract
 * @class ListaNumeros
 * @method FiltradoLista
 * @method MapLista
 * @method ReducirLista
 * @method afterFiltrado
 * @method afterMap
 * @method afterReducir
 * @method run
 */
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
