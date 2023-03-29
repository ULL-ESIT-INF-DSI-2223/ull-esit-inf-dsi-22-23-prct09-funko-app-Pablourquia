import 'mocha';
import { expect } from 'chai';
import {ListaNumeros} from '../../src/mod/listanumeros';
import {FilterMapSubReduce} from '../../src/mod/FilterMapSubReduce';

describe('FilterMapSubReduce', () => {  
  it("Se debe poder crear una instancia de FilterMapSubReduce", () => {
    let lista = new FilterMapSubReduce([1,2,3,4,5,6,7,8,9,10]);
    expect(lista).to.be.an.instanceof(FilterMapSubReduce);
  });
  it("Se debe poder ejecutar el método run", () => {
    let lista = new FilterMapSubReduce([1,2,3,4,5,6,7,8,9,10]);
    let resultado = lista.run();
    expect(resultado).to.be.equal(-80);
  });
});