var usuario = "User";
 var pass = "12345";
 var username, password;
 var condition 

 do{

    username=prompt("ingrese su usuario")
    password=prompt("ingrese su contraseña")
    if(username!= usuario ||pass!=password){
        alert("su usuario o contraseña no son validos");
        condition=true;
        
    }else{
condition= false
alert("inicio de sesion exitosa ")
    }

 }while(condition)
