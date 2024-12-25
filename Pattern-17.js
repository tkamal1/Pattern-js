// 1 0 1 0 1 
// 0 1 0 1 0 
// 1 0 1 0 1 
// 0 1 0 1 0 
// 1 0 1 0 1 

let temp;
let pattern17 = "";
for(let i= 1; i<=5;i++)
{
  temp = i;
  for(let j=1;j<=5;j++)
  {
    temp++;
    if(temp % 2 ==0)
    {
      pattern17 += "1";
      pattern17 += ' ';
    }
    else{
      pattern17 +="0";
      pattern17 += ' ';
    }
    
  }
  pattern17 +="\n";
}
console.log(pattern17);