import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class CepService {

	constructor(private http: HttpClient) { }

	consultaCep(cep: string) {
		//expressão regular que substitui qualquer digito não numerico que houver sido colocado no cep por vazio
		//cep = cep.replace(/\D/g, '');

		//Expressão regular para validar o CEP (com 8 digitos).
		//var validacep = /^[0-9]{8}$/;

		//Valida o formato do CEP e obtém os dados do web service (API).
		//if (validacep.test(cep)) {
			return this.http.get(`https://viacep.com.br/ws/${cep}/json`);
		//}

		/* retorna alguma coisa caso o cep não seja válido */
		//return of({});
	}
}


