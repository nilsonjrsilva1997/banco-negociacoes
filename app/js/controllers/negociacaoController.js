class NegociacaoController {
    constructor() {
        this._negociacoes = new Negociacoes();
        this._negociacoesView = new NegociacoesView('#negociacoesView');
        this._menssagemView = new MenssagemView('#mensagemView');
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
        this._negociacoesView.template(this._negociacoes);
        this._negociacoesView.update(this._negociacoes);
        this._menssagemView.update('Negociaçõo adicionada com sucesso');
    }
}
