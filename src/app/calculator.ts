
export class Calculator {
  multiply(numA: number, numB: number): number {
    return numA * numB;
  }

  divide(numA: number, numB: number): number {
    if (numB === 0 || numB === undefined) {
      return 0;
    }
    return numA / numB;
  }
}
