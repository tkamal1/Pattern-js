// 1 
// 3 5
// 7 9 11
// 13 15 17 19
// 21 23 25 27 29

var temp= 1;
var pattern = "";
for(let i=1;i<=5;i++)
{
  for(let j=1;j<=i;j++)
  {
    pattern += temp+" ";
    temp +=2;
  }
  pattern += '\n';
}
console.log(pattern);