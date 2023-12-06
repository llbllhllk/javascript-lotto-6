import CONSTANTS from '../constants/constants.js';
import LottoValidator from '../validators/LottoValidator.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    LottoValidator.validateLotto(numbers);
    this.#numbers = this.#ascendingSort(numbers);
  }

  lottoNumbers() {
    return `[${this.#numbers.join(CONSTANTS.lotto.separator)}]`;
  }

  #ascendingSort(numbers) {
    return numbers.slice().sort((a, b) => a - b);
  }
}

export default Lotto;
