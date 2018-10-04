class NegociacoesView {
    constructor(seletor) {
        this._elemento = document.querySelector(seletor);
        console.log('View criada com sucesso');
    }
    update() {
        this._elemento.innerHTML = this._negociacaoHTML;
    }
    template() {
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
            </tbody>

            <tfoot>
            </tfoot>
        </table>`;
    }
}
