const holdings = [
  { sym: 'ETERNAL', qty: 325, avg: 254.47, ltp: 342.50, inv: 82702.5, cur: 111312.5, pl: 28610.0, action: 'HOLD_TRAILING_SL' },
  { sym: 'JIOFIN', qty: 390, avg: 267.82, ltp: 204.68, inv: 104448.15, cur: 79825.2, pl: -24622.95, action: 'EXIT_50_PERCENT' },
  { sym: 'WIPRO', qty: 350, avg: 271.77, ltp: 197.31, inv: 95118.45, cur: 69058.5, pl: -26059.95, action: 'EXIT_50_PERCENT' },
  { sym: 'YESBANK', qty: 3000, avg: 20.76, ltp: 15.17, inv: 62270.0, cur: 45510.0, pl: -16760.0, action: 'SELL_FULL' },
  { sym: 'SJVN', qty: 650, avg: 114.98, ltp: 53.63, inv: 74734.5, cur: 34859.5, pl: -39875.0, action: 'SELL_FULL' },
  { sym: 'SUZLON', qty: 800, avg: 67.49, ltp: 33.35, inv: 53991.0, cur: 26680.0, pl: -27311.0, action: 'SELL_FULL' },
  { sym: 'IDEA', qty: 1200, avg: 8.28, ltp: 11.77, inv: 9934.0, cur: 14124.0, pl: 4190.0, action: 'SELL_FULL_BOOK_PROFIT' },
  { sym: 'BAJAJHFL', qty: 180, avg: 138.51, ltp: 77.33, inv: 24931.6, cur: 13919.4, pl: -11012.2, action: 'SELL_FULL' },
  { sym: 'PNB', qty: 100, avg: 103.19, ltp: 122.45, inv: 10319.0, cur: 12245.0, pl: 1926.0, action: 'HOLD_TRAILING_SL' },
  { sym: 'RELIANCE', qty: 10, avg: 1364.0, ltp: 1159.5, inv: 13640.0, cur: 11595.0, pl: -2045.0, action: 'HOLD' },
  { sym: 'IRCON', qty: 100, avg: 220.59, ltp: 96.65, inv: 22059.0, cur: 9665.0, pl: -12394.0, action: 'SELL_FULL' },
  { sym: 'IDFCFIRSTB', qty: 110, avg: 58.68, ltp: 71.92, inv: 6454.6, cur: 7911.2, pl: 1456.6, action: 'HOLD_TRAILING_SL' },
  { sym: 'MISHTANN', qty: 2000, avg: 7.04, ltp: 2.89, inv: 14076.18, cur: 5780.0, pl: -8296.18, action: 'SELL_FULL' },
  { sym: 'EASEMYTRIP', qty: 850, avg: 15.96, ltp: 5.93, inv: 13567.5, cur: 5040.5, pl: -8527.0, action: 'SELL_FULL' },
  { sym: 'NHPC', qty: 50, avg: 82.14, ltp: 77.57, inv: 4107.0, cur: 3878.5, pl: -228.5, action: 'HOLD_TIGHT_SL' },
  { sym: 'HDFCBANK', qty: 4, avg: 866.5, ltp: 690.5, inv: 3466.0, cur: 2762.0, pl: -704.0, action: 'HOLD' },
  { sym: 'ALOKINDS', qty: 250, avg: 24.89, ltp: 8.07, inv: 6222.5, cur: 2017.5, pl: -4205.0, action: 'SELL_FULL' },
  { sym: 'KOHINOOR', qty: 50, avg: 43.89, ltp: 24.87, inv: 2194.66, cur: 1243.5, pl: -951.16, action: 'SELL_FULL' },
  { sym: 'INOXWIND', qty: 10, avg: 208.56, ltp: 55.41, inv: 2085.6, cur: 554.1, pl: -1531.5, action: 'SELL_FULL' },
  { sym: 'UJJIVANSFB', qty: 10, avg: 33.99, ltp: 53.02, inv: 339.9, cur: 530.2, pl: 190.3, action: 'SELL_FULL_BOOK_PROFIT' },
  { sym: 'NTPC', qty: 1, avg: 413.85, ltp: 315.55, inv: 413.85, cur: 315.55, pl: -98.3, action: 'SELL_FULL' }
];

let releasedCash = 0;
let retainedValue = 0;

holdings.forEach(h => {
  if (h.action === 'SELL_FULL' || h.action === 'SELL_FULL_BOOK_PROFIT') {
    releasedCash += h.cur;
  } else if (h.action === 'EXIT_50_PERCENT') {
    releasedCash += h.cur * 0.5;
    retainedValue += h.cur * 0.5;
  } else {
    retainedValue += h.cur;
  }
});

console.log('Cash to be unlocked from suggested restructuring: Rs', releasedCash.toFixed(2));
console.log('Retained Equity Value: Rs', retainedValue.toFixed(2));
console.log('Total Current Equity Value: Rs', (releasedCash + retainedValue).toFixed(2));
