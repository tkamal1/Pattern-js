// 1 0 1 0 1
// 1 0 1 0 1
// 1 0 1 0 1
// 1 0 1 0 1
// 1 0 1 0 1

var temp = 2;
var pattern23 = "";
for(let i=1;i<=5;i++)
{
  for(let j=1;j<=5;j++)
  {
    pattern23 += ((temp + j)%2)+" ";

  }
  pattern23 += "\n";
}
console.log(pattern23);