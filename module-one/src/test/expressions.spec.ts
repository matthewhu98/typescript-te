import { Expressions } from '../main/expressions';

const expression = new Expressions();

describe('excercises', () => {
  // sleepIn(false, false) → true
  // sleepIn(true, false) → false
  // sleepIn(false, true) → true
  describe("sleepIn", () => {
    it('should return true if it is not a weekend or it is a vacation', () => {
      expect(expression.sleepIn(false, false)).toEqual(true);
    });

    it('should return false if it is weekday but it is not a vacation', () => {
      expect(expression.sleepIn(true, false)).toEqual(false);
    });

    it('should return true if it is not weekday and it is a vacation', () => {
      expect(expression.sleepIn(false, true)).toEqual(true);
    });
  });

  describe("Monkey trouble", () => {
    it('should return true if both monkeys are smiling', () => {
      expect(expression.monkeyTrouble(true, true)).toEqual(true);
    });

    it('should return true if both monkeys are NOT smiling', () => {
      expect(expression.monkeyTrouble(false, false)).toEqual(true);
    });

    it('should return false if one monkey is smiling and the other is not', () => {
      expect(expression.monkeyTrouble(true, false)).toEqual(false);
    });
  });

  describe('sumDouble', () => {
    it('should return the sum of two non equal numbers', () => {
      expect(expression.sumDouble(2, 9)).toEqual(11);
    });

    it('should return the double of the sum if the two numbers are equal', () => {
      expect(expression.sumDouble(9, 9)).toEqual(36);
    });

    it('should return 0 if given two zero number', () => {
      expect(expression.sumDouble(0, 0)).toEqual(0);
    })
  });

  describe('diff21', () => {
    it('should return the absolute difference of 21 and n if n is less than 21', () => {
      expect(expression.diff21(2)).toEqual(19);
    });

    it('should return the difference of 21 and n if n is more than 21', () => {
      expect(expression.diff21(-1)).toEqual(22);
    });  
    
    it('should return the difference of 21 and n if n is more than 21', () => {
      expect(expression.diff21(50)).toEqual(58);
    });
  })
})