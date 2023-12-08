const profit = Object.freeze({
  percentage: 100,
  profitRoundDecimals: 1,
});

const match = Object.freeze({
  three: 3,
  four: 4,
  five: 5,
  six: 6,
});

const prize = Object.freeze({
  three: 5000,
  four: 50000,
  five: 1500000,
  bonus: 30000000,
  six: 2000000000,
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
  profit,
  match,
});

export default CONSTANTS;
