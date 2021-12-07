const fs = require("fs");

const getInput = () => {
  const input = fs.readFileSync('./input', 'utf-8');
  const fish = input.split(',');

  return fish.map(f => parseInt(f));
};

const input = getInput();

const fishDays = { '0': 0, '1': 0, '2': 0, '3': 0, '4': 0, '5': 0, '6': 0, '7': 0, '8': 0 };
for(let i = 0; i < input.length; i++) fishDays[input[i]]++;

for(let i = 0; i < 256; i++) { 
  const newFish = fishDays['0'];
  for(let j = 1; j < 9; j++) {
    fishDays[`${j - 1}`] = fishDays[`${j}`];
  }

  fishDays['8'] = newFish;
  fishDays['6'] += newFish;
}

let total = 0; 
Object.keys(fishDays).forEach(day => {
  total += fishDays[day];
});

console.log(total);