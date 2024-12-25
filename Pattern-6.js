// 12345
// 678910
// 1112131415
// 151617181920
var temp = 1;
var pattern6 = "";
for(let i= 1;i<=5;i++){
  for(let j= 1;j<=5;j++){
    pattern6 += temp;
    temp++; 
  }
  pattern6 += '\n';
}
console.log(pattern6);