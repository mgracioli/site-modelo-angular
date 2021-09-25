import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.addEventListener('scroll', this.scrollBar)
  }

  scrollBar() {
    const progressbarinner = document.querySelector<HTMLElement>('.progress-bar-inner')
      if(progressbarinner){ //esse if é para evitar erros naspáginas que não têm a navbar
        let docElement = document.documentElement
        let bodyElement = document.body

        let st = docElement.scrollTop || bodyElement.scrollTop
        let sh = docElement.scrollHeight || bodyElement.scrollHeight

        let percent = st / (sh - docElement.clientHeight) * 100  //sh é o tamanho da pagina toda e clientHeight é o tamanho da porção da tela visivel no momento

        progressbarinner!.style.width = percent + '%'
      } 
  }

}
