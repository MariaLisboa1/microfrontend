import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  // selector: 'microfrontend-page-widget',
  templateUrl: './page-widget.component.html',
  styleUrls: ['./page-widget.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class PageWidgetComponent implements OnInit {
  control = new FormControl();
  value$: Observable<string>;

  ngOnInit(): void {
    this.control.valueChanges.subscribe(x => console.debug(x));
    this.value$ = this.control.valueChanges;
  }

  clickMe(): void {
    console.debug('ouch!');
  }

}
