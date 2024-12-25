// 1 0 1 0 1 
// 0 1 0 1 0 
// 1 0 1 0 1 
// 0 1 0 1 0 
// 1 0 1 0 1 


var temp = 2;
var pattern19 = "";
for(let i=1;i<=5;i++)
{
  for(let j=1;j<=5;j++)
  {
    pattern19 += ((temp + j)% 2) + " ";
  }
  temp++;
  pattern19 += '\n';
}
console.log(pattern19);