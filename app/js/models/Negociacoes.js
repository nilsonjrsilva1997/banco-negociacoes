class Negociacoes {
    constructor() {
        console.log('negociação criada com sucesso');
        this._negociacoes = new Array();
    }
    adicionar(negociacao) {
        this._negociacoes.push(negociacao);
    }
    paraArray() {
        return this._negociacoes;
    }
}
