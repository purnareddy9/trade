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

* **[`VOLUME_MARKET_CAP_AND_BOUNCE_CONFIRMATION_PLAYBOOK.md`](./VOLUME_MARKET_CAP_AND_BOUNCE_CONFIRMATION_PLAYBOOK.md)**:
  * **What Volume Is**: The Fuel Principle, Lie Detector concept, and the 4 Volume-Price Quadrants.
  * **The 3 Catastrophic Loss Traps**: Market Cap & Penny Stock lower circuit traps, the RSI < 30 "Oversold" fallacy, and the 50/200 EMA Death Cross resistance traps.
  * **True Bounce vs. Dead-Cat Traps**: 3-step confirmation framework.
  * **Visual Candlestick Guides**: [`candlestick_bounce_guide.jpg`](./candlestick_bounce_guide.jpg) & [`candlestick_bounce_patterns.svg`](./candlestick_bounce_patterns.svg).
  * **4 Step-by-Step Trade Examples**:
    * Bullish Hammer at 200 EMA (`ICICIBANK`)
    * Bullish Engulfing with 2x Volume Spike (`SBIN`)
    * Morning Star Reversal at 50 EMA (`SUNPHARMA`)
    * Avoiding Dead-Cat False Traps (`SUZLON` Case Study)

* **[`INTRADAY_HIGH_MOMENTUM_TRADING_GUIDE.md`](./INTRADAY_HIGH_MOMENTUM_TRADING_GUIDE.md)**:
  * **Intraday vs. Swing**: Key structural differences (5m/15m timeframes, VWAP, 03:15 PM exit).
  * **The Holy Trinity**: VWAP, 9 & 21 EMA on 5m, and Relative Volume (RVOL ≥ 2.0).
  * **Morning Stock Selection**: 4-step morning scanner (08:45 – 09:15 AM) using sector strength, pre-open gaps, and catalysts.
  * **Top 3 Strategies**: 15-Minute Opening Range Breakout (ORB), VWAP + 9 EMA Pullback, and Afternoon HOD Breakout.
  * **Real Execution Walkthrough**: Step-by-step numbers on BSOFT intraday momentum trade.
  * **The 5 Survival Rules**: Daily loss limit, maximum 3 trades, and terminal hard stop-loss.

* **[`EMA_HOLDINGS_AUDIT_WHAT_TO_EXIT.md`](./EMA_HOLDINGS_AUDIT_WHAT_TO_EXIT.md)**:
  * **21-Stock EMA Audit**: Concrete 20, 50, and 200 EMA numbers for every holding in your portfolio.
  * **Clear Action Classification**:
    * 🟢 **The Keepers (DO NOT EXIT)**: `ETERNAL`, `PNB`, `IDFCFIRSTB`, `RELIANCE`, `HDFCBANK`.
    * 🔴 **Immediate Exits (Salvage ₹1.60L)**: `SUZLON`, `YESBANK`, `MISHTANN`, `ALOKINDS`, `EASEMYTRIP`, `KOHINOOR`.
    * 🟡 **Bounce Targets (Sell into EMA Resistance)**: `SJVN`, `IRCON`, `BAJAJHFL`, `JIOFIN` (50%), `WIPRO` (50%).
    * 🟣 **Profit Locks & Declutter**: `IDEA` (+42%), `UJJIVANSFB` (+56%), `NHPC`, `INOXWIND`, `NTPC`.

* **[`EMA_20_50_200_COMPLETE_GUIDE.md`](./EMA_20_50_200_COMPLETE_GUIDE.md)**:
  * **What EMA Is**: Mathematical weighting differences between SMA and EMA.
  * **The 3 Pillars**: 20 EMA (Speedometer), 50 EMA (Compass), and 200 EMA (Border Wall).
  * **The 3-EMA Alignment System**: Green light (Stage 2 Uptrend) vs. Red light (Stage 4 Downtrend).
  * **Golden Cross vs. Death Cross**: Institutional algorithmic triggers.
  * **Practical Tactics**: The 20 EMA trailing stop, 50 EMA institutional dip buying, and avoiding the resistance ceiling trap.

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
