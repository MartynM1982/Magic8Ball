// users can log in to the game.
let userName = 'Martyn';
'Martyn' ? console.log('Hello, Martyn!') 
: console.log('Hello!')
// users ask the magic eight ball a question.
let userQuestion = 'Will I be rich?';
console.log(`The user asked the eight ball: ${userQuestion}`);
// We need to generate a random number between 0 and 7 that will determine the eight balls reply.
let randomNumber = Math.floor(Math.random() * 8);
let eightBall = '';
// Control flow to determine a reply from the eight ball.
switch(randomNumber) {
  case 0:
  console.log('It is certain');
  break;
  case 1:
  console.log('It is decidedly so');
  break;
  case 2:
  console.log('Reply hazy try again');
  break;
  case 3:
  console.log('Cannot predict now');
  break;
  case 4:
  console.log('Do not count on it');
  break;
  case 5:
  console.log('My sources say no');
  break;
  case 6:
  console.log('Outlook not so good');
  break;
  case 7:
  console.log('Signs point to yes');
  break;
}
console.log(eightBall);