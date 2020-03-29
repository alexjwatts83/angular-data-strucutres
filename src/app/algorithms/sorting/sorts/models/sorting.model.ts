export interface SortAlgorithm<T> {
  sort(items: T[]): T[];
}