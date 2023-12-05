import CONSTANTS from '../constants/constants.js';
import ERROR from '../constants/error.js';

class PurchaseAmountValidator {
  static validatePurchaseAmount(purchaseAmount) {
    const validators = [this.#validateEmpty, this.#validateNaN, this.#validateMultipleOfThousand];
    validators.forEach(validator => validator(purchaseAmount));
  }

  static #validateEmpty(purchaseAmount) {
    if (purchaseAmount.length === CONSTANTS.number.zero)
      throw new Error(ERROR.purchaseAmount.empty);
  }

  static #validateNaN(purchaseAmount) {
    if (Number.isNaN(Number(purchaseAmount))) throw new Error(ERROR.purchaseAmount.notANumber);
  }

  static #validateMultipleOfThousand(purchaseAmount) {
    if (Number(purchaseAmount) % CONSTANTS.purchaseAmount.thousand !== CONSTANTS.number.zero)
      throw new Error(ERROR.purchaseAmount.multipleOfThousnad);
  }
}

export default PurchaseAmountValidator;
