// 11111
// 22222
// 33333
// 44444
// 55555
//pattern-2

var pattern2 = "";
for(let i = 1; i<=5; i++){
  for(let j= 1; j<=5;j++){
    pattern2 += i;
  }
  pattern2 += '\n';
}
console.log(pattern2);