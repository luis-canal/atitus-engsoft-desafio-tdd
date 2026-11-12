export class GatewayEmail {
  async enviar(email, mensagem) {
    console.log(`[REAL] Enviando e-mail para ${email}: ${mensagem}`);
    return true;
  }
}