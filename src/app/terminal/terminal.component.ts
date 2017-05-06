import { Component, OnInit } from '@angular/core';
import { TerminalLine } from './terminal-line';
import { TerminalService } from './terminal.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-terminal',
  templateUrl: './terminal.component.html',
  styleUrls: ['./terminal.component.css'],
  providers: [TerminalService]
})
export class TerminalComponent implements OnInit {

  constructor(private terminalService: TerminalService) { }
  svc: TerminalService;
  ngOnInit() {
    this.svc = this.terminalService;
    this.terminalService.start();
  }

}
