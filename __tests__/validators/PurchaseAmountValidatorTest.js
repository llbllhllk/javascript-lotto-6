import ERROR from '../../src/constants/error.js';
import PurchaseAmountValidator from '../../src/validators/PurchaseAmountValidator.js';

describe('구매 금액 예외 상황 테스트', () => {
  const cases = [
    {
      input: '',
      description: '아무값도 입력하지 않을 경우 예외처리를 한다.',
      expected: ERROR.purchaseAmount.empty,
    },
  ];

  test.each(cases)('구매 금액 $input을 통해 에러를 반환한다.', ({ input, expected }) => {
    // when
    const result = () => PurchaseAmountValidator.validatePurchaseAmount(input);

    // then
    expect(result).toThrow(expected);
  });
});
