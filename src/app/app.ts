import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Calculator } from './calculator';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'PruebasUnitarias';

  constructor(private calculator: Calculator) {}

  ngOnInit() {
    const result = this.calculator.multiply(3, 4);
    console.log(result === 12); // true
    console.log(result !== 9); // false

    const result2 = this.calculator.divide(6, 2);
    console.log(result2 === 3); // true
    console.log(result2 !== 43); // false

    const result3 = this.calculator.divide(1, 0);
    console.log(result3 === 0); // true
    console.log(result3 !== 9); // false
  }

    
}




