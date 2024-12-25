// 0 1 0 1 0 
// 1 0 1 0 1
// 0 1 0 1 0
// 1 0 1 0 1
// 0 1 0 1 0

let temp;
let pattern16 = "";
for(let i=1;i<=5;i++)
{
  temp = i;
  for(let j= 1;j<=5;j++)
  {
    temp++;
    if(temp % 2 ==0)
    {
      pattern16 += "0";
      pattern16 += " ";
    }
    else{
      pattern16 += "1";
      pattern16 += " ";
    }
  }
  pattern16 += '\n';
}
console.log(pattern16);