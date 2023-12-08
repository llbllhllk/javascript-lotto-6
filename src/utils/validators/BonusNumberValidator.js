import CONSTANTS from '../../constants/constants.js';
import ERROR from '../../constants/error.js';

class BonusNumberValidator {
  static validateBonusNumber(bonusNumber) {
    const validators = [this.#validateEmpty, this.#validateNaN, this.#validateRange];
    validators.forEach(validator => validator(bonusNumber));
  }

  static #validateEmpty(bonusNumber) {
    if (bonusNumber.length === CONSTANTS.number.zero) throw new Error(ERROR.bonusNumber.empty);
  }

  static #validateNaN(bonusNumber) {
    if (Number.isNaN(Number(bonusNumber))) throw new Error(ERROR.bonusNumber.notANumber);
  }

  static #validateRange(bonusNumber) {
    if (Number(bonusNumber) < CONSTANTS.lotto.min || Number(bonusNumber) > CONSTANTS.lotto.max)
      throw new Error(ERROR.bonusNumber.range);
  }
}

export default BonusNumberValidator;
