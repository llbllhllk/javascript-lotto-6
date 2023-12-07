import CONSTANTS from '../constants/constants.js';
import BonusNumber from '../domain/BonusNumber.js';
import LottoMachine from '../domain/LottoMachine.js';
import PurchaseAmount from '../domain/PurchaseAmount.js';
import WinningNumbers from '../domain/WinningNumbers.js';

class LottoService {
  #purchaseAmount;

  #bonusNumber;

  #lottos;

  #winningNumbers;

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

  getLottosString() {
    return this.#lottos.getLottosString();
  }
}

export default LottoService;
