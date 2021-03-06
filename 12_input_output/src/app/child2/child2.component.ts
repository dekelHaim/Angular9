import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {

  @Input() myName:string;
  @Input() brotherAge:number;
  @Output() ageEmitter:EventEmitter<number>=new EventEmitter<number>();
  myAge:number=8;

  constructor() { }

  incAge():void{
    this.myAge++;
    this.ageEmitter.emit(this.myAge);

  }
  ngOnInit(): void {
  }

}
