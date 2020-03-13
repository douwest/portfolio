import {AfterViewInit, Component, Inject, LOCALE_ID, ViewChild, ViewEncapsulation} from '@angular/core';
import {CountdownComponent, CountdownConfig} from 'ngx-countdown';

@Component({
  selector: 'app-countdown',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class TimerComponent {

  @ViewChild('countdownDays', {static: false}) private daysCounter: CountdownComponent;
  @ViewChild('countdownHours', {static: false}) private hourCounter: CountdownComponent;
  @ViewChild('countdownMinutes', {static: false}) private minuteCounter: CountdownComponent;
  @ViewChild('countdownSeconds', {static: false}) private secondCounter: CountdownComponent;
  @ViewChild('countdownMilliseconds', {static: false}) private milliSecondCounter: CountdownComponent;

  private countdownTime: number = this.getNextFriday();
  public daysConfig: CountdownConfig = {leftTime: this.countdownTime, notify: [2, 5], format: 'd'};
  public hourConfig: CountdownConfig = {leftTime: this.countdownTime, notify: [2, 5], format: 'H'};
  public minuteConfig: CountdownConfig = {leftTime: this.countdownTime, notify: [2, 5], format: 'm'};
  public secondConfig: CountdownConfig = {leftTime: this.countdownTime, notify: [2, 5], format: 's'};
  public millisecondConfig: CountdownConfig = {leftTime: this.countdownTime, notify: [2, 5], format: 'S'};
  public done = false;
  constructor(@Inject(LOCALE_ID) private locale: string) {}

  /**
   * Handles the event if the timer is ready.
   */
  handleEvent(event: {event: {action: string}}): void {
    if (event.event.action === 'done') {
      this.done = true;
    }
  }

  /**
   * Returns the time until next friday in seconds.
   */
  getNextFriday(): number {
    const now: Date = new Date();
    const result: number = (this.getTargetDate().getTime() - now.getTime()) / 1000;
    return Math.trunc(result);
  }

  /**
   * Gets the target date in remaining days and desired hours, minutes and seconds.
   */
  getTargetDate(): Date {
    const date: Date = new Date();
    date.setDate(date.getDate() + ((5 + 7 - date.getDay()) % 7));
    date.setHours(16);
    date.setMinutes(0);
    date.setSeconds(0);
    return date;
  }
}
