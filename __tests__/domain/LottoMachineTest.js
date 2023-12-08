import { Random } from '@woowacourse/mission-utils';
import LottoMachine from '../../src/domain/LottoMachine.js';

const mockRandoms = numbers => {
  Random.pickUniqueNumbersInRange = jest.fn();
  numbers.map(number => Random.pickUniqueNumbersInRange.mockReturnValueOnce(number));
};

describe('LottoMachine 클래스 테스트', () => {
  describe('getLottos 메서드는 구매 개수 만큼 로또 번호들을 반환한다.', () => {
    const cases = [
      {
        numbers: [
          [1, 2, 3, 4, 5, 6],
          [1, 2, 3, 4, 5, 6],
          [1, 2, 3, 4, 5, 6],
        ],
        numberOfLotto: 3,
        expected: [
          [1, 2, 3, 4, 5, 6],
          [1, 2, 3, 4, 5, 6],
          [1, 2, 3, 4, 5, 6],
        ],
      },
      {
        numbers: [
          [1, 2, 3, 4, 5, 6],
          [1, 3, 5, 12, 24, 32],
          [3, 10, 14, 23, 25, 45],
        ],
        numberOfLotto: 3,
        expected: [
          [1, 2, 3, 4, 5, 6],
          [1, 3, 5, 12, 24, 32],
          [3, 10, 14, 23, 25, 45],
        ],
      },
      {
        numbers: [
          [4, 23, 25, 32, 35, 43],
          [5, 11, 17, 18, 22, 34],
          [6, 10, 14, 24, 35, 44],
        ],
        numberOfLotto: 3,
        expected: [
          [4, 23, 25, 32, 35, 43],
          [5, 11, 17, 18, 22, 34],
          [6, 10, 14, 24, 35, 44],
        ],
      },
    ];

    test.each(cases)(
      'getLottos()는 구매 개수 만큼 로또 번호들을 반환한다.',
      ({ numbers, numberOfLotto, expected }) => {
        // when
        mockRandoms(numbers);
        const lottos = new LottoMachine(numberOfLotto).getLottos();

        // then
        expect(lottos).toStrictEqual(expected);
      },
    );
  });

  describe('getLottosString 메서드는 구매 개수 만큼 로또 번호들을 반환한다.', () => {
    const cases = [
      {
        numbers: [
          [1, 2, 3, 4, 5, 6],
          [1, 2, 3, 4, 5, 6],
          [1, 2, 3, 4, 5, 6],
        ],
        numberOfLotto: 3,
        expected: ['[1, 2, 3, 4, 5, 6]', '[1, 2, 3, 4, 5, 6]', '[1, 2, 3, 4, 5, 6]'],
      },
      {
        numbers: [
          [1, 2, 3, 4, 5, 6],
          [1, 3, 5, 12, 24, 32],
          [3, 10, 14, 23, 25, 45],
        ],
        numberOfLotto: 3,
        expected: ['[1, 2, 3, 4, 5, 6]', '[1, 3, 5, 12, 24, 32]', '[3, 10, 14, 23, 25, 45]'],
      },
      {
        numbers: [
          [4, 23, 25, 32, 35, 43],
          [5, 11, 17, 18, 22, 34],
          [6, 10, 14, 24, 35, 44],
        ],
        numberOfLotto: 3,
        expected: ['[4, 23, 25, 32, 35, 43]', '[5, 11, 17, 18, 22, 34]', '[6, 10, 14, 24, 35, 44]'],
      },
    ];

    test.each(cases)(
      'getLottos()는 구매 개수 만큼 로또 번호들을 반환한다.',
      ({ numbers, numberOfLotto, expected }) => {
        // when
        mockRandoms(numbers);
        const lottos = new LottoMachine(numberOfLotto).getLottosString();

        // then
        expect(lottos).toStrictEqual(expected);
      },
    );
  });
});
