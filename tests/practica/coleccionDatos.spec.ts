import 'mocha';
import { expect } from 'chai';
import { ColeccionFunkos } from '../../src/practica/coleccionFunkos';
import {ColeccionDatos} from '../../src/practica/coleccionDatos';

describe('ColeccionDatos', () => {
  it('Se puede crear una ColeccionDatos', () => {
    let coleccion = new ColeccionDatos([]);
    expect(coleccion.getDatos()).to.eql([]);
  });
  it('Se puede modificar una ColeccionDatos', () => {
    let coleccion = new ColeccionDatos([]);
    coleccion.addDatos(new ColeccionFunkos('Usuario 1',[]));
    expect(coleccion.getDatos()).to.eql([new ColeccionFunkos('Usuario 1',[])]);
  });
  it('Se puede eliminar una ColeccionDatos', () => {
    let coleccion = new ColeccionDatos([]);
    coleccion.addDatos(new ColeccionFunkos('Usuario 1',[]));
    coleccion.removeDatos('Usuario 1');
    expect(coleccion.getDatos()).to.eql([]);
  });
});