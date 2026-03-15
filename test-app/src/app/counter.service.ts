import { Injectable, signal } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class CounterService {

    private counterSignal = signal(0);

    readonly counter = this.counterSignal.asReadonly();

    updateCounter(value: number) {
        this.counterSignal.set(value);
    }
}