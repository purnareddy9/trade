const exits = [
  { sym: "PERSISTENT", qty: 60, exitPrice: 5554.00, liveLtp: 5880.00, exitDate: "16-Oct-2026", recentHigh: 6048.00 },
  { sym: "BSOFT", qty: 635, exitPrice: 300.00, liveLtp: 323.00, exitDate: "26-Oct-2026", recentHigh: 342.50 },
  { sym: "APTUS", qty: 260, exitPrice: 192.489, liveLtp: 191.28, exitDate: "26-Oct-2026", recentHigh: 199.00 },
  { sym: "IRFC", qty: 500, exitPrice: 73.88, liveLtp: 73.40, exitDate: "26-Oct-2026", recentHigh: 75.20 }
];

let totalRealized = 0;
let totalLiveVal = 0;
let totalPeakVal = 0;

console.log("=== EXACT LIVE MARKET PRICE CALCULATION ===");
console.log("SYMBOL     | EXIT DATE   | QTY | EXIT PX | CASH REALIZED | LIVE LTP  | LIVE VALUE   | LIVE P&L DIFF (vs Exit)");
console.log("-".repeat(105));

for (const e of exits) {
  const realized = e.qty * e.exitPrice;
  const liveVal = e.qty * e.liveLtp;
  const liveDiff = liveVal - realized;
  const livePct = (liveDiff / realized) * 100;
  
  totalRealized += realized;
  totalLiveVal += liveVal;
  totalPeakVal += (e.qty * e.recentHigh);

  const sign = liveDiff >= 0 ? "+" : "";
  console.log(`${e.sym.padEnd(10)} | ${e.exitDate} | ${e.qty.toString().padStart(3)} | ${e.exitPrice.toFixed(2).padStart(7)} | Rs ${realized.toFixed(2).padStart(11)} | ${e.liveLtp.toFixed(2).padStart(9)} | Rs ${liveVal.toFixed(2).padStart(10)} | ${sign}Rs ${liveDiff.toFixed(2).padStart(9)} (${sign}${livePct.toFixed(2)}%)`);
}

console.log("-".repeat(105));
const netDiff = totalLiveVal - totalRealized;
const netPct = (netDiff / totalRealized) * 100;
const signNet = netDiff >= 0 ? "+" : "";
console.log(`TOTALS     |             |     |         | Rs ${totalRealized.toFixed(2)} |           | Rs ${totalLiveVal.toFixed(2)} | ${signNet}Rs ${netDiff.toFixed(2)} (${signNet}${netPct.toFixed(2)}%)`);

const peakDiff = totalPeakVal - totalRealized;
console.log(`\nAt Peak Recovery (Intraday Highs):`);
console.log(`Total Peak Value: Rs ${totalPeakVal.toFixed(2)} | Peak Rebound Left On Table: +Rs ${peakDiff.toFixed(2)} (+${((peakDiff/totalRealized)*100).toFixed(2)}%)`);
