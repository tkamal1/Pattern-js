// 5 10 15 20 25 
// 4 9 14 19 24  
// 3 8 13 18 23  
// 2 7 12 17 22
// 1 6 11 16 21

var temp;
var pattern12 = "";
for(let i=5;i>=1;i--)
{
  temp = i;
  for(let j= 1;j<=5;j++){
    pattern12 += temp;
    temp += + 5;
    pattern12 += ' ';
  }
  pattern12 += '\n';
}
console.log(pattern12)