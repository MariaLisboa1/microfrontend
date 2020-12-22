import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-microfrontend-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.scss']
})
export class ProdutoComponent implements OnInit {
  constructor() { }

  ngOnInit() {
    console.log("LIB COMPONENT");

  }

}
