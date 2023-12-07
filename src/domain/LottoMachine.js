import { Random } from '@woowacourse/mission-utils';
import Lotto from '../domain/Lotto.js';
import CONSTANTS from '../constants/constants.js';

class LottoMachine {
  #lottos;

  constructor(numberOfLotto) {
    this.#generateLottos(numberOfLotto);
  }

  getLottos() {
    return this.#lottos.map(lotto => lotto.getAscendingSortLotto());
  }

  getLottosString() {
    return this.#lottos.map(lotto => lotto.getLottoString());
  }

  #generateLottos(numberOfLotto) {
    this.#lottos = Array.from({ length: numberOfLotto }, () => this.#generateLottoNumber());
  }

  #generateLottoNumber() {
    const numbers = this.#generateRandomNumbers();
    return new Lotto(numbers);
  }

  #generateRandomNumbers() {
    return Random.pickUniqueNumbersInRange(
      CONSTANTS.lotto.min,
      CONSTANTS.lotto.max,
      CONSTANTS.lotto.length,
    );
  }
}

export default LottoMachine;
