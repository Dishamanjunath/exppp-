// ---------- 1. The current input values (both start at 0) ----------
let inputA = 0;
let inputB = 0;

// ---------- 2. The eight gates ----------
// Each gate has a name, a formula to display, and a function that
// calculates its output (always 0 or 1) from inputs a and b.
const gates = [
  { name: "AND",   formula: "A · B",    calculate: (a, b) => a & b },
  { name: "OR",    formula: "A + B",    calculate: (a, b) => a | b },
  { name: "NAND",  formula: "(A · B)'", calculate: (a, b) => 1 - (a & b) },
  { name: "NOR",   formula: "(A + B)'", calculate: (a, b) => 1 - (a | b) },
  { name: "XOR",   formula: "A ⊕ B",    calculate: (a, b) => a ^ b },
  { name: "XNOR",  formula: "(A ⊕ B)'", calculate: (a, b) => 1 - (a ^ b) },
  { name: "NOT A", formula: "A'",       calculate: (a, b) => 1 - a },
  { name: "NOT B", formula: "B'",       calculate: (a, b) => 1 - b }
];

// ---------- 3. Find the page elements we need ----------
const switchA = document.getElementById("switch-a");
const switchB = document.getElementById("switch-b");
const valueA = document.getElementById("value-a");
const valueB = document.getElementById("value-b");
const resetButton = document.getElementById("reset-button");
const gatesContainer = document.getElementById("gates");

// ---------- 4. Create one card for each gate ----------
// We keep the output and state elements so we can update them later.
const cards = gates.map((gate) => {
  const card = document.createElement("div");
  card.className = "gate-card";

  const name = document.createElement("div");
  name.className = "gate-name";
  name.textContent = gate.name;

  const formula = document.createElement("div");
  formula.className = "gate-formula";
  formula.textContent = gate.formula;

  const output = document.createElement("div");
  output.className = "gate-output";

  const state = document.createElement("div");
  state.className = "gate-state";

  card.append(name, formula, output, state);
  gatesContainer.appendChild(card);

  return { card, output, state };
});

// ---------- 5. Update everything on the screen ----------
function updateDisplay() {
  // Show the input values and switch positions
  valueA.textContent = inputA;
  valueB.textContent = inputB;

  switchA.classList.toggle("on", inputA === 1);
  switchB.classList.toggle("on", inputB === 1);
  switchA.setAttribute("aria-pressed", String(inputA === 1));
  switchB.setAttribute("aria-pressed", String(inputB === 1));

  // Calculate and show the output of every gate
  gates.forEach((gate, index) => {
    const result = gate.calculate(inputA, inputB);
    const { card, output, state } = cards[index];

    output.textContent = result;
    state.textContent = result === 1 ? "HIGH" : "LOW";
    card.classList.toggle("active", result === 1); // highlight when output is 1
  });
}

// ---------- 6. Button actions ----------
switchA.addEventListener("click", () => {
  inputA = 1 - inputA; // flips 0 to 1, or 1 to 0
  updateDisplay();
});

switchB.addEventListener("click", () => {
  inputB = 1 - inputB;
  updateDisplay();
});

resetButton.addEventListener("click", () => {
  inputA = 0;
  inputB = 0;
  updateDisplay();
});

// ---------- 7. Show the starting state (A = 0, B = 0) ----------
updateDisplay();