import { SortAlgorithm } from './sorting.model';

export class SelectionSort<T> implements SortAlgorithm<T> {
  sort(items: T[]): T[]{
    if (items.length <= 1) {
      return items;
    }

    let sorted = [...items];
    let itemsLength = sorted.length;
    let index = 0;
    let isSorted = false;
    while(!isSorted) {
      isSorted = true;
      while(index < itemsLength -1){
        let firstItem = sorted[index];
        let secondtItem = sorted[index + 1];
        // console.log(`sorted[${innerLoop}]:${firstItem};sorted[${innerLoop+1}]:${secondtItem}`);
        if (firstItem > secondtItem) {
          console.log(` swap ${firstItem} for ${secondtItem} at index ${index}`);
          sorted[index] = secondtItem;
          sorted[index + 1] = firstItem;
          isSorted = false;
        }
        index++;
      }
      index = 0
      console.log(isSorted, JSON.stringify(sorted));
    }

    return sorted;
  }
}