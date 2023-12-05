import { Console } from '@woowacourse/mission-utils';
import MESSAGE from '../constants/message.js';
import PurchaseAmountValidator from '../validators/PurchaseAmountValidator.js';
import WinningNumbersValidator from '../validators/WinningNumbersValidator.js';
import BonusNumberValidator from '../validators/BonusNumberValidator.js';
import CONSTANTS from '../constants/constants.js';

const InputView = {
  async readPurchaseAmount() {
    const purchaseAmount = await Console.readLineAsync(MESSAGE.read.purchaseAmount);
    PurchaseAmountValidator.validatePurchaseAmount(purchaseAmount);

    return Number(purchaseAmount);
  },

  async readWinningNumbers() {
    const winningNumbers = await Console.readLineAsync(MESSAGE.read.winningNumbers);
    WinningNumbersValidator.validateWinningrNumbers(winningNumbers);

    return winningNumbers
      .split(CONSTANTS.winningNumbers.separator)
      .map(number => number.trim())
      .filter(Boolean);
  },

  async readBonusNumber() {
    const bonusNumber = await Console.readLineAsync(MESSAGE.read.bonusNumber);
    BonusNumberValidator.validateBonusNumber(bonusNumber);

    return Number(bonusNumber);
  },
};

export default InputView;
