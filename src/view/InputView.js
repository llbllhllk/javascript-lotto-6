import { Console } from '@woowacourse/mission-utils';
import MESSAGE from '../constants/message.js';

const InputView = {
  async readPurchaseAmount() {
    const purchaseAmount = Console.readLineAsync(MESSAGE.read.purchaseAmount);

    return purchaseAmount;
  },

  async readWinningNumbers() {
    const winningNumbers = Console.readLineAsync(MESSAGE.read.winningNumbers);

    return winningNumbers;
  },

  async readBonusNumber() {
    const bonusNumber = Console.readLineAsync(MESSAGE.read.bonusNumber);

    return bonusNumber;
  },
};

export default InputView;
