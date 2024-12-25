// 1 6 11 16 21
// 2 7 12 17 22
// 1 6 11 16 21
// 2 7 12 17 22
// 3 8 13 18 23
// 4 9 14 19 24
// 5 10 15 20 25

var temp;
var pattern11 = "";
for(let i=1;i<=5;i++)
{
  temp = i;
  for(let j=1;j<=5;j++)
  {
    pattern11 += temp;
    pattern11 += ' ';
    temp += + 5;
  }
  pattern11 += '\n';
}
console.log(pattern11);

