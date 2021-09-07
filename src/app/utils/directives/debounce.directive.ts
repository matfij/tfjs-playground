import { Directive, Input, Output, EventEmitter, OnInit, OnDestroy, HostListener } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { debounceTime, throttleTime } from 'rxjs/operators';

@Directive({
  selector: '[appDebounce]'
})
export class DebounceDirective implements OnInit, OnDestroy {
  @Input() debounceTime: number = 250;
  @Output() debounceClick = new EventEmitter();

  private _clicks = new Subject();
  private _clickSubscription: Subscription;

  constructor() {}

  ngOnInit() {
    this._clickSubscription = this._clicks.pipe(
      throttleTime(this.debounceTime),
      debounceTime(this.debounceTime)
    ).subscribe(event => this.debounceClick.emit(event));
  }

  ngOnDestroy() {
    this._clickSubscription.unsubscribe();
  }

  @HostListener('click', ['$event'])
  onClick(event: any): void {
    event.preventDefault();
    event.stopPropagation();
    this._clicks.next(event);
  }

}
