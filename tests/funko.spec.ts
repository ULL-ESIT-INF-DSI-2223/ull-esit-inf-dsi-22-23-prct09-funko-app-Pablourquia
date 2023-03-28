import 'mocha';
import { expect } from 'chai';
import { Funko, Genero, Tipo} from '../src/funko';

describe('Funko', () => {
  it('Se puede crear un Funko', () => {
    let funko = new Funko(1, 'Funko 1', 'Funko de prueba', Tipo.Pop, Genero.Accion, 'Marvel', 1, true, 'Ninguna', 10000);
    expect(funko.getId()).to.equal(1);
    expect(funko.getNombre()).to.equal('Funko 1');
    expect(funko.getDescripcion()).to.equal('Funko de prueba');
    expect(funko.getTipo()).to.equal(Tipo.Pop);
    expect(funko.getGenero()).to.equal(Genero.Accion);
    expect(funko.getFranquicia()).to.equal('Marvel');
    expect(funko.getNumero()).to.equal(1);
    expect(funko.getExclusivo()).to.equal(true);
    expect(funko.getCaracteristicasEspeciales()).to.equal('Ninguna');
    expect(funko.getValorMercado()).to.equal(10000);
  });
  it('Se puede modificar un Funko', () => {
    let funko = new Funko(1, 'Funko 1', 'Funko de prueba', Tipo.Pop, Genero.Accion, 'Marvel', 1, true, 'Ninguna', 10000);
    funko.setId(2);
    funko.setNombre('Funko 2');
    funko.setDescripcion('Funko de prueba 2');
    funko.setTipo(Tipo.Pop);
    funko.setGenero(Genero.Aventura);
    funko.setFranquicia('DC');
    funko.setNumero(2);
    funko.setExclusivo(false);
    funko.setCaracteristicasEspeciales('Ninguna 2');
    funko.setValorMercado(20000);
    expect(funko.getId()).to.equal(2);
    expect(funko.getNombre()).to.equal('Funko 2');
    expect(funko.getDescripcion()).to.equal('Funko de prueba 2');
    expect(funko.getTipo()).to.equal(Tipo.Pop);
    expect(funko.getGenero()).to.equal(Genero.Aventura);
    expect(funko.getFranquicia()).to.equal('DC');
    expect(funko.getNumero()).to.equal(2);
    expect(funko.getExclusivo()).to.equal(false);
    expect(funko.getCaracteristicasEspeciales()).to.equal('Ninguna 2');
    expect(funko.getValorMercado()).to.equal(20000);
  });
});