// 1 1 2 1 3 1 
// 1 2 2 2 3 2
// 1 3 2 3 3 3
// 1 4 2 4 3 4
// 1 5 2 5 3 5

var pattern10 = "";
for(let i=1;i<=5;i++)
{
  for(let j=1; j<=3; j++){
    pattern10 += j+" "+i+" ";
  }
  pattern10 += '\n'
}
console.log(pattern10);