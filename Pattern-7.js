// 1 3 5 7 9
// 11 13 15 17 19

var temp = 1;
var pattern7 = "";
for(let i = 1; i<=5;i++){
  for(let j= 1; j<=5 ;j++)
  {
    pattern7 += temp;
    temp += +2;
    pattern7 += ' ';
  }
  pattern7 += '\n';
}
console.log(pattern7);