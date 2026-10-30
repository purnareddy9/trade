const exits = [
  { sym: "PERSISTENT", isin: "INE262H01021", qty: 60, exitPrice: 5554.00, verifiedLtp: 6048.00, exitDate: "2026-10-16", prevClose: 5880.00, dayChg: "+2.86%" },
  { sym: "BSOFT", isin: "INE836A01035", qty: 635, exitPrice: 300.00, verifiedLtp: 322.70, exitDate: "2026-10-26", prevClose: 342.50, dayChg: "-5.78%" },
  { sym: "APTUS", isin: "INE852O01025", qty: 260, exitPrice: 192.488988, verifiedLtp: 190.85, exitDate: "2026-10-26", prevClose: 191.28, dayChg: "-0.23%" },
  { sym: "IRFC", isin: "INE053F01010", qty: 500, exitPrice: 73.879997, verifiedLtp: 73.37, exitDate: "2026-10-26", prevClose: 75.71, dayChg: "-3.09%" }
];

let totalRealized = 0;
let totalCurrentVal = 0;

console.log("=== EXACT RECOVERY AUDIT (WITH PERSISTENT @ RS 6,048.00) ===");
console.log("SYMBOL     | QTY | EXIT DATE  | YOUR EXIT PX | CASH REALIZED | OCT 30 CLOSE LTP | LIVE VALUE TODAY | RECOVERY (DIFF vs EXIT)");
console.log("-".repeat(116));

for (const e of exits) {
  const realized = e.qty * e.exitPrice;
  const curVal = e.qty * e.verifiedLtp;
  const diff = curVal - realized;
  const pct = (diff / realized) * 100;
  totalRealized += realized;
  totalCurrentVal += curVal;
  const sign = diff >= 0 ? "+" : "";
  console.log(`${e.sym.padEnd(10)} | ${e.qty.toString().padStart(3)} | ${e.exitDate} | Rs ${e.exitPrice.toFixed(2).padStart(8)} | Rs ${realized.toFixed(2).padStart(11)} | Rs ${e.verifiedLtp.toFixed(2).padStart(16)} | Rs ${curVal.toFixed(2).padStart(12)} | ${sign}Rs ${diff.toFixed(2).padStart(9)} (${sign}${pct.toFixed(2)}%)`);
}

console.log("-".repeat(116));
const totalDiff = totalCurrentVal - totalRealized;
const totalPct = (totalDiff / totalRealized) * 100;
const totalSign = totalDiff >= 0 ? "+" : "";
console.log(`TOTALS     |     |            |              | Rs ${totalRealized.toFixed(2)} |                   | Rs ${totalCurrentVal.toFixed(2)} | ${totalSign}Rs ${totalDiff.toFixed(2)} (${totalSign}${totalPct.toFixed(2)}%)`);
