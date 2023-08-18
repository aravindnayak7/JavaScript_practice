var str="kolkata​";
var res="";
var count=0;
var i;
for(i=0;i<str.length;i++){
    for(j=0;j<str.length;j++){
        if(str[i]==str[j]){
            count++;
        }else{
            count++;
        }
    }
}
if(count==1){
    document.write(count);
}