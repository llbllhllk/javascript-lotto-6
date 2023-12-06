import CONSTANTS from '../constants/constants.js';
import Lottos from '../domain/Lottos.js';

class LottoService {
  #lottosInstance;

  constructor() {
    this.#lottosInstance = new Lottos();
  }

  numberOfLotto(purchaseAmount) {
    return purchaseAmount / CONSTANTS.purchaseAmount.thousand;
  }

  lottos(purchaseAmount) {
    const numberOfLotto = this.numberOfLotto(purchaseAmount);
    return this.#lottosInstance.generateLottos(numberOfLotto);
  }
}

export default LottoService;
