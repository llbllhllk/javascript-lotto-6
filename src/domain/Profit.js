import CONSTANTS from '../constants/constants.js';

class Profit {
  #profit;

  constructor(ranking, purchaseAmount) {
    this.#profit = this.#calculateProfit(ranking, purchaseAmount);
  }

  getProfit() {
    return this.#profit;
  }

  #calculateProfit(ranking, purchaseAmount) {
    const totalPrize = this.#calculateTotalPrize(ranking);
    const profit = (totalPrize / purchaseAmount) * CONSTANTS.profit.percentage;

    return this.#roundProfit(profit);
  }

  #calculateTotalPrize(ranking) {
    return Object.keys(ranking).reduce((total, category) => {
      return total + ranking[category] * CONSTANTS.prize[category];
    }, 0);
  }

  #roundProfit(profit) {
    return Number(profit).toFixed(CONSTANTS.profit.profitRoundDecimals);
  }
}

export default Profit;
