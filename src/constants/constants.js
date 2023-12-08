const prize = Object.freeze({
  threeMatch: 5000,
  fourMatch: 50000,
  fiveMatch: 1500000,
  bonusMatch: 30000000,
  sixMatch: 2000000000,
});

const purchaseAmount = Object.freeze({
  thousand: 1000,
});

const winningNumbers = Object.freeze({
  separator: ',',
});

const lotto = Object.freeze({
  length: 6,
  min: 1,
  max: 45,
  separator: ', ',
});

const number = Object.freeze({
  zero: 0,
});

const CONSTANTS = Object.freeze({
  purchaseAmount,
  winningNumbers,
  number,
  lotto,
  prize,
});

export default CONSTANTS;
