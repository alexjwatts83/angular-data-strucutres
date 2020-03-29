// Write two functions that finds the factorial of any number. One should use recursive, the other should just use a for loop

export class Factorial {
  findFactorialRecursive(number: number): number {
    if (number === 1){
      return number;
    }
    return number * this.findFactorialRecursive(number - 1);
  }
  
  findFactorialIterative(number: number): number {
    let answer = number;
    for(let i = number - 1; i > 0; i--) {
      answer = answer * i;
    }
    return answer;
  }
}
