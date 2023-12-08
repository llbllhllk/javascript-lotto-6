import { Console } from '@woowacourse/mission-utils';
import MESSAGE from '../constants/message.js';

const OutputView = {
  printNumberOfLottoString(numberOfLotto) {
    Console.print(`${numberOfLotto}개를 구매했습니다.`);
  },

  printLottosString(lottos) {
    lottos.forEach(lotto => Console.print(lotto));
  },

  printRankingString(ranking) {
    Console.print(MESSAGE.print.rankingResult);
    Console.print(MESSAGE.ranking.threeMatch + `${ranking.three}개`);
    Console.print(MESSAGE.ranking.fourMatch + `${ranking.four}개`);
    Console.print(MESSAGE.ranking.fiveMatch + `${ranking.five}개`);
    Console.print(MESSAGE.ranking.bonusMatch + `${ranking.bonus}개`);
    Console.print(MESSAGE.ranking.sixMatch + `${ranking.six}개`);
  },
};

export default OutputView;
