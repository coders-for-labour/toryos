import { TerminalLine } from './terminal-line';

export const DATA: TerminalLine[] = [
  { text: "System Boot", type: "info", pause: 0.1 , active: false},
  { text: "-----------", type: "info", pause: 0.1 , active: false},
  { text: "Premature Reboot Detected: Analysing", type: "info", pause: 0 , active: false},
  { text: "System shut down unexpectedly - work in progress may have been lost.", type: "info", pause: 2, active: false},
  { text: "Inspecting Cache", type: "info", pause: 1 , active: false},
  { text: "1 File Detected: 'Brexit Plans.doc'", type: "info", pause: 3 , active: false},
  { text: "Attempting Recovery of 'Brexit Plans.doc'", type: "info", pause: 1 , active: false},
  { text: "Cannot Recover 'Brexit Plans.doc'", type: "info", pause: 1.5 , active: false},
  { text: "Reason: File Corrupted", type: "alert", pause: 0.25 , active: false},
  { text: "Running Diagnostic Checks", type: "info", pause: 2, active: false },
  { text: "Economy Module: Unstable", type: "info", pause: 2, active: false},
  { text: "Security Module: Compromised", type: "info", pause: 2, active: false },
  { text: "ALERT: System Failure Imminent", type: "alert", pause: 2, active: false },
  { text: "A System Upgrade is Available: Downloading", type: "alert", pause: 2, active: false }
]
