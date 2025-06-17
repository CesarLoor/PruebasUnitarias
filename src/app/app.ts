import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Calculator } from './calculator';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  imports: [RouterOutlet],
})
export class App implements OnInit {
  title = 'PruebasUnitarias';
  ngOnInit(): void {
  }
}


