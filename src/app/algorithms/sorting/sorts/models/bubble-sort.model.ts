import { SortAlgorithm } from './sorting.model';

export class BubbleSort<T> implements SortAlgorithm<T> {
  sort(items: T[]): T[]{
    if (items.length <= 1) {
      return items;
    }

    let sorted = [...items];
    let index = 0;
    let maxIndex = sorted.length;
    let iterationCount = 0;
    let maxLoop = maxIndex -1;
    while(iterationCount < maxIndex) {
      let isSorted = true;
      while(index < maxLoop) {
        let left = sorted[index];
        let right = sorted[index+1];
        if (left > right) {
          sorted[index] = right;
          sorted[index+1] = left;
          isSorted = false;
        }
        index++;
      }
      if(isSorted) {
        console.log(`exited early at ${iterationCount} instead of ${maxIndex}`);
        break;
      }
      index = 0;
      iterationCount++;
      maxLoop--;
    }

    return sorted;
  }
}