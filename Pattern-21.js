// 0 0 0 0 0 
// 1 1 1 1 1 
// 0 0 0 0 0 
// 1 1 1 1 1 
// 0 0 0 0 0 
var temp = 1;
var pattern21 = "";
for(let i=1; i<=5;i++)
{
  for(let j=1;j<=5;j++)
  {
    pattern21 += ((temp + j)%2)+" ";
    temp++;
  }
  pattern21 += "\n";
}
console.log(pattern21);