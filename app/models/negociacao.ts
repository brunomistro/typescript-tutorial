export class Negociacao {
	private _data;
	private _quantitdade;
	private _valor;

	constructor(data, quantitdade, valor) {
		this._data = data;
		this._quantitdade = quantitdade;
		this._valor = valor;
	}
}