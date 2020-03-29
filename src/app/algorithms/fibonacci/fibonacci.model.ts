export class Fibonacci {
  doLog = false;
  // Given a number N return the index value of the Fibonacci sequence, where the sequence is:

  // 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...
  // the pattern of the sequence is that each value is the sum of the 2 previous values, that means that for N=5 → 2+3

  //For example: fibonacciRecursive(6) should return 8

  fibonacciIterative(n: number): number{
    if (n < 2) {
      return n;
    }

    let nMinusOne = 1;
    let nMinusTwo = 0;

    for(let i = 2; i < n; i++) {
      let m1 = nMinusOne;
      let m2 = nMinusOne + nMinusTwo;
      nMinusTwo = m1;
      nMinusOne = m2;
    }

    return nMinusOne + nMinusTwo;
  }

  fibonacciRecursive(n: number): number{
    if (n < 2) {
      return n;
    }
    
    let nMinusOne = this.fibonacciRecursive(n - 1);
    let nMinusTwo = this.fibonacciRecursive(n - 2);

    if (this.doLog) {
      console.log(`n=${n};nMinusOne:${nMinusOne};nMinusTwo:${nMinusTwo};answer:${nMinusOne+nMinusTwo}`)
    }
    
    //code here;
    return nMinusOne + nMinusTwo;
  }
}