import InputView from '../view/InputView.js';

class LottoController {
  constructor() {}

  start() {
    return this.inputPurchaseAmount();
  }

  async inputPurchaseAmount() {
    const purchaseAmount = await InputView.readPurchaseAmount();
  }
}

export default LottoController;
