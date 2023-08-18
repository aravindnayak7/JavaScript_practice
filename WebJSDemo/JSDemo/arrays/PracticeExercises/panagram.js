function match(str,str1){
    Boolean=true;
   for(i in str1){
    if(str.includes(str1.charAt(i))==true){
        return true;
    }
   }
//    return -1;
}
var str="abcdefghijklmnopqrstuvwxyz";
var str1="aaaabbbcdefghijklmnopqrstuvwxyzzzz​";
match(str,str1);