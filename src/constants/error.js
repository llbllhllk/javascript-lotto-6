const purchaseAmount = Object.freeze({
  empty: '[ERROR] 구입 금액을 입력해주세요.',
  notANumber: '[ERROR] 숫자를 입력해주세요.',
  multipleOfThousnad: '[ERROR] 1,000 단위의 구매 금액을 입력해주세요.',
});

const ERROR = Object.freeze({
  purchaseAmount,
});

export default ERROR;
