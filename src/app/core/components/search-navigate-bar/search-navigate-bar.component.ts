import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-navigate-bar',
  templateUrl: './search-navigate-bar.component.html',
  styleUrls: ['./search-navigate-bar.component.scss']
})
export class SearchNavigateBarComponent implements OnInit {

  shoppingCartQuantity: string = '10'
  
  constructor() { }

  ngOnInit(): void {
  }

}
