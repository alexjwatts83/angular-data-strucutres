import { SortAlgorithm } from './sorting.model';

/*
https://www.tutorialspoint.com/chash-program-to-perform-quick-sort-using-recursion
*/
export class QuickSort<T> implements SortAlgorithm<T> {

  doLog: boolean = false;

  sort(items: T[]): T[] {
    if (items.length <= 1) {
      return items;
    }

    this.quickSort(items, 0, items.length - 1);

    return items;
  }

  quickSort(items: T[], left: number, right: number){
    if (left < right) {
      const pivot = this.parittion(items, left, right);
      if (pivot > 1) {
        this.quickSort(items, left, pivot - 1);
      }
      if (pivot + 1 < right) {
        this.quickSort(items, pivot + 1, right);
      }
    }
  }

  parittion(items: T[], left: number, right: number) {
    const pivot = items[left];

    while(true) {
      while(items[left] < pivot) {
        left++;
      }

      while(items[right] > pivot) {
        right--;
      }

      if(left < right) {
        const placeHolder = items[right];
        items[right] = items[left];
        items[left] = placeHolder;
      } else {
        return right;
      }
    }
  }
}