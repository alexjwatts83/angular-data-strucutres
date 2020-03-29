export class Fibonacci {
  // Given a number N return the index value of the Fibonacci sequence, where the sequence is:

  // 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...
  // the pattern of the sequence is that each value is the sum of the 2 previous values, that means that for N=5 → 2+3

  //For example: fibonacciRecursive(6) should return 8

  fibonacciIterative(n: number): number{
    if (n < 2) {
      console.log(`returing n = ${n}`);
      return n;
    }

    let nMinusOne = 1
    let nMinusTwo = 0;
    console.log("==========================");
    console.log(`n = ${n}`);
    console.log("==========================");
    for(let i = 3; i <= n; i++) {
      console.log(`i = ${i}`);
      console.log(`nMinusOne = ${nMinusOne}`);
      console.log(`nMinusTwo = ${nMinusTwo}`);
      let m1 = nMinusOne;
      let m2 = nMinusOne + nMinusTwo;
      nMinusTwo = m1;
      nMinusOne = m2;
    }
    console.log("==========================");
    console.log(`n = ${n}`);
    console.log("==========================");
    //code here;
    return nMinusOne + nMinusTwo;
  }

  fibonacciRecursive(n: number): number{
    let answer = 1;
    //code here;
    return answer
  }
}