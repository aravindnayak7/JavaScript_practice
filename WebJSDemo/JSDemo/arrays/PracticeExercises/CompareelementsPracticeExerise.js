const arr=[1,2,3,4];
const arr1=[1,2,3,4];
var i=0;
var j=0;
var count=0;
while(i<arr.length&&j<arr1.length){
    if(arr1[i]==arr[j]){
        count++;
    }
    i++;
    j++;
}
if(count==arr.length){
    console.log("true");
}else{
    console.log("false");
}
