import { SortAlgorithm } from './sorting.model';

export class SelectionSort<T> implements SortAlgorithm<T> {
  sort(items: T[]): T[]{
    if (items.length <= 1) {
      return items;
    }

    let sorted = [...items];
    let itemsLength = sorted.length;

    for(let i = 0; i < itemsLength; i++) {
      let lowestValueIndex = i;
      let lowestValue = sorted[i];
      for(let j = i + 1; j < itemsLength; j++) {
        if (sorted[j] < sorted[lowestValueIndex]){
          lowestValueIndex = j;
        }
      }
      sorted[i] =  sorted[lowestValueIndex];
      sorted[lowestValueIndex] = lowestValue;
    }

    return sorted;
  }
}