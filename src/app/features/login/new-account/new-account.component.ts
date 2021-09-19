import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.scss']
})
export class NewAccountComponent implements OnInit {

  formulario!: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient
    ) { }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      username: [null], //null é o valor inicial do campo
      email: [null],
      password: [null],
      cep: [null],
      logradouro: [null]
    }); 
  }

  /* Método que recebe os dados dos campos do formulário, o onSubmit é chamado sempre que clicar no botão de submit, o evento que dispara esse método está na tag <form> (na propriedade (ngSubmit)="onSubmit()) */
  onSubmit(){
    //console.log(this.formulario.value)

    /* esse método post simula o envio das informações do formulário para um servidor (backend), nesse caso eu usei um servidor de exemplo (o httpbin) - olhar a resposta pela aba "network" do F12 */
    this.http.post('https://httpbin.org/post', 
                    JSON.stringify(this.formulario.value))
    .subscribe(dados => {
      console.log(dados);
    })
  }


}
