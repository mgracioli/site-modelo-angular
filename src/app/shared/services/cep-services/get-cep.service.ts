import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { Address } from './address';


@Injectable({
	providedIn: 'root'
})
export class GetCepService {

	constructor(private http: HttpClient) { }

   /************************************************
   * Serviço responsável por consumir a API do viacep retornando os dados do CEP solicitado 
   * @param cep String contendo o cep que se deseja pesquisar
   * @returns Observable: Address com as chaves: cep, logradouro, complemento, bairro, localidade, uf, ibge, gia, ddd, siafi
   * ***********************************************/
	findCep(cep: string) {
      //fazer um try catch aqui
      return this.http.get<Address>(`https://viacep.com.br/ws/${cep}/json`);
	}
}


