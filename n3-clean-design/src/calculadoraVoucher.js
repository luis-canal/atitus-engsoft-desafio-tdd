export function calcularDesconto(codigo, valor) {
  if (codigo === 'NATAL10') {
    return valor * 0.10;
  }

  return 0;
}

