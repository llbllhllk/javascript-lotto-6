import LottoService from '../service/LottoService.js';
import InputView from '../view/InputView.js';
import OutputView from '../view/OutputView.js';

class LottoController {
  #lottoService;

  constructor() {
    this.#lottoService = new LottoService();
  }

  start() {
    return this.#inputPurchaseAmount();
  }

  async #inputPurchaseAmount() {
    const purchaseAmount = await InputView.readPurchaseAmount();
    const numberOfLotto = this.#lottoService.numberOfLotto(purchaseAmount);
    OutputView.printNumberOfLotto(numberOfLotto);
    
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
