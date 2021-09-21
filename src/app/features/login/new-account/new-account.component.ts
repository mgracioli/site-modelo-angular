import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CepService } from '../../../shared/services/cep-service/cep.service';

@Component({
	selector: 'app-new-account',
	templateUrl: './new-account.component.html',
	styleUrls: ['./new-account.component.scss']
})
export class NewAccountComponent implements OnInit {

	formulario!: FormGroup

	constructor(
		private formBuilder: FormBuilder,
		private http: HttpClient,
		private cepService: CepService
	) { }

	ngOnInit(): void {
		this.formulario = this.formBuilder.group({
			username: [null, Validators.required], //null é o valor inicial do campo
			email: [null, [Validators.required, Validators.email]],
			password: [null, Validators.required],
			address: this.formBuilder.group({
				cep: [null, Validators.required],
				street: [null],
				number: [null],
				complement: [null],
				district: [null],
				city: [null],
				state: [null]
			})
		});
	}

	/* Método que recupera os dados preenchidos nos campos do formulário e envia para o servidor, o onSubmit é chamado sempre que clicar no botão de submit, o evento que dispara esse método está na tag <form> (na propriedade (ngSubmit)="onSubmit()) */
	onSubmit() {
		if (this.formulario.valid) {  //o formulario só estará válido quando passar, com sucesso, por todos os Validators aplicados
			// esse método post simula o envio das informações do formulário para um servidor (backend), nesse caso eu usei um servidor de exemplo (o httpbin) - olhar a resposta pela aba "network" do F12
			this.http.post('https://httpbin.org/post',
				JSON.stringify(this.formulario.value))
				.subscribe(() => {
					alert('You are logged in')
					//reseta o formulário logo após receber a resposta do servidor
					this.formulario.reset();
				}, (erro) => { alert('Error when logging in, please try again') })  //mensagem caso o backend retorne algum erro
		} else {
			alert('Required fields must be filled')
			this.verifyFormValidations(this.formulario)
		}
	}

	/* Método necessário para aplicar o CSS de erro nos campos/controles/formControls aninhados do campo/controle/formGroup "address" ao realizar o submit do formulário*/
	verifyFormValidations(formGroup: FormGroup) {
		//Object.keys vai retornar as chaves do formulário (nesse caso, as chaves são: username, email, password e address) - formulario.controls são os controles do formulário, que são os pares "chave: valor" do formulário
		Object.keys(formGroup.controls).forEach(field => {
			const control = formGroup.get(field)

			//marca o campo como Touched pois, assim, ele ativa a validação do campo (por conta do (ngClass)="applyCssFieldError()" aplicado nos campos (no caso, eu só apliquei o ngClass na input de name porque eu ainda não consegui fazer essa validação funcionar))  
			control?.markAsTouched()

			//se o controle passado for um formGroup (como, por exemplo, o "address"), chama essa função de forma recursiva para marcar os campos aninhados como touched também
			if (control instanceof FormGroup) {
				this.verifyFormValidations(control)
			}
		})
	}

	/* Script para aplicar css de erro nos campos do formulário (borda vermelha no campo) */
	//ESSE SCRIPT ESTÁ FUNCIONANDO MAS, POR ALGUM MOTIVO, NÃO ESTÁ APLICANDO A FORMATAÇÃO, A CLASSE HAS-ERROR ESTÁ SENDO APLICADA CORRETAMENTE, APENAS A COR DA INPUT E DA LABEL QUE NÃO ESTÃO MUDANDO

	/* Método para verificar se o campo está válido (se passou com sucesso pelos Vlidators) e se foi dado foco nele (touched) durante o preenchimento das inputs */
	applyCssFieldError(field: string) {
		return {
			'has-error': !this.formulario.get(field)!.valid && this.formulario.get(field)!.touched //this.formulario.get(field) retorna uma instancia do campo correspondente do formulário criado lá no ngOnInit() - has-error é a classe do Bootstrap que vai ser aplicada no elemento caso o campo não esteja válido (caso não tenha passado com sucesso pelos Validators) e tenha sido tocado (touched)      
		}
	}
	/* fim do script para aplicar css de erro nos campos do formulário */


	/* script para buscar as informações do CEP na api do viaCep e popular os campos de endereço do formulário */
	//consultaCEP é ativado quando ocorre o blur da input de cep do formulário
	consultaCEP() {
		const cep = this.formulario.get('address.cep')!.value;

		if (cep != null && cep !== '') {
			this.cepService.consultaCep(cep)
				.subscribe(data => this.populateDataForm(data));
		}
	}

	populateDataForm(data: any) {
		/* usando o patchValue ao invés do setValue eu posso alterar só os campos que me interessam, eu nao preciso mexer em todos os campos obrigatoriamente */
		this.formulario.patchValue({
			address: {
				street: data.logradouro, /* dados.algumacoisa são os dados do objeto "dados" que foram obtidos lá do serviço viaCep da internet */
				complement: data.complemento,
				district: data.bairro,
				city: data.localidade,
				state: data.uf
			}
		});
	}

	// resetaDadosForm(){
	//   //o patchValue permite "setar" apenas os valores que eu quero alterar no formulário, se eu usasse o setValue, teria que "setar" todos os campos, até mesmo aqueles q eu nao quero alterar
	//   this.formulario.patchValue({
	//     address: {
	//       street: null, 
	//       complement: null,
	//       district: null,
	//       city: null,
	//       state: null,
	//     },
	//   });
	// }
	/* fim do script para buscar as informações do CEP na api do viaCep e popular os campos de endereço do formulário */

}
