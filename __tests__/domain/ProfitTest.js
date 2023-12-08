import Profit from '../../src/domain/Profit.js';

describe('Profit 클래스 테스트', () => {
  describe('getProfit 메서드는 총 수익률을 반환한다.', () => {
    const cases = [
      {
        ranking: {
          three: 1,
          four: 0,
          five: 0,
          bonus: 0,
          six: 0,
        },
        purchaseAmount: 8000,
        expected: '62.5',
      },
      {
        ranking: {
          three: 0,
          four: 0,
          five: 0,
          bonus: 0,
          six: 1,
        },
        purchaseAmount: 8000,
        expected: '25000000.0',
      },
      {
        ranking: {
          three: 0,
          four: 0,
          five: 0,
          bonus: 1,
          six: 0,
        },
        purchaseAmount: 3000,
        expected: '1000000.0',
      },
    ];

    test.each(cases)(
      '통계결과인 $ranking, 구매 금액 $purchaseAmount이 주어지는 경우, getProfit()는 총 수익률 $expected를 반환한다.',
      ({ ranking, purchaseAmount, expected }) => {
        // when
        const profit = new Profit(ranking, purchaseAmount).getProfit();

        // then
        expect(profit).toEqual(expected);
      },
    );
  });
});
