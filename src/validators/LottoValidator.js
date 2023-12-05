import CONSTANTS from '../constants/constants.js';
import ERROR from '../constants/error.js';

class LottoValidator {
  static validateLotto(numbers) {
    const validators = [
      this.#validateEmpty,
      this.#validateNaN,
      this.#validateDuplicated,
      this.#validateLength,
    ];
    validators.forEach(validator => validator(numbers));
  }

  static #validateEmpty(numbers) {
    if (numbers.length === CONSTANTS.number.zero) throw new Error(ERROR.lotto.empty);
  }

  static #validateNaN(numbers) {
    numbers.forEach(number => {
      if (Number.isNaN(Number(number))) throw new Error(ERROR.lotto.notANumber);
    });
  }

  static #validateDuplicated(numbers) {
    if (numbers.length !== new Set(numbers).size) throw new Error(ERROR.lotto.duplicated);
  }

  static #validateLength(numbers) {
    if (numbers.length !== CONSTANTS.lotto.length) throw new Error(ERROR.lotto.length);
  }
}

export default LottoValidator;
