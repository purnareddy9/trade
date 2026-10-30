# Indian Stock Market Portfolio Restructuring & Swing Trading Playbook

A structured, institutional-grade equity analysis and swing trading operational manual based on Zerodha holdings and tradebook data.

## 📌 Repository Contents

* **[`PORTFOLIO_ANALYSIS_AND_SWING_TRADING_PLAYBOOK.md`](./PORTFOLIO_ANALYSIS_AND_SWING_TRADING_PLAYBOOK.md)**: 
  * **Portfolio Audit**: 21-stock analysis with individual `HOLD`, `SELL`, `EXIT PARTIALLY`, or `REVIEW` action plans, trailing stop-losses, and profit targets.
  * **Tradebook Critique**: Post-trade evaluation of recent exits (`PERSISTENT`, `BSOFT`, `APTUS`, `IRFC`) analyzing premature profit booking vs. bottom panic selling.
  * **4 High-Probability Swing Setups**: Actionable trade plans in `BHARTIARTL`, `SUNPHARMA`, `SBIN`, and `INFY` with entry triggers, ATR-based stop-losses, targets, and 1% capital risk sizing.
  * **Trading Strategies**: Mechanics for Breakout Trading, 20/50 EMA Pullbacks, RSI Reversal Divergence, MACD Crossover, Supertrend, Support/Resistance Polarity, and Relative Volume (RVOL) Breakouts.
  * **Risk Management Rules**: Mathematical formulas for position sizing, ATR trailing stops, 1:2 R:R scaling, and why to never average down losing positions.
  * **Technical Indicators Guide**: Detailed practical manual with real stock price examples for RSI, ATR, SMA (20/50/200), EMA (20/50), MACD, ADX, Supertrend, Bollinger Bands, VWAP, OBV, and RVOL.
  * **14-Point Pre-Trade Checklist**: Mandatory pre-trade verification framework before placing orders.
  * **Daily Routine & 8-Week Roadmap**: Step-by-step daily schedule (Pre-Market, Live Market, Post-Market, Evening) and structured 8-week trader learning pathway.

* **[`analyze.js`](./analyze.js)**: Node.js automation script parsing Zerodha holdings and tradebook CSV data to calculate invested capital, current value, sector weightage, and unrealized P&L.
* **[`rebalance_calc.js`](./rebalance_calc.js)**: Node.js simulation script calculating capital unlocked (~₹2.35L) from restructuring recommendations.

---

## 🚀 Quick Summary of Portfolio Metrics

| Metric | Amount (₹) | Details |
| :--- | :--- | :--- |
| **Invested Capital (Holdings)** | ₹6,07,075.99 | 21 Stocks |
| **Current Portfolio Value** | ₹458,827.15 | Net Unrealized P&L: -₹1,48,248.84 (-24.42%) |
| **Realized Liquid Cash (Exits)** | ₹6,10,727.15 | Unlocked from Persistent, Bsoft, Aptus, IRFC |
| **Total Trading Net Worth** | **₹1,069,554.30** | Combined Equity + Cash Base |
| **Capital to Unlock from Restructuring** | **+₹2,34,681.10** | Expands active swing trading cash to **~₹8.45 Lakhs** |
