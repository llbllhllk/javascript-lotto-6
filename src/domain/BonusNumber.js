import BonusNumberValidator from '../utils/validators/BonusNumberValidator.js';

class BonusNumber {
  #formattedBonusNumber;

  constructor(number) {
    BonusNumberValidator.validateBonusNumber(number);
    this.#formattedBonusNumber = this.#formatBonusNumber(number);
  }

  getformattedBonusNumber() {
    return this.#formattedBonusNumber;
  }

  #formatBonusNumber(number) {
    return Number(number);
  }
}

export default BonusNumber;
