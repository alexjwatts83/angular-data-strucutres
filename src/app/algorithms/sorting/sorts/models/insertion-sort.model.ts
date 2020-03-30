import { SortAlgorithm } from './sorting.model';

export class InsertionSort<T> implements SortAlgorithm<T> {
  sort(items: T[]): T[]{
    if (items.length <= 1) {
      return items;
    }

    let sorted = [...items];
    let itemsLength = sorted.length;

    return sorted;
  }
}