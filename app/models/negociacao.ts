export class Negociacao {
	private _data: Date;
	private _quantitdade: number;
	private _valor: number;

	constructor(data: Date, quantitdade: number, valor: number) {
		this._data = data;
		this._quantitdade = quantitdade;
		this._valor = valor;
	}

	get data(): Date { return this._data }

	get quantidade(): number { return this._quantitdade }

	get valor(): number { return this._valor }

	get volume(): number { return this._quantitdade * this._valor }
}