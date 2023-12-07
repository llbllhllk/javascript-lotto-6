import ERROR from '../../src/constants/error.js';
import WinningNumbersValidator from '../../src/utils/validators/WinningNumbersValidator.js';

describe('당첨 번호 예외 상황 테스트', () => {
  const cases = [
    {
      input: '',
      description: '값을 입력하지 않았을 경우 예외처리를 한다.',
      expected: ERROR.winningNumbers.empty,
    },
    {
      input: 'a,2,3,4,5,6',
      description: '숫자가 아닌 경우 예외처리를 한다.',
      expected: ERROR.winningNumbers.notANumber,
    },
    {
      input: ',2,3,4,5,',
      description: '구분을 잘못 입력 했을 경우 예외처리를 한다.',
      expected: ERROR.winningNumbers.separator,
    },
    {
      input: '1,1,2,3,4,5',
      description: '당첨 번호가 중복될 경우 예외처리를 한다.',
      expected: ERROR.winningNumbers.duplicated,
    },
    {
      input: '0,2,3,4,5,56',
      description: '1~45의 숫자가 아닌 경우 예외처리를 한다',
      expected: ERROR.winningNumbers.range,
    },
    {
      input: '1,2,3,4,5',
      description: '당첨 번호가 6개가 아닌 경우 예외처리를 한다',
      expected: ERROR.winningNumbers.length,
    },
  ];

  test.each(cases)('당첨 번호 $input을 통해 에러를 반환한다.', ({ input, expected }) => {
    // when
    const result = () => WinningNumbersValidator.validateWinningrNumbers(input);

    // then
    expect(result).toThrow(expected);
  });
});
