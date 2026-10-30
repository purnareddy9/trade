const fs = require('fs');

const tradebookRaw = `symbol,isin,trade_date,exchange,segment,series,trade_type,auction,quantity,price,trade_id,order_id,order_execution_time
PERSISTENT,INE262H01021,2026-10-16,NSE,EQ,EQ,sell,false,1.000000,5554.000000,400045430,1200000000015403,2026-10-16T09:15:06
PERSISTENT,INE262H01021,2026-10-16,NSE,EQ,EQ,sell,false,1.000000,5554.000000,400045436,1200000000015403,2026-10-16T09:15:06
PERSISTENT,INE262H01021,2026-10-16,NSE,EQ,EQ,sell,false,12.000000,5554.000000,400045434,1200000000015403,2026-10-16T09:15:06
PERSISTENT,INE262H01021,2026-10-16,NSE,EQ,EQ,sell,false,13.000000,5554.000000,400045432,1200000000015403,2026-10-16T09:15:06
PERSISTENT,INE262H01021,2026-10-16,NSE,EQ,EQ,sell,false,2.000000,5554.000000,400045431,1200000000015403,2026-10-16T09:15:06
PERSISTENT,INE262H01021,2026-10-16,NSE,EQ,EQ,sell,false,2.000000,5554.000000,400045437,1200000000015403,2026-10-16T09:15:06
PERSISTENT,INE262H01021,2026-10-16,NSE,EQ,EQ,sell,false,2.000000,5554.000000,400045438,1200000000015403,2026-10-16T09:15:06
PERSISTENT,INE262H01021,2026-10-16,NSE,EQ,EQ,sell,false,9.000000,5554.000000,400045429,1200000000015403,2026-10-16T09:15:06
PERSISTENT,INE262H01021,2026-10-16,NSE,EQ,EQ,sell,false,9.000000,5554.000000,400045433,1200000000015403,2026-10-16T09:15:06
PERSISTENT,INE262H01021,2026-10-16,NSE,EQ,EQ,sell,false,9.000000,5554.000000,400045435,1200000000015403,2026-10-16T09:15:06
BSOFT,INE836A01035,2026-10-26,NSE,EQ,EQ,sell,false,315.000000,300.000000,957135,1000000004849653,2026-10-26T09:24:50
APTUS,INE852O01025,2026-10-26,BSE,EQ,A,sell,false,188.000000,192.500000,1368200,1792985400036590620,2026-10-26T09:26:18
APTUS,INE852O01025,2026-10-26,BSE,EQ,A,sell,false,5.000000,192.600006,1367800,1792985400036590620,2026-10-26T09:26:18
APTUS,INE852O01025,2026-10-26,BSE,EQ,A,sell,false,67.000000,192.449997,1368500,1792985400036590620,2026-10-26T09:26:18
IRFC,INE053F01010,2026-10-26,BSE,EQ,A,sell,false,500.000000,73.879997,1049700,1792985400036330815,2026-10-26T09:26:27
BSOFT,INE836A01035,2026-10-26,NSE,EQ,EQ,sell,false,320.000000,300.000000,1196302,1000000010268892,2026-10-26T09:32:58`;

const holdingsRaw = `"Instrument","Qty.","Avg. cost","LTP","Invested","Cur. val","P&L","Net chg.","Day chg.",""
"ALOKINDS",250,24.89,8.07,6222.5,2017.5,-4205,-67.58,-5.72,""
"BAJAJHFL",180,138.51,77.33,24931.6,13919.4,-11012.2,-44.17,-0.8,""
"EASEMYTRIP",850,15.96,5.93,13567.5,5040.5,-8527,-62.85,-1,""
"ETERNAL",325,254.47,342.5,82702.5,111312.5,28610,34.59,1.38,""
"HDFCBANK",4,866.5,690.5,3466,2762,-704,-20.31,0.8,""
"IDEA",1200,8.28,11.77,9934,14124,4190,42.18,-2.89,""
"IDFCFIRSTB",110,58.68,71.92,6454.6,7911.2,1456.6,22.57,-1.99,""
"INOXWIND",10,208.56,55.41,2085.6,554.1,-1531.5,-73.43,-6.37,""
"IRCON",100,220.59,96.65,22059,9665,-12394,-56.19,-4.21,""
"JIOFIN",390,267.82,204.68,104448.15,79825.2,-24622.95,-23.57,-1.12,""
"KOHINOOR",50,43.89,24.87,2194.66,1243.5,-951.16,-43.34,-8.13,""
"MISHTANN",2000,7.04,2.89,14076.18,5780,-8296.18,-58.94,-0.69,""
"NHPC",50,82.14,77.57,4107,3878.5,-228.5,-5.56,0.48,""
"NTPC",1,413.85,315.55,413.85,315.55,-98.3,-23.75,1.63,""
"PNB",100,103.19,122.45,10319,12245,1926,18.66,-1.17,""
"RELIANCE",10,1364,1159.5,13640,11595,-2045,-14.99,-0.79,""
"SJVN",650,114.98,53.63,74734.5,34859.5,-39875,-53.36,2.29,""
"SUZLON",800,67.49,33.35,53991,26680,-27311,-50.58,-9.35,""
"UJJIVANSFB",10,33.99,53.02,339.9,530.2,190.3,55.99,-5.54,""
"WIPRO",350,271.77,197.31,95118.45,69058.5,-26059.95,-27.4,3.79,""
"YESBANK",3000,20.76,15.17,62270,45510,-16760,-26.92,-1.81,""`;

