import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, filter} from 'rxjs/operators'

import { ProductDetails } from 'src/app/features/products/models/product-details';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailsService {

  constructor(
    private http: HttpClient,
  ) { }

  //ESSE METODO TEM Q RETORNAR UM OBSERVABLE
  //TUDO O QUE ESSE MÉTODO FAZ DEVERIA SER FEITO NA CONSULTA AO BANCO DE DADOS, AINDA NÃO IMPLEMENTEI O BANCO, POR ISSO ELE ESTÁ FAZENDO ESSE PAPEL DE FILTRAR OS DADOS
  getDetails(id: string) : Observable<ProductDetails>{
    const category = "houseware" //colocar lá no resolver depois
    
    return this.http.get<ProductDetails[]>('assets/product-details-service/products-details.json')
    .pipe(
      //O método get() retorna um array de objetos em forma de stream; ‘dado’ é um array de objetos real, é a conversão dessa stream em objetos reais, o map vai pegar toda a stream de dados e converter cada objeto dela em um objeto real. Não é possível filtrar um observable, diretamente, precisa fazer o map
      map(prods => prods.filter(prod => prod.id == id)[0]),  //[0] porque o filter retorna um array com o objeto filtrado, por isso coloca o [0] para retornar esse elemento, que é o primeiro (e único) do aray.
    )
  } 
}
