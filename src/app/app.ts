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
  protected title = 'PruebasUnitarias';

  ngOnInit(): void {
  let calculator = new Calculator();
  let result = calculator.multiply(3, 4);
  console.log(result === 12); // true
  console.log(result !== 9); // false


  let result2 = calculator.divide(6, 2);
  console.log(result2 === 3); // true
  console.log(result2 !== 43); // false
  }
}
