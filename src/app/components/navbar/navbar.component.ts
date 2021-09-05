import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit {

  mode: string = "day"
  showMenu: boolean = false

  constructor() { }

  ngOnInit(): void {
  }

  /*Método para mudar para modo noturno*/
  changeMode(){

  }

  /* método para mostrar e esconder o menu lateral (hamburguer menu) */
  showSideMenu(){
    this.showMenu = !this.showMenu
  }

}
