import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { distinctUntilChanged, switchMap } from 'rxjs/operators'
import { Observable, of } from 'rxjs';

import { FormValidations } from 'src/app/shared/form-validations/form-validations';
import { GetCepService } from '../../../shared/services/cep-services/get-cep.service';
import { DropdownService } from 'src/app/shared/services/dropdown-service/dropdown.service';
import { BrState } from 'src/app/shared/services/dropdown-service/br-state';

@Component({
	selector: 'app-new-account',
	templateUrl: './new-account.component.html',
	styleUrls: ['./new-account.component.scss']
})
export class NewAccountComponent implements OnInit {

	formulario!: FormGroup
	states$!: Observable<BrState[]>

	constructor(
		private formBuilder: FormBuilder,
		private http: HttpClient,
		private getCepService: GetCepService,
		private dropdownService: DropdownService
	) { }

	ngOnInit(): void {
		// *************************************************
		// Constrói o formulario
		// *************************************************
		this.formulario = this.formBuilder.group({
			username: [null, Validators.required], //null é o valor inicial do campo
			email: [null, [Validators.required, Validators.email]],
			password: [null, Validators.required],
			address: this.formBuilder.group({
				cep: [null, Validators.required, FormValidations.cepValidator],
				street: [null],
				number: [null],
				complement: [null],
				district: [null],
				city: [null],
				state: [null]
			})
		});

		// *************************************************
		// Carrega a lista de estados no <select> de estados
		// *************************************************
		this.states$ = this.dropdownService.getBrStates() //como this.dropdownService.getBrStates() retorna um observable, eu teria que me inscrever nele aqui e pegar os dados retornados e inserir em uma variável states: BrState[], no entanto, isso pode resultar em memory leaks uma vez que essa inscrição fica ativa na memória e pode ocorrer de não ser feito o unsubscribe desse observable mesmo com a destruição da página; para evitar isso, faz-se dessa forma: obtem o os dados do getBrStates() em um outro observable e, lá no template, eu uso o pipe "async" que faz o subscribe e o unsubscribe automáticos. Dar sempre preferência pelo pipe 'async' quando, no template, tiver de lidar com dados que vêm de observables
	}


	// ************************************************************* 
	// Método que recupera os dados preenchidos nos campos do formulário e envia para o servidor; o onSubmit é chamado sempre que clicar no botão de submit, o evento que dispara esse método está na tag <form> (na propriedade (ngSubmit)="onSubmit())
	// ************************************************************* 
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
			this.verifyFormValidations(this.formulario)
		}
	}


	// ************************************************************* 
	// Método necessário para aplicar o CSS de erro nos campos/controles/formControls aninhados do campo/controle/formGroup "address" ao realizar o submit do formulário*/
	// ************************************************************* 
	private verifyFormValidations(formGroup: FormGroup) {
		//Object.keys vai retornar as chaves do formulário (nesse caso, as chaves são: username, email, password e address) - formulario.controls são os controles do formulário, que são os pares "chave: valor" do formulário
		Object.keys(formGroup.controls).forEach(field => {
			const control = formGroup.get(field)

			//marca o campo como Touched pois, assim, ele ativa a validação do campo (por conta do (ngClass)="applyCssFieldError()" aplicado nos campos  
			control?.markAsTouched()

			//se o controle passado for um formGroup (como, por exemplo, o "address"), chama essa função de forma recursiva para marcar os campos aninhados como touched também
			if (control instanceof FormGroup) {
				this.verifyFormValidations(control)
			}
		})
	}


	// ************************************************************* 
	// Script para aplicar css de erro nos campos do formulário (borda vermelha no campo) */
	// ************************************************************* 
	// Método para verificar se o campo está válido (se passou com sucesso pelos Vlidators) e se foi dado foco nele (touched) durante o preenchimento das inputs
	applyCssFieldError(field: string) {
		return {
			'field-error': !this.formulario.get(field)!.valid && this.formulario.get(field)!.touched //this.formulario.get(field) retorna uma instancia do campo correspondente do formulário criado lá no ngOnInit() - has-error é a classe do Bootstrap que vai ser aplicada no elemento caso o campo não esteja válido (caso não tenha passado com sucesso pelos Validators) e tenha sido tocado (touched)
		}
	}


	// ************************************************************* 
	// script para buscar as informações do CEP na api do viaCep e popular os campos de endereço do formulário */
	// *************************************************************
	//consultaCEP é ativado quando ocorre o blur da input de cep do formulário
	findCEP() {
		//ao emitir um evento de mudança de status do campo cep (quando ele for alterado), o programa executa as funções do pipe. O pipe retorna um observable (ele é um observable); o programa detecta essas mudanças por meio do subscribe (o subscribe, nesse caso, fica monitorando os eventos emitidos pelo pipe() que, por sua vez, monitora os eventos emitidos pelo statusChanges)
		const cep = this.formulario.get('address.cep')

		cep!.statusChanges.pipe( 	//statusChanges é um observable que emite um evento sempre que o status dos validators do campo/controle cep forem alterados, nesse caso, o status muda a cada valor digitado na input, ele vai ficar sempre mudando de INVALID para INVALID até o penultimo digito do cep, quando digitar o ultimo, ele muda para VALID
			distinctUntilChanged(), //essa função só faz rodar a linha de baixo quando o status for modificado, nesse caso, como o CEP precisa ter 8 digitos para ser válido (isso foi definido no validator) ele vai imprimir o status inválido, inicialmente e, só após digitar o oitavo digito, ele vai imprimir na tela de novo o novo status de 'válido'. Sem essa função o programa ficaria imprimindo inválido a cada digito que eu colocasse do cep (até o 7º digito, depois imprimiria 'valido')
			switchMap(status => status === 'VALID'? this.getCepService.findCep(cep!.value) : of({}))  //o método consultaCep() retorna um observable (que é a chamada http lá do viaCep) - of({}) é um observable que emite os argumentos passados para ele e completa sem erros; como, nesse caso, não estou passando argumentos, ele envia um observable vazio, isso porque o operador switchMap() precisa que sejam retornados observables
		)
		.subscribe(data => data ? this.populateDataForm(data) : {});
	}

	private populateDataForm(data: any) {
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


	// ************************************************************* 
	// 
	// *************************************************************



}
