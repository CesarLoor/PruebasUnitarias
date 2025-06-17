import { TestBed } from '@angular/core/testing';
import { Calculator } from './calculator';

describe('Test for calculator', () => {
  describe('Test for Multiply', () => {
    it('should create an instance', () => {
      //arrange
      let calculator= new Calculator();
      //act
      let result = calculator.multiply(2, 2);
      //assert
      expect(result).toBe(4);
    });
  })
})

describe('Test for divide', () => {
  it('should create an instance', () => {
    //arrange
    let calculator= new Calculator();
    //act & assert
    expect(calculator.divide(6, 2)).toBe(3);
    expect(calculator.divide(5, 2)).toBe(2.5);
  });
})

describe('Test for divide to zero', () => {
  it('should create an instance', () => {
    //arrange
    let calculator= new Calculator();
    //act & assert
    expect(calculator.divide(6, 0)).toBe(0);
    expect(calculator.divide(5, 0)).toBe(0);
  });
})

describe ('Test for Calculator', () => {
  describe('Matcher jasmin', () =>{
    it('Test of matchers', () => {
      expect(1 + 2 === 3).toBeTruthy();
      expect(1 + 1 == 3).toBeFalsy();
      expect(5).toBeLessThan(10);
      expect(25).toBeGreaterThan(10);
      
  }); 
});
});


