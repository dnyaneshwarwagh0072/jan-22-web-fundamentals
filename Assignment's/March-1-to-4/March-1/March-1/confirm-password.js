function myfun(){
    var a = document.getElementById("password-1").value;
    var b = document.getElementById("password-2").value;
    if(a!=b){
        document.getElementById("pass-msg-2").innerHTML="** Password not match **"
        return false;
    }
    if(a==b){
        document.getElementById("pass-msg-2").innerHTML="** OK **"
        return false;
    }
}