/* ESSE RESOLVER FAZ O PRÉ CARREGAMENTO DOS DADOS DO PRODUTO
JÁ NO MÓDULO DE ROTEAMENTO, OU SEJA, CARREGA OS DADOS 
ANTES DE RENDERIZAR O TEMPLATE
*/

import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";

import { ProductDetails } from "../../features/products/models/product-details";
import { ProductDetailsService } from "../services/product-details-service/product-details.service";

@Injectable()
export class ProductDetailsResolver implements Resolve<ProductDetails>{ /* <> é o tipo do objeto que será resolvido */

    constructor(
        private productDetailsService: ProductDetailsService
    ){}

    /* método que vai fazer a busca pelo produto antes do template ser carregado na tela */
    resolve(
        route: ActivatedRouteSnapshot,
    ) : Observable<any> | Promise<any> | any {
        let id = route.params['id']; /* obtém o parâmetro id da rota ativa no momento*/
        return this.productDetailsService.getDetails(id);
    }
}



