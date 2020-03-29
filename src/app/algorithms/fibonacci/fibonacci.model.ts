export class Fibonacci {
  // Given a number N return the index value of the Fibonacci sequence, where the sequence is:

  // 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...
  // the pattern of the sequence is that each value is the sum of the 2 previous values, that means that for N=5 → 2+3

  //For example: fibonacciRecursive(6) should return 8

  fibonacciIterative(n: number): number{
    if (n < 2) {
      return n;
    }
    let answer = 0;
    let previous = 2;
    for(let i = 2; i <= n; i++) {
      answer = previous + i-1;
    }
    //code here;
    return answer
  }

  fibonacciRecursive(n: number): number{
    let answer = 1;
    //code here;
    return answer
  }
}