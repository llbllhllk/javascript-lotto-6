const read = Object.freeze({
  purchaseAmount: '구입금액을 입력해 주세요.\n',
  winningNumbers: '\n당첨 번호를 입력해 주세요.\n',
  bonusNumber: '\n보너스 번호를 입력해 주세요.\n',
});

const ranking = Object.freeze({
  threeMatch: '3개 일치 (5,000원) - ',
  fourMatch: '4개 일치 (50,000원) - ',
  fiveMatch: '5개 일치 (1,500,000원) - ',
  bonusMatch: '5개 일치, 보너스 볼 일치 (30,000,000원) - ',
  sixMatch: '6개 일치 (2,000,000,000원) - ',
});

const print = Object.freeze({
  rankingResult: '\n당첨통계\n---',
});

const MESSAGE = Object.freeze({
  read,
  ranking,
  print,
});

export default MESSAGE;
