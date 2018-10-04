class NegociacoesView extends View{

    private _negociacaoHTML: string;

    update(negociacoa: Negociacoes): void {
        this._elemento.innerHTML = this._negociacaoHTML;
    }

    template(negociacoa: Negociacoes): void {
        this._negociacaoHTML = 
       `<table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                    <th>VOLUME</th>
                </tr>
            </thead>

            <tbody>
                ${negociacoa.paraArray().map(negociacao => {
                    return `<tr>
                                <td>${negociacao.data.getDate()/negociacao.data.getMonth() + 1/negociacao.data.getFullYear()}</td>
                                <td>${negociacao.quantidade}</td>
                                <td>${negociacao.valor}</td>
                                <td>${negociacao.volume}</td>
                            </tr>`;
                }).join('')}
            </tbody>

            <tfoot>
            </tfoot>
        </table>`;
    }
}