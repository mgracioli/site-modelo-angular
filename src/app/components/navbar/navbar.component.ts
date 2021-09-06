import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit {

  showMenu: boolean = false

  constructor() { }

  ngOnInit(): void {
  }

  /* método para mostrar e esconder o menu lateral (hamburguer menu) */
  showSideMenu(){
    this.showMenu = !this.showMenu
  }

  /* Configurações do icone do hamburguer */

}
