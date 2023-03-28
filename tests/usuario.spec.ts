import 'mocha';
import { expect } from 'chai';
import { Usuario} from '../src/usuario';

describe('Usuario', () => {
  it('Se puede crear un Usuario', () => {
    let usuario = new Usuario('Usuario 1');
    expect(usuario.getNombre()).to.equal('Usuario 1');
  });
  it('Se puede modificar un Usuario', () => {
    let usuario = new Usuario('Usuario 1');
    usuario.setNombre('Usuario 2');
    expect(usuario.getNombre()).to.equal('Usuario 2');
  });
});