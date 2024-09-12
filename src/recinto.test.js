import Recinto from './recinto.js';

describe('Recinto', () => {
  test('Deve retornar "false" se não houver espaço suficiente para o Leão', () => {
    const especie = {
      nome: 'LEAO',
      carnivoro: true,
      bioma: ['savana'],
      tamanho: 3,
    };
    const quantidade = 5;
    const animaisExistentes = [];
    const animaisInfo = {
      'LEAO': { carnivoro: true, tamanho: 3, bioma: ['savana'] },
    };

    const recinto = new Recinto(1, ['savana'], 10, animaisExistentes, animaisInfo);
    const resultado = recinto.verificarCompatibilidade(especie, quantidade);
    expect(resultado).toBe(false);
  });

  test('Deve retornar "true" se o Hipopótamo for inserido em um recinto com rio', () => {
    const especie = {
      nome: 'HIPOPOTAMO',
      carnivoro: false,
      bioma: ['savana', 'rio'],
      tamanho: 4,
    };
    const quantidade = 1;
    const animaisExistentes = [];
    const animaisInfo = {
      'MACACO': { carnivoro: false, tamanho: 1, bioma: ['savanna'] },
    };

    const recinto = new Recinto(1, ['savana, rio'], 15, [], animaisInfo);
    const resultado = recinto.verificarCompatibilidade(especie, 1);
    expect(resultado).toBe(false);
  });

  test('Deve retornar "false" se tentar inserir um Macaco sozinho em um recinto vazio', () => {
    const especie = {
      nome: 'MACACO',
      carnivoro: false,
      bioma: ['savana', 'floresta'],
      tamanho: 1,
    };
    const quantidade = 1;
    const animaisExistentes = [];
    const animaisInfo = {
      'CROCODILO': { carnivoro: true, tamanho: 3, bioma: ['rio'] },
    };

    const recinto = new Recinto(1, ['savana'], 5, [], animaisInfo);
    const resultado = recinto.verificarCompatibilidade(especie, 1);
    expect(resultado).toBe(false);
  });
});
