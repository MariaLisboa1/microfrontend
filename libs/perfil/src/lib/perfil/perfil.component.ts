import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProdLazyLoadingService } from '../prod-lazy-loading.service';

@Component({
  selector: 'microfrontend-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {

  constructor(private prodLazyService: ProdLazyLoadingService, private router: Router) { }

  ngOnInit(): void {
  }


  addLazy(): void {
    this.prodLazyService.load().then(_ => {
      this.router.navigate(["/produto"])
    });

  }

}
