import 'mocha';
import { expect } from 'chai';
import {Funko, Genero} from '../src/funko.js';
import {ColeccionFunkos} from '../src/coleccionFunkos.js';

describe('ColeccionFunkos', () => {
  it('Se puede crear una ColeccionFunkos', () => {
    let coleccionFunkos = new ColeccionFunkos('usu1', []);
    expect(coleccionFunkos).to.not.be.undefined;
  });
  it('Se puede modificar una ColeccionFunkos', () => {
    let coleccionFunkos = new ColeccionFunkos('usu1', []);
    coleccionFunkos.setFunkos([]);
    expect(coleccionFunkos.getFunkos()).to.be.empty;
  });
  it('Se puede añadir un funko', () => {
    let coleccionFunkos = new ColeccionFunkos('usu1', []);
    let funko = new Funko(1, 'Funko 1', 'Funko de prueba', 'Figura', Genero.Accion, 'Marvel', 1, true, 'Ninguna', 10000);
    coleccionFunkos.addFunko(funko);
    expect(coleccionFunkos.getFunkos()).to.not.be.empty;
    coleccionFunkos.addFunko(funko);
  });
  it('Se puede eliminar un funko', () => {
    let coleccionFunkos = new ColeccionFunkos('usu1', []);
    let funko = new Funko(1, 'Funko 1', 'Funko de prueba', 'Figura', Genero.Accion, 'Marvel', 1, true, 'Ninguna', 10000);
    coleccionFunkos.addFunko(funko);
    coleccionFunkos.removeFunko(1);
    expect(coleccionFunkos.getFunkos()).to.be.empty;
    coleccionFunkos.removeFunko(1);
  });
  it('Se puede modificar un funko', () => {
    let coleccionFunkos = new ColeccionFunkos('usu1', []);
    let funko = new Funko(1, 'Funko 1', 'Funko de prueba', 'Figura', Genero.Accion, 'Marvel', 1, true, 'Ninguna', 10000);
    coleccionFunkos.addFunko(funko);
    let funko2 = new Funko(1, 'Funko 2', 'Funko de prueba 2', 'Figura 2', Genero.Aventura, 'DC', 2, false, 'Ninguna 2', 20000);
    coleccionFunkos.updateFunko(funko2);
    expect(coleccionFunkos.getFunkos()[0].getNombre()).to.equal('Funko 2');
    expect(coleccionFunkos.getFunkos()[0].getDescripcion()).to.equal('Funko de prueba 2');
    expect(coleccionFunkos.getFunkos()[0].getTipo()).to.equal('Figura 2');
    expect(coleccionFunkos.getFunkos()[0].getGenero()).to.equal(Genero.Aventura);
    expect(coleccionFunkos.getFunkos()[0].getFranquicia()).to.equal('DC');
    expect(coleccionFunkos.getFunkos()[0].getNumero()).to.equal(2);
    expect(coleccionFunkos.getFunkos()[0].getExclusivo()).to.equal(false);
    expect(coleccionFunkos.getFunkos()[0].getCaracteristicasEspeciales()).to.equal('Ninguna 2');
    expect(coleccionFunkos.getFunkos()[0].getValorMercado()).to.equal(20000);
    funko2.setId(2);
    coleccionFunkos.updateFunko(funko2);
  });
  it('Se puede obtener un funko', () => {
    let coleccionFunkos = new ColeccionFunkos('usu1', []);
    let funko = new Funko(1, 'Funko 1', 'Funko de prueba', 'Figura', Genero.Accion, 'Marvel', 1, true, 'Ninguna', 10000);
    coleccionFunkos.addFunko(funko);
    expect(coleccionFunkos.getFunko(1)).to.not.be.empty;
  });
  it('Se puede obtener el nombre del usuario', () => {
    let coleccionFunkos = new ColeccionFunkos('usu1', []);
    expect(coleccionFunkos.getNombreUsuario()).to.equal('usu1');
  });
});