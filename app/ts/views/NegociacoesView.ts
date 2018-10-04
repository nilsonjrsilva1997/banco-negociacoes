class NegociacoesView {

    private _negociacaoHTML: string;
    private _elemento: Element;

    constructor(seletor: string) {
        this._elemento = document.querySelector(seletor);   
        console.log('View criada com sucesso');
    }

    update(): void {
        this._elemento.innerHTML = this._negociacaoHTML;
    }

    template(): void {
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