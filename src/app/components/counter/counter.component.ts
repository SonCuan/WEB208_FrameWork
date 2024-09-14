import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  count : number = 0;
  tang(){
    this.count++;
  }
  giam(){
    this.count--;
  }
  tang2(value : number){
    this.count += value;
  }
  giam2(value : number) { 
    this.count -= value;
  }
}
