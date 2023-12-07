import PurchaseAmountValidator from '../utils/validators/PurchaseAmountValidator.js';

class PurchaseAmount {
  #formattedAmount;

  constructor(purchaseAmount) {
    PurchaseAmountValidator.validatePurchaseAmount(purchaseAmount);
    this.#formattedAmount = this.#formatPurchaseAmount(purchaseAmount);
  }

  getFormattedAmount() {
    return this.#formattedAmount;
  }

  #formatPurchaseAmount(purchaseAmount) {
    return Number(purchaseAmount);
  }
}

export default PurchaseAmount;
