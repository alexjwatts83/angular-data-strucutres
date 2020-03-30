import { SortAlgorithm } from './sorting.model';

export class InsertionSort<T> implements SortAlgorithm<T> {
  doLog: boolean = false;
  sort(items: T[]): T[]{
    if (items.length <= 1) {
      return items;
    }

    let sorted = [...items];
    let n = sorted.length;

    for(let i = 1; i < n; i++) {
      let min = sorted[i];
      let j = i - 1;
      if (this.doLog) {
        console.log(`i = ${i}; j = ${j}; min = ${min}`);
        console.log(JSON.stringify(sorted));  
      }
      
      while(j >= 0 && sorted[j] > min){
        if (this.doLog) {
          console.log(` swapping '${sorted[j + 1]}' for '${sorted[j]}', where j=${j}`);
        }
        
        sorted[j + 1] =  sorted[j];
        j--;

        if (this.doLog) {
          console.log(' ' + sorted);
        }
        
      }
      
      sorted[j + 1] = min;

      if (this.doLog) {
        console.log(`sorted[${j + 1}] = ${min}`);
        console.log(`=================`);
      }
    }

    return sorted;
  }
}