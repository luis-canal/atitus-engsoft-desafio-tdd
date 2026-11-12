import { ServicoNotificacao } from '../src/servicoNotificacao.js';
import { jest } from '@jest/globals';

describe('ServicoNotificacao', () => {
  test('deve chamar o gateway de email com os dados corretos', async () => {

    const mockGateway = {
      enviar: jest.fn().mockResolvedValue(true)
    }

    const servico = new ServicoNotificacao(mockGateway);

    const usuario = {
      email: 'usuario@atitus.edu.br'
    };

    await servico.enviarBoasVindas(usuario);

    expect(mockGateway.enviar).toHaveBeenCalledWith(usuario.email, 'Bem-vindo!'); 

  });
});

