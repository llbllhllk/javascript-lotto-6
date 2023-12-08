import CONSTANTS from '../constants/constants.js';

class Ranking {
  #result;

  constructor(winningNumbers, lottos, bonusNumber) {
    this.#initialize();
    this.#evaluateMatches(winningNumbers, lottos, bonusNumber);
  }

  getRanking() {
    return this.#result;
  }

  #initialize() {
    this.#result = {
      three: 0,
      four: 0,
      five: 0,
      bonus: 0,
      six: 0,
    };
  }

  #evaluateMatches(winningNumbers, lottos, bonusNumber) {
    const winningNumbersSet = new Set(winningNumbers);
    lottos.forEach(lotto => {
      this.#checkMatches(lotto, winningNumbersSet, bonusNumber);
    });
  }

  #checkMatches(lotto, winningNumbersSet, bonusNumber) {
    if (this.#isMatched(lotto, winningNumbersSet, 5) && this.#isBonusMatched(lotto, bonusNumber))
      return (this.#result.bonus += 1);
    this.#result.three += this.#isMatched(lotto, winningNumbersSet, 3);
    this.#result.four += this.#isMatched(lotto, winningNumbersSet, 4);
    this.#result.five += this.#isMatched(lotto, winningNumbersSet, 5);
    this.#result.six += this.#isMatched(lotto, winningNumbersSet, 6);
  }

  #isMatched(lotto, winningNumbersSet, matched) {
    return [...lotto].filter(element => winningNumbersSet.has(element)).length === matched;
  }

  #isBonusMatched(lotto, bonusNumber) {
    return [...lotto].includes(bonusNumber);
  }
}

export default Ranking;
