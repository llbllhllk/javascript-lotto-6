import InputView from '../view/InputView.js';

class LottoController {
  constructor() {}

  start() {
    return this.#inputPurchaseAmount();
  }

  async #inputPurchaseAmount() {
    const purchaseAmount = await InputView.readPurchaseAmount();

    return this.#inputWinningNumbers();
  }

  async #inputWinningNumbers() {
    const winningNumbers = await InputView.readWinningNumbers();

    return this.#inputBonusNumber();
  }

  async #inputBonusNumber() {
    const bonusNumber = await InputView.readBonusNumber();
  }
}

export default LottoController;
