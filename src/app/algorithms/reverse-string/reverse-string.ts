export class ReverString {
  reverseIterative(str: string): string {
    let reversed = '';
    for(let i = str.length -1; i >= 0; i--){
      reversed = reversed + str[i]
    }
    return reversed;
  }

  reverseRecursive(str: string): string {
    return '';
  }
}