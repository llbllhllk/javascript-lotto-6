import CONSTANTS from '../constants/constants.js';
import WinningNumbersValidator from '../utils/validators/WinningNumbersValidator.js';

class WinningNumbers {
  #formattedWinningNumbers;

  constructor(numbers) {
    WinningNumbersValidator.validateWinningrNumbers(numbers);
    this.#formattedWinningNumbers = this.#formatWinningNumbers(numbers);
  }

  getFormattedWinningNumbers() {
    return this.#formattedWinningNumbers;
  }

  #formatWinningNumbers(numbers) {
    return numbers
      .split(CONSTANTS.winningNumbers.separator)
      .map(number => number.trim())
      .filter(Boolean);
  }
}

export default WinningNumbers;
