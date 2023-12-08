import CONSTANTS from '../constants/constants.js';
import BonusNumber from '../domain/BonusNumber.js';
import LottoMachine from '../domain/LottoMachine.js';
import PurchaseAmount from '../domain/PurchaseAmount.js';
import Ranking from '../domain/Ranking.js';
import WinningNumbers from '../domain/WinningNumbers.js';

class LottoService {
  #purchaseAmount;

  #bonusNumber;

  #lottos;

  #winningNumbers;

  #ranking;

  setPurchaseAmount(purchaseAmount) {
    this.#purchaseAmount = new PurchaseAmount(purchaseAmount).getFormattedAmount();
  }

  calculateNumberOfLotto() {
    return this.#purchaseAmount / CONSTANTS.purchaseAmount.thousand;
  }

  setBonusNumber(number) {
    this.#bonusNumber = new BonusNumber(number).getformattedBonusNumber();
  }

  setWinningNumbers(numbers) {
    this.#winningNumbers = new WinningNumbers(numbers).getFormattedWinningNumbers();
  }

  setLottos() {
    const numberOfLotto = this.calculateNumberOfLotto();
    this.#lottos = new LottoMachine(numberOfLotto);
  }

  setRanking() {
    this.#ranking = new Ranking(this.#winningNumbers, this.getLottos(), this.#bonusNumber);
  }

  getLottosString() {
    return this.#lottos.getLottosString();
  }

  getLottos() {
    return this.#lottos.getLottos();
  }

  getRanking() {
    return this.#ranking.getRanking();
  }
}

export default LottoService;
