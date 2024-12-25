//  5 6 15 16 25
//  4 9 14 19 24 
//  3 8 13 18 23
//  2 7 12 17 22
//  1 6 11 16 21

var temp= 5;
var x ,y;
var pattern13 = "";
for(var i=1;i<=5;i++)
{
   x = i;
   y = temp -i + 1 ;
   
   for(let j = 1;j<=5;j++)
    {
      if(j % 2 == 0)
      {
        pattern13 += x;
        pattern13 += ' ';
        
      }
      else
      {
        pattern13 += y;
        pattern13 += ' ';
        
      }
     
      x = x+temp;
      y = y+temp;
   }
   pattern13 += '\n';
}
console.log(pattern13);