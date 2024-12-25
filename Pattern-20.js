// 1 0 1 0 1 
// 0 0 0 0 0 
// 1 0 1 0 1 
// 0 0 0 0 0 
// 1 0 1 0 1 

var pattern20 = "";
for(let i=1;i<=5;i++)
{
  for(let j=1;j<=5;j++)
  {
    pattern20 += ((i*j)%2)+ " ";
  }
  pattern20 += '\n';
}
console.log(pattern20);