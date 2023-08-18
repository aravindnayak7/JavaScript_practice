var str="mumbai";
// console.log(str.length);
// console.log(str[0]);
var res="";
var vowel="aeiou";
for(var i in str){
    if(vowel.includes(str.charAt(i))==true){
        res +="b";
    }else{
        res +=str.charAt(i);
    }
}
console.log(res);
// for(var i=0;i<str.length;i++){
//     if(str[i]=='a'||str[i]=='e'||str[i]=='i'||str[i]=='o'||str[i]=='u'){
//         str[i]='b';
//     }
// }
// for(var i=0;i<str.length;i++){
//     console.log(str[i]);
// }
