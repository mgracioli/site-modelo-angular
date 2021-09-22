import { FormControl } from "@angular/forms";
import { Observable } from "rxjs";

export class FormValidations{   
    
	//Método para a validação do campo CEP
	static cepValidator(control: FormControl){
		return new Observable(observer => {
			const cep = control.value;

			if(cep && cep !== ''){
				const validaCep = /^[0-9]{8}$/; // a "/" é usada como escape, para que o programa leia os simbolos de forma literal (como uma string), quando atribuídos à variável validaCep, o compilador elimina essas barras ao compilar. Os simbolos são usados abaixo no método .test() que, daí sim, lê esses símbolos como uma regex
				
				if(validaCep.test(cep)){
					observer.next(null);
				}else{
					observer.next({ cepInvalido : true })
				}
				observer.complete();
			}
		})
	}



}