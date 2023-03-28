import 'mocha';
import { expect } from 'chai';
import { ColeccionFunkos } from '../src/coleccionFunkos.js';
import {ColeccionDatos} from '../src/coleccionDatos.js';

describe('ColeccionDatos', () => {
  it('Se puede crear una ColeccionDatos', () => {
    let coleccion = new ColeccionDatos([]);
    expect(coleccion.getDatos()).to.equal([]);
  });
  it('Se puede modificar una ColeccionDatos', () => {
    let coleccion = new ColeccionDatos([]);
    coleccion.addDatos(new ColeccionFunkos('Usuario 1',[]));
    expect(coleccion.getDatos()).to.equal([new ColeccionFunkos('Usuario 1',[])]);
  });
  it('Se puede eliminar una ColeccionDatos', () => {
    let coleccion = new ColeccionDatos([]);
    coleccion.addDatos(new ColeccionFunkos('Usuario 1',[]));
    coleccion.removeDatos('Usuario 1');
    expect(coleccion.getDatos()).to.equal([]);
  });
});