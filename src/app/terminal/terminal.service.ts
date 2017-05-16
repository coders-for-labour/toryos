import { Injectable } from '@angular/core';
import { TerminalLine } from './terminal-line';
import { DATA } from './mock-terminal-data';
import { Observable } from 'rxjs/Observable';

declare let ga: Function;

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
            this.scroll();
          }, timer + (t.pause * 1000));

          timer += t.pause * 1000;
        }

        setTimeout(() => {
          subscriber.complete();
          this.scroll();
          this.reboot();
        }, timer + 2000);
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
  };
  scroll(): void{
    window.scrollTo(0,document.getElementById("terminal").scrollHeight);
  };
  reboot(): void{
    window.scrollTo(0,0);

    setTimeout(() => {
      this.upgrade();
    }, 5000);
  }
  upgrade(): void{
    if(this.finished){
      let url = "http://www.labour.org.uk/index.php/manifesto2017";
      ga("send", {
        hitType: 'pageview',
        location: url
        });
      window.location.href = url;
    }
  };

}
