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
    this.#lottoService.setPurchaseAmount(purchaseAmount);

    return this.#printNumberOfLotto();
  }

  #printNumberOfLotto() {
    const numberOfLotto = this.#lottoService.calculateNumberOfLotto();
    this.#outputView.printNumberOfLottoString(numberOfLotto);

    return this.#printLottos();
  }

  #printLottos() {
    this.#lottoService.setLottos();
    const lottosString = this.#lottoService.getLottosString();
    this.#outputView.printLottosString(lottosString);

    return this.#inputWinningNumbers();
  }

  async #inputWinningNumbers() {
    const winningNumbers = await this.#inputView.readWinningNumbers();
    this.#lottoService.setWinningNumbers(winningNumbers);

    return this.#inputBonusNumber();
  }

  async #inputBonusNumber() {
    const bonusNumber = await this.#inputView.readBonusNumber();
    this.#lottoService.setBonusNumber(bonusNumber);

    return this.#printRanking();
  }

  #printRanking() {
    this.#lottoService.setRanking();
    const ranking = this.#lottoService.getRanking();
  }
}

export default LottoController;
