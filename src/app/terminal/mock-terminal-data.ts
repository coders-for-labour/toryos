import { TerminalLine } from './terminal-line';

export const DATA: TerminalLine[] = [
  { id: 1, text: "System Boot", type: "info", pause: 0.1 , active: false},
  { id: 2, text: "-----------", type: "info", pause: 0.1 , active: false},
  { id: 3, text: "Premature Reboot Detected: Analysing", type: "info", pause: 0 , active: false},
  { id: 4, text: "System shut down unexpectedly - work in progress may have been lost", type: "info", pause: 2, active: false},
  { id: 5, text: "Inspecting Cache", type: "info", pause: 1 , active: false},
  { id: 6, text: "1 File Reference Detected: 'Brexit Plans.doc'", type: "info", pause: 3 , active: false},
  { id: 7, text: "Attempting Recovery of 'Brexit Plans.doc'", type: "info", pause: 1 , active: false},
  { id: 8, text: "Unable to recover 'Brexit Plans.doc' | File Does Not Exist", type: "alert", pause: 1.5 , active: false},
  { id: 9, text: "Running Diagnostic Checks", type: "info", pause: 2, active: false },
  { id: 10, text: "Economy Module (LTEP): Unstable - Resource allocation is limited to 1% - other services will suffer", type: "info", pause: 2, active: false},
  { id: 11, text: "System Healthcheck Module: Error - NHS.svc fragmented", type: "info", pause: 2, active: false},
  { id: 12, text: "Security Module: Compromised - Unable to start up new security workers", type: "info", pause: 2, active: false },
  { id: 13, text: "Malware Detected: t0ri35.bin", type: "alert", pause: 4, active: false },
  { id: 14, text: "ALERT: System Failure Imminent", type: "alert", pause: 2, active: false },
  { id: 15, text: "Gov.OS 2018 is Available: Upgrading", type: "info", pause: 2, active: false },
  { id: 15, text: "Upgrade installed - rebooting...", type: "info", pause: 2, active: false }
]
