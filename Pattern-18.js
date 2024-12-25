
var pattern18 = "";
for(let i=1;i<=5;i++)
{
  for(let j=1;j<=5;j++)
  {
    pattern18 += ((i+j)%2)+" ";
  }
  pattern18 += '\n';
}
console.log(pattern18);