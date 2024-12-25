// 55555
// 44444
// 33333
// 22222
// 11111

var pattern4 = "";
for(let j=5;j>=1;j--){
  for(let i= 1;i<=5;i++){
    pattern4 += j; 
  }
  pattern4 += '\n';
}
console.log(pattern4);