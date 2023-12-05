import ERROR from '../../src/constants/error.js';
import BonusNumberValidator from '../../src/validators/BonusNumberValidator.js';

describe('보너스 번호 예외 상황 테스트', () => {
  const cases = [
    {
      input: '',
      description: '아무값도 입력하지 않을 경우 예외처리를 한다.',
      expected: ERROR.bonusNumber.empty,
    },
    {
      input: 'a',
      description: '숫자가 아닌 값을 입력했을 경우 예외처리를 한다.',
      expected: ERROR.bonusNumber.notANumber,
    },
    {
      input: '0',
      description: '1~45사이의 번호를 입력하지 않았을 경우 예외처리를 한다.',
      expected: ERROR.bonusNumber.range,
    },
  ];

  test.each(cases)('보너스 번호 $input을 통해 에러를 반환한다.', ({ input, expected }) => {
    // when
    const result = () => BonusNumberValidator.validateBonusNumber(input);

    // then
    expect(result).toThrow(expected);
  });
});
