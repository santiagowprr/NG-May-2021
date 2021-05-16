import { Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  @Output () switchCount: number = 0

  constructor() { }

  onRiseCount(){
    this.switchCount+=1
    console.log(this.switchCount)
  }
}
