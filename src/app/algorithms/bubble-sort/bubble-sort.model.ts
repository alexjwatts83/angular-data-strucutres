export class BubbleSort<T> {
  sort(items: T[]): T[]{
    if (items.length <= 1) {
      return items;
    }

    let sorted = [...items];
    let index = 0;
    let maxIndex = sorted.length - 1;
    let iterationCount = 0;
    let maxLoop = sorted.length - 1;
    while(iterationCount < maxIndex){
      console.log('===============================');
      console.log(`iterationCount: ${iterationCount}`);
      console.log(`maxLoop: ${maxLoop}`);
      while(index < maxLoop) {
        // console.log(`  index: ${index};maxLoop: ${maxLoop}`);
        console.log(`  index: ${index};`);
        let n1 = sorted[index];
        let n2 = sorted[index+1];
        console.log(`  sorted[${index}]: ${n1};sorted[${index+1}]: ${n2}`);
        if (n1 > n2) {
          sorted[index] = n2;
          sorted[index+1] = n1;
          console.log('    swapping');
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