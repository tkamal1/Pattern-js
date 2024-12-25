// A A A A A 
// B B B B B 
// C C C C C 
// D D D D D 
// E E E E E 

var pattern24 = "";
for(let i=65;i<=69;i++)
{
  
  for(let j=1;j<=5;j++)
  {
    pattern24 += String.fromCharCode(i)+" ";
  }
  pattern24 += "\n";
  

}
console.log(pattern24);

// let  m = [1,2,3,4,5]
// let pattern = "";
// for(let x of m )
// {
//   pattern += x +" ";
// }

// console.log(pattern)