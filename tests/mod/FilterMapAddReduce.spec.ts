import 'mocha';
import { expect } from 'chai';
import {ListaNumeros} from '../../src/mod/listanumeros';
import {FilterMapAddReduce} from '../../src/mod/FilterMapAddReduce';

describe('FilterMapAddReduce', () => {  
  it("Se debe poder crear una instancia de FilterMapAddReduce", () => {
    let lista = new FilterMapAddReduce([1,2,3,4,5,6,7,8,9,10]);
    expect(lista).to.be.an.instanceof(FilterMapAddReduce);
  });
  it("Se debe poder ejecutar el método run", () => {
    let lista = new FilterMapAddReduce([1,2,3,4,5,6,7,8,9,10]);
    let resultado = lista.run();
    expect(resultado).to.be.equal(80);
  });
});

  