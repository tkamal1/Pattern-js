// 2 4 6 8 10
// 12 14 16 18 20

var temp = 2;
var pattern8 = "";
for(let i =1; i<=5;i++){
  for(let j= 1; j<=5;j++){
    pattern8 += temp;
    temp += 2;
    pattern8 += ' ';
  }
  pattern8 += '\n';
}
console.log(pattern8)