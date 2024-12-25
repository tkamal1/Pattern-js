//     * 
//    * *
//   * * *
//  * * * *
// * * * * *


var pattern = "";
var n =5;
for(let i=1;i<=n;i++)
{
  for(let j=n; j>=1;j--)
  {
    if(i>=j)
    {
      pattern += "* ";
    }
    else
    {
      pattern += " ";
    }
    
  }
  pattern +='\n';
}
console.log(pattern)