import 'mocha';
import { expect } from 'chai';
import {ListaNumeros} from '../../src/mod/listanumeros';
import {FilterMapProdReduce} from '../../src/mod/FilterMapProdReduce';

describe('FilterMapProdReduce', () => {  
  it("Se debe poder crear una instancia de FilterMapProdReduce", () => {
    let lista = new FilterMapProdReduce([1,2,3,4,5,6,7,8,9,10]);
    expect(lista).to.be.an.instanceof(FilterMapProdReduce);
  });
  it("Se debe poder ejecutar el método run", () => {
    let lista = new FilterMapProdReduce([1,2,3,4,5,6,7,8,9,10]);
    let resultado = lista.run();
    expect(resultado).to.be.equal(0);
  });
});