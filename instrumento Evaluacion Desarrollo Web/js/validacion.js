
$(function (){
    var nombre = document.getElementById('first_name');
    var apellido = document.getElementById('last_name');
    var telefono = document.getElementById('telephone');
    var email = document.getElementById('email');
    var direccion = document.getElementById('direccion');
    var contra1 = document.getElementById('contrasena');

    $(".btnaction").on('click',function(){
        console.log('Enviar formulario...');
         if (nombre.value == null || nombre.value ==''){
            alert('Ingresa nombre...!');
         }else if (nombre.value.length > 8){
             alert('El nombre no debe exceder 8 caracteres.')
         }
        if (apellido.value == null || apellido.value ==''){
            alert('Ingresa Apellido...!');
         }else if (apellido.value.length > 16){
             alert('El apellido no debe exceder 16 caracteres.');
         }
         if (contra1.value ==null || contra1.value ==''){
             alert('Ingresa contraseña...!');
         }else if(contra1.value.length <8){
             //Debe ser de 8 caracteres o mayor
             alert('La contraseña es muy corta!');
         }
         if(email.value ==null || email.value ==''){
             alert('Ingresa Email...!');
         }else  if (validarEmail(email.value)==0){
            alert('El email no es valido');
         }
          if (direccion.value == null || direccion.value ==''){
            alert('Ingresa direccion...!');
         }
         if (telefono.value == null || telefono.value ==''){
            alert('Ingresa Telefono...!');
         }
         error.innerHTML = mensajesError.join(' , ');
         return false;
    });
});







    