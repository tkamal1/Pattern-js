// 2 
// 2 4
// 2 4 6
// 2 4 6 8
// 2 4 6 8 10

var pattern = "";
var temp;
for(let i=1;i<=5;i++)
{
  temp = 2;
  for(let j=1;j<=i;j++)
  {
    pattern += temp;
    temp +=2; 
    pattern += " ";
  }
  pattern += '\n';
}
console.log(pattern);
