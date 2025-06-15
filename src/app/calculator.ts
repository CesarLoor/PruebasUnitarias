import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Calculator {
  multiply(numA: number, numB: number): number {
    return numA * numB;
  }
  divide(numA: number, numB: number): number {
    if (numB === 0) {
      return 0;
    }
    return numA / numB;
  }

}


