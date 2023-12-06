import Lotto from '../../src/domain/Lotto.js';
import { Random } from '@woowacourse/mission-utils';

// const mockRandoms = numbers => {
//   Random.pickUniqueNumbersInRange = jest.fn();
//   numbers.map(number => Random.pickUniqueNumbersInRange.mockReturnValueOnce(number));
// };

describe('Lotto 클래스 테스트', () => {
  describe('lotto 메서드는 로또 번호를 반환한다.', () => {
    const cases = [
      {
        numbers: [1, 2, 3, 4, 5, 6],
        expected: '[1, 2, 3, 4, 5, 6]',
      },
    ];

    test.each(cases)(
      '구매 개수인 $numbers 주어지는 경우 lotto()는 오름차순으로 정렬된  $expected를 반환한다.',
      ({ numbers, expected }) => {
        // when
        const lotto = new Lotto(numbers).lottoNumbers();

        // then
        expect(lotto).toEqual(expected);
      },
    );
  });
});
