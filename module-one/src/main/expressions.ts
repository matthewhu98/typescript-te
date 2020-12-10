
export class Expressions {

  //  1. The parameter weekday is true if it is a weekday, and the parameter vacation is true if we are on
  //  vacation. We sleep in if it is not a weekday or we're on vacation. Return true if we sleep in.
  //  sleepIn(false, false) → true
  //  sleepIn(true, false) → false
  //  sleepIn(false, true) → true

  sleepIn(weekday: boolean, vacation: boolean): boolean {

    if (!weekday || vacation) {
      return true;
    }
    return false;
  };

  // 	2. We have two monkeys, a and b, and the parameters aSmile and bSmile indicate if each is smiling.
	//  We are in trouble if they are both smiling or if neither of them is smiling. Return true if we
	//  are in trouble.
	//  monkeyTrouble(true, true) → true
	//  monkeyTrouble(false, false) → true
	//  monkeyTrouble(true, false) → false

  monkeyTrouble(aSmile: boolean, bSmile: boolean): boolean {
    if ((aSmile && bSmile) || (!aSmile && !bSmile)) {
      return true;
    }
    return false;
  }

  //  3. Given two int values, return their sum.Unless the two values are the same, then return double their sum.
  //  sumDouble(1, 2) → 3
  //  sumDouble(3, 2) → 5
  //  sumDouble(2, 2) → 8

  sumDouble(a: number, b: number): number {
    if (a == b) {
      return (a + b) * 2;
    }
    return a + b;
  }

  // 	 4. Given an int n, return the absolute difference between n and 21, except return double the absolute
  //   difference if n is over 21.
  //   diff21(19) → 2
  //   diff21(10) → 11
  //   diff21(21) → 0
  //   diff21(22) → 2
  //   diff21(-10) → 31
  diff21(n: number): number {
    let absoluteDifference = 21 - n;
    if (n <= 21 && n >= 0) {
      absoluteDifference = 21 - n;
    } else if (n > 21) {
      absoluteDifference = (-1 * (21 - n)) * 2;
    }
    return absoluteDifference;
  }

}
 
