class LottoController {
  #lottoService;

  #inputView;

  #outputView;

  constructor(lottoService, inputView, outputView) {
    this.#lottoService = lottoService;
    this.#inputView = inputView;
    this.#outputView = outputView;
  }

  start() {
    return this.#inputPurchaseAmount();
  }

  async #inputPurchaseAmount() {
    const purchaseAmount = await this.#inputView.readPurchaseAmount();

    return this.#printNumberOfLotto(purchaseAmount);
  }

  #printNumberOfLotto(purchaseAmount) {
    const numberOfLotto = this.#lottoService.numberOfLotto(purchaseAmount);
    this.#outputView.printNumberOfLottoString(numberOfLotto);

    return this.#printLottos(purchaseAmount);
  }

  #printLottos(purchaseAmount) {
    const lottos = this.#lottoService.lottos(purchaseAmount);
    this.#outputView.printLottosString(lottos);

    return this.#inputWinningNumbers(lottos);
  }

  async #inputWinningNumbers() {
    const winningNumbers = await this.#inputView.readWinningNumbers();

    return this.#inputBonusNumber();
  }

  async #inputBonusNumber() {
    const bonusNumber = await this.#inputView.readBonusNumber();
  }
}

export default LottoController;