// Process Holdings
const hLines = holdingsRaw.trim().split('\n').slice(1);
let totalInv = 0, totalCur = 0, totalPL = 0;
const holdings = [];

for(const line of hLines) {
  const parts = line.split(',').map(s => s.replace(/"/g, '').trim());
  const sym = parts[0];
  const qty = parseFloat(parts[1]);
  const avg = parseFloat(parts[2]);
  const ltp = parseFloat(parts[3]);
  const inv = parseFloat(parts[4]);
  const cur = parseFloat(parts[5]);
  const pl = parseFloat(parts[6]);
  const netChg = parseFloat(parts[7]);
  const dayChg = parseFloat(parts[8]);
  totalInv += inv;
  totalCur += cur;
  totalPL += pl;
  holdings.push({ sym, qty, avg, ltp, inv, cur, pl, netChg, dayChg });
}

console.log('=== HOLDINGS SUMMARY ===');
console.log('Total Invested:', totalInv.toFixed(2));
console.log('Total Current Value:', totalCur.toFixed(2));
console.log('Total Unrealized P&L:', totalPL.toFixed(2));
console.log('Portfolio Return %:', ((totalPL/totalInv)*100).toFixed(2) + '%');

holdings.sort((a,b) => b.cur - a.cur);
console.log('\nHOLDINGS TABLE (By Current Value):');
holdings.forEach(h => {
  const wt = ((h.cur / totalCur) * 100).toFixed(2);
  const status = h.pl >= 0 ? 'PROFIT' : 'LOSS';
  console.log(`${h.sym.padEnd(12)} | Qty: ${h.qty.toString().padStart(5)} | Avg: ${h.avg.toFixed(2).padStart(8)} | LTP: ${h.ltp.toFixed(2).padStart(8)} | Inv: ${h.inv.toFixed(1).padStart(9)} | Cur: ${h.cur.toFixed(1).padStart(9)} | Wt: ${wt.padStart(5)}% | PnL: ${h.pl.toFixed(1).padStart(9)} (${h.netChg.toFixed(2)}%) [${status}]`);
});

// Category analysis
const profitHoldings = holdings.filter(h => h.pl > 0);
const lossHoldings = holdings.filter(h => h.pl < 0);
console.log('\nProfitable Positions:', profitHoldings.length, 'Total Profit:', profitHoldings.reduce((acc, h) => acc + h.pl, 0).toFixed(2));
console.log('Losing Positions:', lossHoldings.length, 'Total Loss:', lossHoldings.reduce((acc, h) => acc + h.pl, 0).toFixed(2));

// Process Tradebook
const tLines = tradebookRaw.trim().split('\n').slice(1);
const tradesBySym = {};
for(const line of tLines) {
  const parts = line.split(',');
  const sym = parts[0];
  const date = parts[2];
  const qty = parseFloat(parts[8]);
  const price = parseFloat(parts[9]);
  const val = qty * price;
  if (!tradesBySym[sym]) {
    tradesBySym[sym] = { sym, date, totalQty: 0, totalVal: 0, executions: [] };
  }
  tradesBySym[sym].totalQty += qty;
  tradesBySym[sym].totalVal += val;
  tradesBySym[sym].executions.push({ qty, price, val, time: parts[12] });
}

console.log('\n=== RECENT EXITS SUMMARY ===');
let totalRealizedCash = 0;
for(const sym in tradesBySym) {
  const t = tradesBySym[sym];
  const avgSellPrice = t.totalVal / t.totalQty;
  totalRealizedCash += t.totalVal;
  console.log(`${t.sym.padEnd(12)} | Date: ${t.date} | Total Qty: ${t.totalQty} | Avg Price: ${avgSellPrice.toFixed(2)} | Realized Cash: Rs ${t.totalVal.toFixed(2)}`);
}
console.log('Total Cash Realized from Exits: Rs', totalRealizedCash.toFixed(2));
