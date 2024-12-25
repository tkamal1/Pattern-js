// 1 1 1 1 1 
// 0 0 0 0 0 
// 1 1 1 1 1 
// 0 0 0 0 0 
// 1 1 1 1 1 

var temp = 2;
pattern22 = "";
for(let i=1;i<=5;i++)
{
  for(let j=1;j<=5;j++)
  {
    pattern22 += ((temp + j)%2)+" ";
    temp++;
  }
  pattern22 += "\n";
}
console.log(pattern22);