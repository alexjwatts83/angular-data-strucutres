export class BubbleSort<T> {
  sort(items: T[]): T[]{
    if (items.length <= 1) {
      return items;
    }

    let sorted = [...items];
    let index = 0;
    let maxIndex = sorted.length;
    let iterationCount = 0;
    let maxLoop = maxIndex;

    while(iterationCount < maxIndex){

      while(index < maxLoop) {
        let left = sorted[index];
        let right = sorted[index+1];
        if (left > right) {
          sorted[index] = right;
          sorted[index+1] = left;
        }
        index++;
      }
      index = 0;
      iterationCount++;
      maxLoop--;
    }

    return sorted;
  }
}