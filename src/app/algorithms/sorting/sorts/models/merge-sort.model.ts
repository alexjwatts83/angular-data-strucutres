import { SortAlgorithm } from './sorting.model';

export class MergeSort<T> implements SortAlgorithm<T> {

  doLog: boolean = false;

  sort(items: T[]): T[] {
    if (items.length <= 1) {
      return items;
    }

    return items;
  }

  merge(left: T[], right: []): T[] {
    return [];
  }
}