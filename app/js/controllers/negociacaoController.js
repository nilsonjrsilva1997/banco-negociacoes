class NegociacaoController {
    constructor() {
        this._negociacoes = new Negociacoes();
        this._inputData = document.querySelector('#data');
        this._inputQuantidade = document.querySelector('#quantidade');
        this._inputValor = document.querySelector('#valor');
    }
    adiciona(event) {
        event.preventDefault();
        const negociacao = new Negociacao(new Date(this._inputData.value.replace(/-/g, ',')), parseInt(this._inputQuantidade.value), parseFloat(this._inputValor.value));
        this._negociacoes.adicionar(negociacao);
        this._negociacoes.paraArray().forEach(negociacao => {
            console.log(`data: ${negociacao.data}`);
            console.log(`quantidade: ${negociacao.quantidade}`);
            console.log(`valor: ${negociacao.valor}`);
        });
        console.log(negociacao);
    }
}
