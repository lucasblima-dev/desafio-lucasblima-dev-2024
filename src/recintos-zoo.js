import Recinto from './recinto.js';

class RecintosZoo {
    constructor() {
        this.animais = {
            LEAO: { nome: 'LEAO', tamanho: 3, bioma: ['savana'], carnivoro: true },
            LEOPARDO: { nome: 'LEOPARDO', tamanho: 2, bioma: ['savana'], carnivoro: true },
            CROCODILO: { nome: 'CROCODILO', tamanho: 3, bioma: ['rio'], carnivoro: true },
            MACACO: { nome: 'MACACO', tamanho: 1, bioma: ['savana', 'floresta'], carnivoro: false },
            GAZELA: { nome: 'GAZELA', tamanho: 2, bioma: ['savana'], carnivoro: false },
            HIPOPOTAMO: { nome: 'HIPOPOTAMO', tamanho: 4, bioma: ['savana', 'rio'], carnivoro: false },
        };

        this.recintos = [
            new Recinto(1, 'savana', 10, [{ especie: 'MACACO', tamanho: 3 }], this.animais),
            new Recinto(2, 'floresta', 5, [], this.animais),
            new Recinto(3, 'savana e rio', 7, [{ especie: 'GAZELA', tamanho: 2 }], this.animais),
            new Recinto(4, 'rio', 8, [], this.animais),
            new Recinto(5, 'savana', 9, [{ especie: 'LEAO', tamanho: 3 }], this.animais),
        ];
    }

    analisaRecintos(tipo, quantidade) {
        const especie = this.animais[tipo];

        if (!especie) return { erro: "Animal inválido" };

        if (quantidade <= 0) return { erro: "Quantidade inválida" };

        let recintosViaveis = this.recintos
            .filter(recinto => recinto.verificarCompatibilidade(especie, quantidade))
            .map(recinto => {
                const espacoLivre = recinto.calcularEspacoLivre() - (especie.tamanho * quantidade);
                return `Recinto ${recinto.numero} (espaço livre: ${espacoLivre} total: ${recinto.tamanhoTotal})`;
            });

        if (recintosViaveis.length === 0) return { erro: "Não há recinto viável" };

        return { recintosViaveis: recintosViaveis.sort() };
    }
}

const zooLote = new RecintosZoo();
console.log(zooLote.analisaRecintos('MACACO', 2));

export { RecintosZoo as RecintosZoo }
