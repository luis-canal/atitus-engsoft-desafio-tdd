import { calcularDesconto } from '../src/calculadoraVoucher.js';

describe('Calculadora de Voucher', () => {
  test('deve aplicar 10% para o voucher DEZ', () => {
    expect(calcularDesconto('DEZ', 100)).toBe(10);
  });
  test('deve aplicar 30% para o voucher TRINTA', () => {
    expect(calcularDesconto('TRINTA', 100)).toBe(30);
  });
  test('não deve aplicar desconto para voucher inválido', () => {
    expect(calcularDesconto('TESTE', 100)).toBe(0);
  });
});
