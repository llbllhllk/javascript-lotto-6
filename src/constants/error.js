const lotto = Object.freeze({
  empty: '[ERROR] 로또 번호가 존재하지 않습니다.',
  notANumber: '[ERROR] 로또 번호가 숫자가 아닙니다.',
  duplicated: '[ERROR] 로또 번호가 중복되었습니다.',
  length: '[ERROR] 로또 번호는 6개여야 합니다.',
});

const bonusNumber = Object.freeze({
  empty: '[ERROR] 보너스 번호를 입력해주세요.',
  notANumber: '[ERROR] 숫자를 입력해주세요.',
  range: '[ERROR] 1~45사이의 번호를 입력해주세요.',
});

const winningNumbers = Object.freeze({
  empty: '[ERROR] 당첨 번호를 입력해주세요.',
  notANumber: '[ERROR] 숫자를 입력해주세요.',
  duplicated: '[ERROR] 값이 중복되었습니다.',
  separator: '[ERROR] 구분(,)을 잘 작성해주세요.',
  length: '[ERROR] 당첨 번호를 6개 입력해주세요.',
  range: '[ERROR] 1~45사이의 번호를 입력해주세요.',
});

const purchaseAmount = Object.freeze({
  empty: '[ERROR] 구입 금액을 입력해주세요.',
  notANumber: '[ERROR] 숫자를 입력해주세요.',
  multipleOfThousnad: '[ERROR] 1,000 단위의 구매 금액을 입력해주세요.',
});

const ERROR = Object.freeze({
  lotto,
  purchaseAmount,
  winningNumbers,
  bonusNumber,
});

export default ERROR;
