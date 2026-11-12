export function validarIdade(usuario) {
    if (usuario.idade < 18) return false;
    return true;
}