var num=prompt("please enter a number");
var defaul=0;
console.log(defaul);
var first=1;
console.log(first);
var second=1;
console.log(second);
for(var i=3;i<=num;i++ ){
    var third=first+second;
    console.log(third);
    first=second;
  
    second=third; 

}