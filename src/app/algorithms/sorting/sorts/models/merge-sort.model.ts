
import { SortAlgorithm } from './sorting.model';

export class MergeSort<T> implements SortAlgorithm<T> {

  doLog: boolean = false;

  sort(items: T[]): T[] {
    if (items.length <= 1) {
      return items;
    }

    const left = [];
    const right = [];
    const n = items.length;
    const leftLimit =  Math.floor(n / 2);

    for (let i = 0; i < n; i++) {
      if (i < leftLimit) {
        left.push(items[i]);
      } else {
        right.push(items[i]);
      }
    }

    return this.merge(this.sort(left), this.sort(right));
  }

  merge(left: T[], right: T[]): T[] {
    if (this.doLog) {
      console.log('left', left);
      console.log('right', right);
    }
    
    const result = [];
    let leftIndex = 0;
    let rightIndex = 0;
    while (leftIndex < left.length &&
      rightIndex < right.length) {
      if (left[leftIndex] < right[rightIndex]) {
        result.push(left[leftIndex]);
        if (this.doLog) {
          console.log('adding from left', left[leftIndex]);
        }
        leftIndex++;
      } else {
        result.push(right[rightIndex]);

        if (this.doLog) {
          console.log('adding from right', right[rightIndex]);
        }
        rightIndex++
      }
    }
    if (this.doLog) {
      console.log('Finished Comparison, now add left');
    }
    while (leftIndex < left.length) {
      result.push(left[leftIndex]);
      if (this.doLog) {
        console.log('adding from left', left[leftIndex]);
      }
      leftIndex++;
    }
    if (this.doLog) {
      console.log('Finished Comparison, now add right');
    }

    while (rightIndex < right.length) {
      result.push(right[rightIndex]);
      if (this.doLog) {
        console.log('adding from right', right[rightIndex]);
      }
      rightIndex++;
    }


    if (this.doLog) {
      console.log('result', result);
      console.log('============================');
    }
    return result;
  }
  merge3(left: T[], right: T[]): T[] {
    console.log('============================');
    console.log('left: ' + left);
    console.log('right: ' + right);
    const sorted = [];

    let i = 0;
    let j = 0;
    let lenLeft = left.length;
    let lenRight = right.length;
    let first: T = left[i];
    let second: T = right[j];
    let breaker = 0;
    console.log(`lenLeft: ${lenLeft}; lenRight: ${lenRight}`);
    while (second !== undefined || breaker >= 20) {
      if (first < second) {
        console.log(`pusing first, ${first}, to sorted`);
        sorted.push(first);
        i++;
      } else {
        console.log(`pusing second, ${second}, to sorted`);
        sorted.push(second);
        j++;
      }

      first = left[i];
      console.log(`setting first = left[${i}];`);
      if (first === undefined) {
        first = right[j];
        console.log(`resetting first = right[${j}];`);
        j++;
      }

      second = right[j];
      console.log(`setting second = right[${j}];`);
      if (second === undefined) {
        second = left[i];
        i++;
        console.log(`resetting second = left[${i}];`);
      }
      console.log(`first = ${first}; second = ${second}`);
      console.log(`i = ${i}; j = ${j}`);
      breaker++;
    }
    console.log(`pusing ${first} to sorted`);
    sorted.push(first);
    console.log('============================');
    console.log('sorted: ' + sorted);
    return sorted;
  }

  merge2(left: T[], right: T[]): T[] {
    console.log('============================');
    console.log('left: ' + left);
    console.log('right: ' + right);
    const sorted = [];

    let i = 0;
    let j = 0;
    let lenLeft = left.length;
    let lenRight = right.length;
    console.log(`lenLeft: ${lenLeft}; lenRight: ${lenRight}`);
    while ((i < lenLeft) || (j < lenRight)) {
      let first: T;
      let second: T;
      if (i >= lenLeft) {
        console.log(`i (${i}) >= lenLeft (${lenLeft})`);
        first = right[j];
        j++;
        second = right[j];
      } else if (j >= lenRight) {
        console.log(`j (${j}) >= lenRight (${lenRight})`);
        first = left[i];
        i++;
        second = left[i];
      } else {
        first = left[i];
        second = right[j];
      }

      console.log(`left[${i}]: ${first}; right[${j}]: ${second}`);
      if (second === undefined) {
        console.log('breaking early because second is null');
        sorted.push(first);
        break;
      }
      if (first < second) {
        console.log(`Adding ${first} to list`);
        if (first) {
          sorted.push(first);
        }

        i++;
      } else {
        console.log(`Adding ${second} to list`);
        if (second) {
          sorted.push(second);
        }
        j++;
      }
      console.log(`i = ${i}; j = ${j}`);
    }
    console.log('============================');
    console.log('sorted: ' + sorted);
    return sorted;
  }
}