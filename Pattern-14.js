// 1 2 3 4 5 
// 2 3 4 5 6 
// 3 4 5 6 7 
// 4 5 6 7 8 
// 5 6 7 8 9 

let temp;
let  pattern14 = "";
for(let i=1;i<=5;i++)
{
  temp = i;
  for(let j=1;j<=5;j++)
  {
    pattern14 += temp;
    pattern14 += ' ';
    temp++;
  }
  pattern14 += '\n';

}
console.log(pattern14);