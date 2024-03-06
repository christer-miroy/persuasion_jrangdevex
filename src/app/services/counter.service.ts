import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  private count: number = 0;

  constructor() { }

  getCount(): number {
    return this.count;
  }

  increment(): number {
    return this.count++;
  }

  decrement(): number {
    if (this.count > 0) {
      return this.count--;
    } else {
      return this.count;
    }
  }
}
