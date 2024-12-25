// 1 3 5 7 9  
// 3 5 7 9 11 
// 5 7 9 11 13
// 7 9 11 13 15
// 9 11 13 15 17

let temp = 1;
let x = 1;
let pattern15 = "";
for(let i=1; i<=5;i++)
{

  for(let j=1;j<=5;j++)
  {
    pattern15 += temp;
    temp += +2;
    pattern15 += ' ';
  }
  x =x+2;
  temp =x;
  pattern15 += '\n';
}
console.log(pattern15)