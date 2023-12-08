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
      this.#checkMatchThree(lotto, winningNumbersSet);
      this.#checkMatchFour(lotto, winningNumbersSet);
      this.#checkMatchBonus(lotto, winningNumbersSet, bonusNumber);
      this.#checkMatchSix(lotto, winningNumbersSet);
    });
  }

  #checkMatchThree(lotto, winningNumbersSet) {
    this.#result.three += this.#isMatched(lotto, winningNumbersSet, CONSTANTS.match.three);
  }

  #checkMatchFour(lotto, winningNumbersSet) {
    this.#result.four += this.#isMatched(lotto, winningNumbersSet, CONSTANTS.match.four);
  }

  #checkMatchBonus(lotto, winningNumbersSet, bonusNumber) {
    if (
      this.#isMatched(lotto, winningNumbersSet, CONSTANTS.match.five) &&
      this.#isBonusMatched(lotto, bonusNumber)
    ) {
      this.#result.bonus += 1;
      return;
    }
    this.#checkMatchFive(lotto, winningNumbersSet);
  }

  #checkMatchFive(lotto, winningNumbersSet) {
    this.#result.five += this.#isMatched(lotto, winningNumbersSet, CONSTANTS.match.five);
  }

  #checkMatchSix(lotto, winningNumbersSet) {
    this.#result.six += this.#isMatched(lotto, winningNumbersSet, CONSTANTS.match.six);
  }

  #isMatched(lotto, winningNumbersSet, matched) {
    return [...lotto].filter(element => winningNumbersSet.has(element)).length === matched;
  }

  #isBonusMatched(lotto, bonusNumber) {
    return [...lotto].includes(bonusNumber);
  }
}

export default Ranking;
