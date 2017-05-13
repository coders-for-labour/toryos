import { TerminalLine } from './terminal-line';

export const DATA: TerminalLine[] = [
  { text: "System Boot", type: "info", pause: 0.1 , active: false},
  { text: "-----------", type: "info", pause: 0.1 , active: false},
  { text: "Premature Reboot Detected: Analysing", type: "info", pause: 0 , active: false},
  { text: "System shut down unexpectedly - work in progress may have been lost.", type: "info", pause: 2, active: false},
  { text: "Inspecting Cache", type: "info", pause: 1 , active: false},
  { text: "1 File Reference Detected: 'Brexit Plans.doc'", type: "info", pause: 3 , active: false},
  { text: "Attempting Recovery of 'Brexit Plans.doc'", type: "info", pause: 1 , active: false},
  { text: "Unable to recover 'Brexit Plans.doc' | File Does Not Exist", type: "alert", pause: 1.5 , active: false},
  { text: "Running Diagnostic Checks", type: "info", pause: 2, active: false },
  { text: "Economy Module (LTEP): Unstable - Resource allocation is limited to 1% although more is available.", type: "info", pause: 2, active: false},
  { text: "System Healthcheck Module: Error - NHS.svc fragmented", type: "info", pause: 2, active: false},
  { text: "Security Module: Compromised - Unable to start up new security workers", type: "info", pause: 2, active: false },
  { text: "Malware Detected: t0ri35.bin", type: "alert", pause: 4, active: false },
  { text: "ALERT: System Failure Imminent", type: "alert", pause: 2, active: false },
  { text: "Gov.OS 2017 is Available: Upgrading", type: "info", pause: 2, active: false }
]
