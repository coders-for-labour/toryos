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
  private finished: boolean = false;
  printData(): Promise<TerminalLine[]> {
    return Promise.resolve(DATA);
  }
  start(): void {
    this.terminalData = new Observable(observer => {
      let timer = 0;
        for(var i = 0; i < DATA.length; i++){
          let t = DATA[i];
          setTimeout(() => {
            observer.next(t);
          }, timer + (t.pause * 1000));

          timer += t.pause * 1000;
        }
    });

    let subscription = this.terminalData.subscribe(
        value => this.data.push(value),
        error => this.anyErrors = true,
        () => this.finished = true
      );
  }

}
