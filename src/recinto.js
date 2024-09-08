export default class Recinto {
  constructor(numero, bioma, tamanhoTotal, animaisExistentes, animaisInfo) {
    this.numero = numero;
    this.bioma = bioma;
    this.tamanhoTotal = tamanhoTotal;
    this.animaisExistentes = animaisExistentes;
    this.animaisInfo = animaisInfo;
  }

  calcularEspacoLivre() {
    let espacoOcupado = this.animaisExistentes.reduce((total, animal) => total + animal.tamanho, 0);

    const diferentesEspecies = this.animaisExistentes.some((animal, index, arr) =>
      arr.findIndex(a => a.especie === animal.especie) !== index);

    if (diferentesEspecies) espacoOcupado += 1;

    return this.tamanhoTotal - espacoOcupado;
  }

  verificarCompatibilidade(especie, quantidade) {
    if (this.animaisExistentes.some(a => this.animaisInfo[a.especie].carnivoro === true)) return false;

    if (this.animaisExistentes.some(a => this.animaisInfo[a.especie].carnivoro && a.especie !== especie.nome)) return false;

    if (!especie.bioma.some(bioma => this.bioma.includes(bioma))) return false;

    if (especie.nome === 'HIPOPOTAMO' && this.animaisExistentes.length > 0 && !this.bioma.includes('rio')) return false;

    if (especie.nome === 'MACACO' && this.animaisExistentes.length === 0 && quantidade === 1) return false;

    const espacoLivre = this.calcularEspacoLivre();
    const espacoNecessario = (especie.tamanho * quantidade);

    return espacoLivre >= espacoNecessario;
  }
}
