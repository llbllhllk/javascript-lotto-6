import { Console } from '@woowacourse/mission-utils';
import MESSAGE from '../constants/message.js';

const InputView = {
  async readPurchaseAmount() {
    const purchaseAmount = Console.readLineAsync(MESSAGE.read.purchaseAmount);

    return purchaseAmount;
  },
};

export default InputView;
