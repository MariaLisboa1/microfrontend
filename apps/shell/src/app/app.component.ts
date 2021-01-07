import { Component } from '@angular/core';
import { ShellService } from './shell/shell.service';

@Component({
  selector: 'shell',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'shell';

  constructor(private shellService: ShellService) {}

  ngOnInit() {

    this.shellService.init({
      initialRoute: '/',
      outletId: 'content',
      preload: true,
      clients: {
        "mf-abrir-conta": {
          loaded: false,
          src: 'assets/micro-frontends/mf-abrir-conta/main.js',
          element: 'mf-abrir-conta',
          route: '/mf-abrir-conta'
        },
        "poc": {
          loaded: false,
          src: 'assets/micro-frontends/poc/main.js',
          element: 'poc',
          route: '/poc'
        },
      }});

  }
}
