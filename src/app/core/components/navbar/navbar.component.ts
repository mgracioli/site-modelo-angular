import { Component, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    //document.addEventListener("DOMContentLoaded", this.scrollBar)
    window.addEventListener('scroll', this.scrollBar)
  }

  scrollBar() {
    const progressbarinner = document.querySelector<HTMLElement>('.progress-bar-inner')

    //window.addEventListener('scroll', function () {
      //docElement e bodyElement fazem a mesma coisa, usa-se os dois por questões de compatibilidade entre navegadores
      let docElement = document.documentElement
      let bodyElement = document.body

      let st = docElement.scrollTop || bodyElement.scrollTop
      let sh = docElement.scrollHeight || bodyElement.scrollHeight

      let percent = st / (sh - docElement.clientHeight) * 100  //sh é o tamanho da pagina toda e clientHeight é o tamanho da porção da tela visivel no momento

      progressbarinner!.style.width = percent + '%'
    //})
  }

}
