import { Console } from '@woowacourse/mission-utils';

const OutputView = {
  printNumberOfLottoString(numberOfLotto) {
    Console.print(`${numberOfLotto}개를 구매했습니다.`);
  },

  printLottosString(lottos) {
    lottos.forEach(lotto => Console.print(lotto));
  },
};

export default OutputView;
