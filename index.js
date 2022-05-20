// Code your solutions in this file
//const gifts = ["teddy bear", "drone", "doll"];
//function wrapGifts(gifts) {
// for (let i = 0; i < gifts.length; i++) {
//   console.log(`Wrapped ${gifts[i]} and added a bow!`);
//  }
//  return gifts;
//}
//wrapGifts(gifts);

const arrayOfnames = ["Charlie", "Samip", "Ali"];
function writeCards(arrayOfnames, event) {
  const message = [];
  for (let i = 0; i < arrayOfnames.length; i++) {
    message.push(
      `Thank you, ${arrayOfnames[i]}, for the wonderful ${event} gift!`
    );
  }
  return message;
}

writeCards(["Charlie", "Samip", "Ali"], "birthday");

function countDown() {
  let countDown = 10;
  while (countDown > -1) {
    console.log(countDown--);
  }
}
countDown(10);
