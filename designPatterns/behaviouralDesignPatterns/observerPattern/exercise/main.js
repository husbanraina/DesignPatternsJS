import { InvestorA } from "./investorA.js";
import { InvestorB } from "./investorB.js";
import { StockMarket } from "./stockMarket.js";

const stockMarket = new StockMarket(5);

const investorA = new InvestorA();
const investorB = new InvestorB();


stockMarket.registerObserver(investorA);
stockMarket.registerObserver(investorB);

const updates = [
  ["AAPL", 110, 100],
  ["GOOG", 210, 200],
  ["TSLA", 305, 300],
  ["MSFT", 150, 140],
  ["AMZN", 500, 400],
];

updates.forEach((update, index) => {
  if (index === 4) {
    stockMarket.removeObserver(investorB);
  }

  const [symbol, newPrice, oldPrice] = update;
  stockMarket.setStockPrice(symbol, newPrice, oldPrice);
});