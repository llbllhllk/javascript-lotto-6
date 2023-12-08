import ERROR from '../../src/constants/error.js';
import LottoValidator from '../../src/utils/validators/LottoValidator.js';

describe('로또 번호 예외 상황 테스트', () => {
  const cases = [
    {
      input: [],
      description: '로또 번호가 없을 경우 예외처리를 한다.',
      expected: ERROR.lotto.empty,
    },
    {
      input: ['a', 1, 2, 3, 4, 5],
      description: '숫자가 아닌 경우 예외처리를 한다.',
      expected: ERROR.lotto.notANumber,
    },
    {
      input: [1, 1, 2, 3, 4, 5],
      description: '중복된 경우 예외처리를 한다.',
      expected: ERROR.lotto.duplicated,
    },
    {
      input: [1, 2, 3, 4, 5],
      description: '로또 번호가 6개가 아닌 경우 예외처리를 한다',
      expected: ERROR.lotto.length,
    },
  ];

  test.each(cases)('사용자 $input을 통해 에러를 반환한다.', ({ input, expected }) => {
    // when
    const result = () => LottoValidator.validateLotto(input);

    // then
    expect(result).toThrow(expected);
  });
});
