export class BubbleSort<T> {
  sort(items: T[]): T[]{
    if (items.length <= 1) {
      return items;
    }

    let sorted = [...items];
    let index = 0;
    let maxIndex = items.length - 1;
    let iterationCount = 0;
    let maxLoop = items.length - 1;
    while(iterationCount < maxIndex){
      console.log('===============================');
      console.log(`iterationCount: ${iterationCount}`);
      while(index < maxLoop) {
        console.log(`index: ${index};maxLoop: ${maxLoop}`);
        let n1 = items[index];
        let n2 = items[index+1];
        console.log(`n1: ${n1};n2: ${n2}`);
        if (n2 > n1) {
          items[index] = n2;
          items[index+1] = n1;
          console.log('swapping');
        }
        index++;
      }
      index = 0;
      iterationCount++;
      maxLoop--;
      console.log('===============================');
    }

    return sorted;
  }
}