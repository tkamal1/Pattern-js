// 5
// 4 4
// 3 3 3
// 2 2 2 2
// 1 1 1 1 1


var pattern = "";
for(let i=5; i>=1;i--)
{
  for(let j=5; j>=i;j--)
  {
    pattern += i+" ";
  }
  pattern += '\n';
}
console.log(pattern);