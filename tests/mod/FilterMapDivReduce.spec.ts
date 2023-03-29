import 'mocha';
import { expect } from 'chai';
import {ListaNumeros} from '../../src/mod/listanumeros';
import {FilterMapDivReduce} from '../../src/mod/FilterMapDivReduce';

describe('FilterMapDivReduce', () => {  
  it("Se debe poder crear una instancia de FilterMapDivReduce", () => {
    let lista = new FilterMapDivReduce([1,2,3,4,5,6,7,8,9,10]);
    expect(lista).to.be.an.instanceof(FilterMapDivReduce);
  });
  it("Se debe poder ejecutar el método run", () => {
    let lista = new FilterMapDivReduce([1,2,3,4,5,6,7,8,9,10]);
    let resultado = lista.run();
    expect(resultado).to.be.equal(0);
  });
});