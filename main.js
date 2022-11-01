'use Strict';

const spitText = () => {
  return 
 'An expression';
};

console.log(spitText());

const callBingo = (num) => {
 if (num > 5) {
  return 'Bingo!';
 } else {
  return 'Do it again!';
 }
};

console.log(callBingo(4));
console.log(callBingo(6));