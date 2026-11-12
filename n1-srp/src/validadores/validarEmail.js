export function validarEmail(usuario) {
    if (!usuario.email.includes('@')) return false;
    return true
}