import { validarEmail } from './validadores/validarEmail.js';
import { validarSenha } from './validadores/validarSenha.js';
import { validarIdade } from './validadores/validarIdade.js';

export function validadorUsuario(usuario) {
  return (
    validarEmail(usuario) && 
    validarSenha(usuario) && 
    validarIdade(usuario)
  );
}
