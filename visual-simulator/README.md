\# Digital Logic Gate Simulator – Visual Simulator



A simple, browser-based visual simulator that shows how the eight basic digital logic gates respond to two inputs, A and B. It is a companion to the Python version of the Digital Logic Gate Simulator project.



\## Features



\- Toggle input A and input B between 0 and 1

\- See all eight gate outputs update instantly

\- Active outputs (value 1) are highlighted

\- Reset button sets both inputs back to 0

\- Dark, modern design that works on mobile and desktop



\## Technologies Used



\- HTML

\- CSS

\- Vanilla JavaScript



No frameworks, libraries, backend, database, or build tools are needed.



\## Folder Structure



```

visual-simulator/

├── index.html   # Page structure

├── style.css    # Colours, layout and animations

├── script.js    # Logic gate calculations and interactivity

└── README.md    # Project documentation

```



\## How to Run Locally



1\. Download or clone this repository.

2\. Open the `visual-simulator` folder.

3\. Double-click `index.html` to open it in your browser.



No installation is required.



\## The Eight Logic Gates



| Gate  | Output is 1 when...                  |

|-------|--------------------------------------|

| AND   | both A and B are 1                   |

| OR    | at least one of A or B is 1          |

| NAND  | NOT AND: output is 0 only if both are 1 |

| NOR   | NOT OR: output is 1 only if both are 0  |

| XOR   | A and B are different                |

| XNOR  | A and B are the same                 |

| NOT A | A is 0 (it flips A)                  |

| NOT B | B is 0 (it flips B)                  |



\### Truth Table



| A | B | AND | OR | NAND | NOR | XOR | XNOR | NOT A | NOT B |

|---|---|-----|----|------|-----|-----|------|-------|-------|

| 0 | 0 |  0  | 0  |  1   |  1  |  0  |  1   |   1   |   1   |

| 0 | 1 |  0  | 1  |  1   |  0  |  1  |  0   |   1   |   0   |

| 1 | 0 |  0  | 1  |  1   |  0  |  1  |  0   |   0   |   1   |

| 1 | 1 |  1  | 1  |  0   |  0  |  0  |  1   |   0   |   0   |



\## Example



Set \*\*A = 1\*\* and \*\*B = 0\*\*. The simulator shows:



\- AND = 0, because B is 0

\- OR = 1, because A is 1

\- NAND = 1, the opposite of AND

\- NOR = 0, the opposite of OR

\- XOR = 1, because A and B are different

\- XNOR = 0, the opposite of XOR

\- NOT A = 0, because A is 1

\- NOT B = 1, because B is 0



Press \*\*Reset\*\* to return both inputs to 0.

