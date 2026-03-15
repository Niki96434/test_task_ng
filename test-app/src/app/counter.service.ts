import { Injectable, signal } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class CounterService {

    private counterSignal = signal(0);
    readonly counter = this.counterSignal.asReadonly();

    private counterValueSignal = signal(0);
    readonly counterValue = this.counterValueSignal.asReadonly();

    updateCounter(counterCheckbox: number, valueCheckbox: number) {
        this.counterSignal.set(counterCheckbox);
        this.counterValueSignal.set(valueCheckbox);
    }
}