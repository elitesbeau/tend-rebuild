const fs = require('fs');
const path = 'c:/Users/Beau_/Documents/tend-rebuild/tend-landing-v1.html';
let html = fs.readFileSync(path, 'utf8');

const map = [
  ['#D4EAD2', '#ECEAE5'],
  ['#8CBD74', '#807B70'],
  ['#5D8849', '#1A1A18'],
  ['#B8D6A8', '#C8C3B8'],
  ['#C5DDB4', '#D0CBC0'],
  ['#C9E2BC', '#D5D0C5'],
  ['#E8F2DC', '#ECEAE5'],
  ['#E4EFDA', '#ECEAE5'],
  ['#DCEFD2', '#ECEAE5'],
  ['#9FC891', '#B5B0A5'],
  ['#6FA055', '#5A5750'],
  ['#D2E8EA', '#E0DDD6'],
  ['#6BA8B8', '#5A5750'],
  ['#A8C8D6', '#B5B0A5'],
  ['#7BA8BC', '#807B70'],
  ['#B6D3DC', '#C0BBB0'],
  ['#DAEAEE', '#ECEAE5'],
  ['#DEEBEE', '#ECEAE5'],
  ['#9AC8DC', '#B5B0A5'],
  ['#C5DCCF', '#D5D0C5'],
  ['#9DC4CA', '#ABA59A'],
  ['rgba(140,189,116,', 'rgba(26,26,24,'],
  ['rgba(140, 189, 116,', 'rgba(26,26,24,'],
  ['rgba(123,168,188,', 'rgba(26,26,24,'],
  ['rgba(123, 168, 188,', 'rgba(26,26,24,'],
  ['rgba(74,135,98,', 'rgba(26,26,24,'],
  ['rgba(74, 135, 98,', 'rgba(26,26,24,'],
  ['rgba(212,166,89,', 'rgba(26,26,24,'],
  ['rgba(212, 166, 89,', 'rgba(26,26,24,'],
  ['--oasis:     #D4EAD2;', '--oasis:     #E6E3DC;'],
  ['--haze:      #8CBD74;', '--haze:      #807B70;'],
  ['--tide:      #6BA8B8;', '--tide:      #5A5750;'],
  ['--vapor:     #D2E8EA;', '--vapor:     #E0DDD6;'],
  ['--accent-2:  #5D8849;', '--accent-2:  #3D3A33;'],
];

let total = 0;
for (const [from, to] of map) {
  let count = 0;
  while (html.indexOf(from) !== -1) {
    html = html.replace(from, to);
    count++;
    if (count > 999) break;
  }
  if (count) console.log(`${from} → ${to}: ${count}`);
  total += count;
}
console.log('total replacements:', total);
fs.writeFileSync(path, html);
