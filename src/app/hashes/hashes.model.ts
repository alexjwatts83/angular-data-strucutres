export class HasTable{
  data: any;
  size: number;

  constructor(size: number) {
    this.size = size;
    this.data = new Array(size);
    console.log(this.data);
  }

  _hash(key: string) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96
      total = (total * WEIRD_PRIME + value) % this.size;
    }
    return total;
  }

  set(key: string, value: any): void{
    var hashedKey = this._hash(key);
    
    if(this.data[hashedKey]){
      for(let i = 0; i < this.data[hashedKey].length; i++) {
        var kp = this.data[hashedKey][i];
        if(kp[0] === key){
          this.data[hashedKey][i][1] = value;
          return;
        }
      }
      this.data[hashedKey].push([key,value]);
    } else {
      this.data[hashedKey] = [[key, value]];
    }
  }

  get(key: string): any {
    var hashedKey = this._hash(key);
    if(this.data[hashedKey]){
      var kps = this.data[hashedKey];
      console.log({key: key, hashedKey: hashedKey, kps: kps});
      for(let i = 0; i < kps.length; i++) {
        var kp = kps[i];
        if(kp[0] === key){
          return kp[1];
        }
      }
    } else {
      return 'Error';
    }
  }

  keys(): any[] {
    const keysArray = [];
    for(let i = 0; i < this.data.length; i++) {
      if (this.data[i]){
        for(let j = 0; j < this.data[i].length; j++) {
          keysArray.push(this.data[i][j][0]);
        }
      }
    }
    return keysArray;
  }
}