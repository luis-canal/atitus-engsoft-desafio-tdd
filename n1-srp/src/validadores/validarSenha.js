export function validarSenha(usuario) {
    if (usuario.password.length < 8) return false;
    return true;
}