import { Injectable } from '@angular/core';
import { TerminalLine } from './terminal-line';
import { DATA } from './mock-terminal-data';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class TerminalService {

  constructor() { }
  private terminalData: Observable<TerminalLine>;
  data: TerminalLine[] = [];
  private anyErrors: boolean = false;
  finished: boolean = false;
  start(): void {
    let stream = this.data;
    let timer = 0;
    this.terminalData = new Observable(subscriber => {
        for(var i = 0; i < DATA.length; i++){
          let t = DATA[i];

          setTimeout(() => {
            subscriber.next(t);
          }, timer + (t.pause * 1000));

          timer += t.pause * 1000;
        }

        setTimeout(() => {
          subscriber.complete();
        }, timer);
    });

    let subIndex = 0;
    let subscription = this.terminalData.subscribe(
        value => {
          this.data.push(value);
          if(subIndex > 0){
            this.data[subIndex - 1].active = false;
          }
        },
        error => this.anyErrors = true,
        () => this.finished = true
      );
  }

}
