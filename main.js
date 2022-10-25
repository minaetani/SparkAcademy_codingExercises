'use Strict';

const spitText = () => {
   const textOne = 'First Sentence'; 
   const textTwo = 'Second Sentence' ;
   console.log(textOne);  
   console.log(textTwo);
  return 
    textOne;
    textTwo;
}
spitText();

const bingo = (num) => {
 if (num > 5) {
  console.log('Bingo!')
  return 'Bingo!';
 } else {
  console.log('Do it again!')
  return 'Do it again!';
 }
}

bingo(4);
bingo(6);