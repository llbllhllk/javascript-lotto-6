import { Console } from '@woowacourse/mission-utils';
import MESSAGE from '../constants/message.js';
import PurchaseAmountValidator from '../validators/PurchaseAmountValidator.js';

const InputView = {
  async readPurchaseAmount() {
    const purchaseAmount = await Console.readLineAsync(MESSAGE.read.purchaseAmount);
    PurchaseAmountValidator.validatePurchaseAmount(purchaseAmount);

    return purchaseAmount;
  },

  async readWinningNumbers() {
    const winningNumbers = await Console.readLineAsync(MESSAGE.read.winningNumbers);

    return winningNumbers;
  },

  async readBonusNumber() {
    const bonusNumber = await Console.readLineAsync(MESSAGE.read.bonusNumber);

    return bonusNumber;
  },
};

export default InputView;
