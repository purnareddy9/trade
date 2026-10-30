const exits = [
  { sym: "PERSISTENT", qty: 60, exitPrice: 5554.00, ltpToday: 6048.00, exitDate: "16-Oct-2026" },
  { sym: "BSOFT", qty: 635, exitPrice: 300.00, ltpToday: 342.50, exitDate: "26-Oct-2026" },
  { sym: "APTUS", qty: 260, exitPrice: 192.489, ltpToday: 196.20, exitDate: "26-Oct-2026" },
  { sym: "IRFC", qty: 500, exitPrice: 73.88, ltpToday: 74.15, exitDate: "26-Oct-2026" }
];

let totalRealized = 0;
let totalValToday = 0;

console.log("SYMBOL     | EXIT DATE   | QTY | EXIT PX | REALIZED CASH | TODAY LTP | VALUE TODAY | MISSED RECOVERY");
console.log("-".repeat(95));
for (const e of exits) {
  const realized = e.qty * e.exitPrice;
  const valToday = e.qty * e.ltpToday;
  const diff = valToday - realized;
  const pct = (diff / realized) * 100;
  totalRealized += realized;
  totalValToday += valToday;
  console.log(`${e.sym.padEnd(10)} | ${e.exitDate} | ${e.qty.toString().padStart(3)} | ${e.exitPrice.toFixed(2).padStart(7)} | Rs ${realized.toFixed(2).padStart(11)} | ${e.ltpToday.toFixed(2).padStart(9)} | Rs ${valToday.toFixed(2).padStart(10)} | +Rs ${diff.toFixed(2).padStart(9)} (+${pct.toFixed(2)}%)`);
}
console.log("-".repeat(95));
const totalDiff = totalValToday - totalRealized;
console.log(`TOTALS     |             |     |         | Rs ${totalRealized.toFixed(2)} |           | Rs ${totalValToday.toFixed(2)} | +Rs ${totalDiff.toFixed(2)} (+${((totalDiff/totalRealized)*100).toFixed(2)}%)`);
