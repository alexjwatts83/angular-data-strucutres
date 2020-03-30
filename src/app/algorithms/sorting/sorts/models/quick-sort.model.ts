import { SortAlgorithm } from './sorting.model';

export class QuickSort<T> implements SortAlgorithm<T> {

  doLog: boolean = false;

  sort(items: T[]): T[] {
    if (items.length <= 1) {
      return items;
    }

    return items;
  }
}