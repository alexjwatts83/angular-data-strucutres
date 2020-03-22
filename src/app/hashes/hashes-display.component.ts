import { Component, OnInit, Input } from '@angular/core';
import { HasTable } from './hashes.model';

@Component({
  selector: 'app-hashes-display',
  templateUrl: './hashes-display.component.html',
  styleUrls: ['./hashes-display.component.scss']
})
export class HashesDisplayComponent implements OnInit {
  @Input() hashTableKeys: any[];
  @Input() hashTableData: any[];
  @Input() hashTableSize: number;
  @Input() alertType: string;
  constructor() { }

  ngOnInit(): void { }
}
