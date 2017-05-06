import { TestBed, inject } from '@angular/core/testing';

import { TerminalServiceService } from './terminal-service.service';

describe('TerminalServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TerminalServiceService]
    });
  });

  it('should ...', inject([TerminalServiceService], (service: TerminalServiceService) => {
    expect(service).toBeTruthy();
  }));
});
