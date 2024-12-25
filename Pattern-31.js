// 1 
// 2 3
// 4 5 6
// 7 8 9 10
// 11 12 13 14 15

var temp =1;
var pattern = "";
for(let i=1;i<=5;i++)
{
  for(let j=1;j<=i;j++)
  {
    pattern += temp+" ";
    temp++;
  }
  pattern += "\n";
}
console.log(pattern);