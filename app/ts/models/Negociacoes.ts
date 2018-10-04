class Negociacoes {

    private _negociacoes: Array<Negociacao>;

    constructor() {
        console.log('negociação criada com sucesso');
        this._negociacoes = new Array();
    }

    adicionar(negociacao: Negociacao) {
        this._negociacoes.push(negociacao);
    }

    paraArray(): Negociacao[] {
        return [].concat(this._negociacoes);
    }
}