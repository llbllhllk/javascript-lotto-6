import Ranking from '../../src/domain/Ranking.js';

describe('Ranking 클래스 테스트', () => {
  describe('getRanking 메서드는 통계 결과를 객체로 반환한다.', () => {
    const cases = [
      {
        winningNumbers: [1, 2, 3, 4, 5, 14],
        lottos: [
          [1, 2, 3, 4, 5, 6],
          [2, 3, 4, 7, 8, 9],
        ],
        bonusNumber: 14,
        expected: {
          three: 1,
          four: 0,
          five: 1,
          bonus: 0,
          six: 0,
        },
      },
      {
        winningNumbers: [1, 5, 14, 20, 23, 34],
        lottos: [
          [1, 5, 14, 20, 23, 34],
          [1, 5, 14, 20, 23, 30],
        ],
        bonusNumber: 30,
        expected: {
          three: 0,
          four: 0,
          five: 0,
          bonus: 1,
          six: 1,
        },
      },
    ];

    test.each(cases)(
      '당첨 번호 $winningNumbers와 로또 번호 $lottos, 보너스 번호 $bonusNumber이 주어지는 경우, getRanking()는 통계 결과 $expected를 반환한다.',
      ({ winningNumbers, lottos, bonusNumber, expected }) => {
        // when
        const ranking = new Ranking(winningNumbers, lottos, bonusNumber).getRanking();

        // then
        expect(ranking).toEqual(expected);
      },
    );
  });
});
