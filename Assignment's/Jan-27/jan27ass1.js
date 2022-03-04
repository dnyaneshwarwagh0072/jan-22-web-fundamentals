var sizof = prompt(" Enter the num of values to enter");
var arr1 = [];
var i = 0;
for (i = 0; i < sizof; i++) {
    var value = prompt("Enter the number to compare");
    arr1.push(value);
}
var maxnum = arr1[0];
for (i = 0; i < sizof; i++) {
    if (arr1[i] > maxnum) {
        maxnum = arr1[i];
    }
}
alert("The maximum number is " + maxnum);
console.log(max);