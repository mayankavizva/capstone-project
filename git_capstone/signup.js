document.getElementById('m').toUpperCase();
function myfunction()
{
    var x=document.getElementById("pass");
    var y=document.getElementById("hide1");
    var z=document.getElementById("hide2");

    if(x.type=="password"){
         x.type="text";
         y.style.display="block";
         z.style.display="none";
    }
    else{
        x.type="password";
        y.style.display="none";
        z.style.display="block";
    }
}
function myfunction1()
{
    var x=document.getElementById("inp");
    var y=document.getElementById("hide11");
    var z=document.getElementById("hide22");

    if(x.type=="password"){
         x.type="text";
         y.style.display="block";
         z.style.display="none";
    }
    else{
        x.type="password";
        y.style.display="none";
        z.style.display="block";
    }
}
function demo1(){
    var x=document.getElementById("pass").value;
    var y=document.getElementById("inp").value;
    var m=document.getElementById("match");
    var u=document.getElementById("unmatch");
    if(x==y){
      m.style.display="block;"
    }
    else{
        u.style.display="block";
    }

}
  function demo(){
    var user=document.getElementById("pass").value;
    var up=document.getElementById("upper");
    var num=document.getElementById("number");
    var sp=document.getElementById("special");
    var len=document.getElementById("length");
    if(user.match(/[A-Z]/)){
        up.style.color="black";
    }
    else{
        up.style.color="#888";
    }
    if(user.match(/[0-9]/)){
        num.style.color="black";
    }
    else{
        num.style.color="#888";
    }
    if(user.match(/[^A-Za-z0-9]/)){
        special.style.color="black";
    }
    else{
        special.style.color="#888";
    }
    if(user.length>7){
        len.style.color="black";
    }
    else{
        len.style.color="#888";
    }
  }