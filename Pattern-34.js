  //         * 
  //       * *
  //     * * *
  //   * * * *
  // * * * * *
  
var pattern = "";
for(let i=1;i<=5;i++)
{
  for(let j=5;j>=i;j--){
    pattern += " "+" ";
  }
  for(let k =1; k<=i; k++){
    pattern += "*"+" ";
  }
  pattern += "\n";
}
console.log(pattern);