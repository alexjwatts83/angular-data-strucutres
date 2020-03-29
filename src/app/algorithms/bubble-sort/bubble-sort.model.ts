export class BubbleSort<T> {
  sort(items: T[]): T[]{
    if (items.length <= 1) {
      return items;
    }

    let sorted = [...items];
    let index = 0;
    let maxIndex = sorted.length - 1;
    let iterationCount = 0;
    let maxLoop = maxIndex;

    while(iterationCount < maxIndex){

      while(index < maxLoop) {
        let n1 = sorted[index];
        let n2 = sorted[index+1];
        if (n1 > n2) {
          sorted[index] = n2;
          sorted[index+1] = n1;
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