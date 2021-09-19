import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scroll-top-button',
  templateUrl: './scroll-top-button.component.html',
  styleUrls: ['./scroll-top-button.component.scss']
})
export class ScrollTopButtonComponent implements OnInit {

  

  constructor() { }

  ngOnInit(): void {
    window.addEventListener('scroll', this.showScrollTopButton)
  }

  //mostra o botão de scroll top só quando já tiver feito scroll na página
  showScrollTopButton(){
    const btn = document.querySelector<HTMLElement>('.btn-container')

    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
      btn!.style.display = "block";
    } else {
      btn!.style.display = "none";
    }
  }

  scrollToTop(){
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
  }

}
