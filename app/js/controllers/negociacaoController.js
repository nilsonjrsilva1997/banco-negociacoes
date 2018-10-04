class NegociacaoController {
    constructor() {
        this._inputData = document.querySelector('#data');
        this._inputQuantidade = document.querySelector('#quantidade');
        this._inputValor = document.querySelector('#valor');
        console.log('negociação criada com sucesso');
    }
    adiciona(event) {
        event.preventDefault();
        const negociacao = new Negociacao(new Date(this._inputData.value.replace(/-/g, ',')), parseInt(this._inputQuantidade.textContent), parseFloat(this._inputValor.textContent));
        console.log('segunda negociacao');
        console.log(negociacao);
    }
}
