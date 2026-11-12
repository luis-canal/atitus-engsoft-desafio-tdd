const descontos = {
  DEZ: 0.1,
  TRINTA: 0.3,
};

export function calcularDesconto(codigo, valor) {
  const percentual = descontos[codigo] ?? 0;
  return valor * percentual;
}

