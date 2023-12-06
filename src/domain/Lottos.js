import { Random } from '@woowacourse/mission-utils';
import Lotto from '../domain/Lotto.js';
import CONSTANTS from '../constants/constants.js';

class Lottos {
  #lottos = [];

  generateLottos(numberOfLotto) {
    this.#lottos = Array.from({ length: numberOfLotto }, () => this.#generateLotto());

    return this.#lottos;
  }

  #generateLotto() {
    const numbers = this.#generateLottoNumbers();
    return new Lotto(numbers).lottoNumbers();
  }

  #generateLottoNumbers() {
    return Random.pickUniqueNumbersInRange(
      CONSTANTS.lotto.min,
      CONSTANTS.lotto.max,
      CONSTANTS.lotto.length,
    );
  }
}

export default Lottos;
