import { FormControl } from "@angular/forms";

export class FormValidations{   
    
    //Método para a validação do campo CEP
    static cepValidator(control: FormControl){
      const cep = control.value;

      if(cep && cep !== ''){
        const validaCep = /^[0-9]{8}$/; // a "/" é usada como escape, para que o programa leia os simbolos de forma literal (como uma string), quando atribuídos à variável validaCep, o compilador elimina essas barras ao compilar. Os simbolos são usados abaixo no método .test() que, daí sim, lê esses símbolos como uma regex
        return validaCep.test(cep)? null : { cepInvalido : true }; //cepInvalido é o nome do erro que vai ser retornado caso o ep não passe no teste da regex
      }
      return null;  //retorna nulo caso o campo seja válido
    }

}