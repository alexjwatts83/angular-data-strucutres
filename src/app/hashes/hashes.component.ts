import { Component, OnInit } from '@angular/core';
import { HasTable } from './hashes.model';

@Component({
  selector: 'app-hashes',
  templateUrl: './hashes.component.html',
  styleUrls: ['./hashes.component.scss']
})
export class HashesComponent implements OnInit {
  myHash: HasTable;
  prevHashData: any[];
  prevHashKeys: any[];
  prevHashSize: number;
  inputValue: string;
  inputKey: string;
  message: string;
  inputSize: number;
  inputGetValue: string;

  constructor() { 
    this.inputSize = 2;
    this.myHash = new HasTable(this.inputSize);
    this.inputValue = '10000';
    this.inputKey = 'Grapes';
  }

  ngOnInit(): void {
  }

  initHashTable(): void {
    this.copyCurrentToPrevious();
    this.myHash = new HasTable(this.inputSize);
  }

  copyCurrentToPrevious() {
    this.prevHashSize = this.myHash.size;
    this.prevHashKeys = JSON.parse(JSON.stringify(this.myHash.keys()));
    this.prevHashData = JSON.parse(JSON.stringify(this.myHash.data));
  }

  set(): void {
    this.copyCurrentToPrevious();
    
    this.myHash.set(this.inputKey, this.inputValue);
    this.message = `Setting Key of [${this.inputKey}] with value of '${this.inputValue}'`;
  }

  get(): void {
    const value = this.myHash.get(this.inputGetValue);
    this.message = `Get Key of [${this.inputGetValue}] = '${value}'`;
  }

  isInputValid(): boolean {
    return this.inputKey !== undefined && this.inputValue !== undefined;
  }

  logToConsole(item): any {
    console.log(item)
    return item;
  }
}
