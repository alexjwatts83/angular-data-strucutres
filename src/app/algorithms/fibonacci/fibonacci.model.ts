export class Fibonacci {
  doLog = false;
  cache: any = {};
  // Given a number N return the index value of the Fibonacci sequence, where the sequence is:

  // 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...
  // the pattern of the sequence is that each value is the sum of the 2 previous values, that means that for N=5 → 2+3

  //For example: fibonacciRecursive(6) should return 8

  iterativeCount: number;
  recursiveCount: number;
  recursiveCachedCount: number;

  resetCounts(): void {
    // console.log(this.cache);
    this.iterativeCount = 0;
    this.recursiveCount = 0;
    this.recursiveCachedCount = 0;
    this.cache = {};
  }

  fibonacciIterative(n: number): number{
    this.iterativeCount++;
    if (n < 2) {
      return n;
    }

    let nMinusOne = 1;
    let nMinusTwo = 0;

    for(let i = 2; i < n; i++) {
      this.iterativeCount++;
      let m1 = nMinusOne;
      let m2 = nMinusOne + nMinusTwo;
      nMinusTwo = m1;
      nMinusOne = m2;
    }

    return nMinusOne + nMinusTwo;
  }

  fibonacciRecursive(n: number): number{
    this.recursiveCount++;
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

  fibonacciRecursiveCached(n: number): number{
    if (n in this.cache) {
      this.recursiveCachedCount++;
      return this.cache[n];
    }
    
    if (n < 2) {
      this.cache[n] = n;
      this.recursiveCachedCount++;
      return n;
    }
    
    let nMinusOne = this.fibonacciRecursiveCached(n - 1);
    let nMinusTwo = this.fibonacciRecursiveCached(n - 2);

    if (this.doLog) {
      console.log(`n=${n};nMinusOne:${nMinusOne};nMinusTwo:${nMinusTwo};answer:${nMinusOne+nMinusTwo}`)
    }


    this.cache[n] = nMinusOne + nMinusTwo;
    //code here;
    this.recursiveCachedCount++;
    return nMinusOne + nMinusTwo;
  }
}