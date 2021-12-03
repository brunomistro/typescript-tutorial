export class Negociacao {
    constructor(data, quantitdade, valor) {
        this._data = data;
        this._quantitdade = quantitdade;
        this._valor = valor;
    }
    get data() { return this._data; }
    get quantidade() { return this._quantitdade; }
    get valor() { return this._valor; }
    get volume() { return this._quantitdade * this._valor; }
}
