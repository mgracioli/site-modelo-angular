import { FormControl } from "@angular/forms";
import { Observable } from "rxjs";

export class FormValidations{   
    
	/************************************
	* Método para a validação do campo CEP. Verifica se o CEP
	* está no padrão XXXXXX-XXX, caso esteja, emite um evento null
	* indicando que está tudo ok, caso contrario, emite a propriedade cepInvalido: true,
	* com isso eu consigo pegar essa propriedade do objeto input e verificar se o campo está válido ou não
	*
	* @param FormControl
	* @returns Observable<>
	**************************************/
	static cepValidator(control: FormControl){
		return new Observable(observer => {
			const cep = control.value;

			if(cep && cep !== ''){
				const validaCep = /^[0-9]{8}$/; // a "/" é usada como escape, para que o programa leia os simbolos de forma literal (como uma string), quando atribuídos à variável validaCep, o compilador elimina essas barras ao compilar. Os simbolos são usados abaixo no método .test() que, daí sim, lê esses símbolos como uma regex
				
				if(validaCep.test(cep)){
					observer.next(null);
				}else{
					observer.next({ cepInvalido : true }) //cria a propriedade cepInvalido na Input (para visualizar esa propriedade: "console.dir(control)". Com isso, eu posso pegar essa propriedade no Javascript e fazer o que for preciso)
				}
				observer.complete();
			}
		})
	}
}