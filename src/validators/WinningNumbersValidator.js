import CONSTANTS from '../constants/constants.js';
import ERROR from '../constants/error.js';

class WinningNumbersValidator {
  static validateWinningrNumbers(winningNumbers) {
    const formattedWinningNumbers = this.#formatWinningNumbers(winningNumbers);
    this.#validateEmpty(formattedWinningNumbers);
    this.#validateSeparator(winningNumbers);
    this.#validateLength(formattedWinningNumbers);
    this.#validateRange(formattedWinningNumbers);
    this.#validateNaN(formattedWinningNumbers);
    this.#validateDuplicated(formattedWinningNumbers);
  }

  static #validateEmpty(formattedWinningNumbers) {
    if (formattedWinningNumbers.length === CONSTANTS.number.zero)
      throw new Error(ERROR.winningNumbers.empty);
  }

  static #validateNaN(formattedWinningNumbers) {
    formattedWinningNumbers.forEach(number => {
      if (Number.isNaN(Number(number))) throw new Error(ERROR.winningNumbers.notANumber);
    });
  }

  static #validateSeparator(winningNumbers) {
    const emptyNumberCount = winningNumbers
      .split(CONSTANTS.winningNumbers.separator)
      .map(number => number.trim())
      .filter(number => !number.trim()).length;
    if (emptyNumberCount > CONSTANTS.number.zero) throw new Error(ERROR.winningNumbers.separator);
  }

  static #validateDuplicated(formattedWinningNumbers) {
    if (formattedWinningNumbers.length !== new Set(formattedWinningNumbers).size)
      throw new Error(ERROR.winningNumbers.duplicated);
  }

  static #validateLength(formattedWinningNumbers) {
    if (formattedWinningNumbers.length !== CONSTANTS.lotto.length)
      throw new Error(ERROR.winningNumbers.length);
  }

  static #validateRange(formattedWinningNumbers) {
    formattedWinningNumbers.forEach(number => {
      if (Number(number) < CONSTANTS.lotto.min || Number(number) > CONSTANTS.lotto.max)
        throw new Error(ERROR.winningNumbers.range);
    });
  }

  static #formatWinningNumbers(winningNumbers) {
    return winningNumbers
      .split(CONSTANTS.winningNumbers.separator)
      .map(number => number.trim())
      .filter(Boolean);
  }
}
export default WinningNumbersValidator;
