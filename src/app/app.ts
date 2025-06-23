import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Calculator } from './calculator';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  title = 'PruebasUnitarias';
  
  constructor() {}
  
  ngOnInit(): void {
  }
}


