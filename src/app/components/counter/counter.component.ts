import { Component } from '@angular/core';
import { CounterService } from '../../services/counter.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  constructor(private counterService: CounterService) {}

  getCount(): number {
    return this.counterService.getCount();
  }

  increment(): void {
    this.counterService.increment();
  }

  decrement(): void {
    this.counterService.decrement();
  }

  isDecrementDisabled(): boolean {
    return this.getCount() === 0;
  }
}
