const exits = [
  { sym: "PERSISTENT", isin: "INE262H01021", qty: 60, exitPrice: 5554.00, liveLtp: 5874.50, exitDate: "2026-10-16" },
  { sym: "BSOFT", isin: "INE836A01035", qty: 635, exitPrice: 300.00, liveLtp: 322.70, exitDate: "2026-10-26" },
  { sym: "APTUS", isin: "INE852O01025", qty: 260, exitPrice: 192.488988, liveLtp: 190.85, exitDate: "2026-10-26" },
  { sym: "IRFC", isin: "INE053F01010", qty: 500, exitPrice: 73.879997, liveLtp: 73.37, exitDate: "2026-10-26" }
];

let totalRealized = 0;
let totalCurrentVal = 0;

console.log("=== VERIFIED LIVE LTP POST-MORTEM (NSE/BSE CLOSING DATA) ===");
console.log("SYMBOL     | QTY | EXIT DATE  | YOUR EXIT PX | REALIZED CASH | VERIFIED LIVE LTP | LIVE VALUE TODAY | NET DIFF (RECOVERY)");
console.log("-".repeat(110));

for (const e of exits) {
  const realized = e.qty * e.exitPrice;
  const curVal = e.qty * e.liveLtp;
  const diff = curVal - realized;
  const pct = (diff / realized) * 100;
  totalRealized += realized;
  totalCurrentVal += curVal;
  const sign = diff >= 0 ? "+" : "";
  console.log(`${e.sym.padEnd(10)} | ${e.qty.toString().padStart(3)} | ${e.exitDate} | Rs ${e.exitPrice.toFixed(2).padStart(8)} | Rs ${realized.toFixed(2).padStart(11)} | Rs ${e.liveLtp.toFixed(2).padStart(14)} | Rs ${curVal.toFixed(2).padStart(12)} | ${sign}Rs ${diff.toFixed(2).padStart(9)} (${sign}${pct.toFixed(2)}%)`);
}

console.log("-".repeat(110));
const totalDiff = totalCurrentVal - totalRealized;
const totalPct = (totalDiff / totalRealized) * 100;
const totalSign = totalDiff >= 0 ? "+" : "";
console.log(`TOTALS     |     |            |              | Rs ${totalRealized.toFixed(2)} |                   | Rs ${totalCurrentVal.toFixed(2)} | ${totalSign}Rs ${totalDiff.toFixed(2)} (${totalSign}${totalPct.toFixed(2)}%)`);
