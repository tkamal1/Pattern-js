// * * * * * 
// * * * *
// * * *
// * *
// *
var pattern = "";
for(let i=5;i>=1;i--)
{
  for(let j=i;j>=1;j--)
  {
    pattern += "*"+" ";
  }
  pattern +='\n';
}
console.log(pattern);