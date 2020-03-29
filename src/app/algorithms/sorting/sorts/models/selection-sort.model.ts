import { SortAlgorithm } from './sorting.model';

export class SelectionSort<T> implements SortAlgorithm<T> {
  sort(items: T[]): T[]{
    if (items.length <= 1) {
      return items;
    }

    let sorted = [...items];

    return sorted;
  }
}