import { Component, OnInit,Output } from '@angular/core';
import { CdkDragDrop, CdkDragEnter, CdkDragExit} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent implements OnInit {

  res: number;
  stdis: boolean = true;
  constructor() { }

  ngOnInit() {
  }

  @Output('cdkDropDropped')
  dropped(event: CdkDragDrop<string[]>) {
    this.stdis = (this.stdis) ? false : true;
    console.log(this.stdis)
  }

  add(x: number, y: number) {
    this.res = x + y;
  }
  subtract(x: number, y: number) {
    this.res = x - y;
  }
  foo(x: number, y: number, z:number) { 
    this.res = x + y + z;
  }
  doSomethingComplicated(x: number) {
    this.res = x * x;
  } 

  entered(event: CdkDragEnter<string[]>) {
    console.log('Entered', event.item.data);
  }
  /*
  entered(event: CdkDragEnter<string[]>) {
    this.stdis = (this.stdis) ? false : true;
    console.log(this.stdis)
  }
  */
}
