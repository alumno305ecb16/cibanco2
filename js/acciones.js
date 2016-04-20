$(document).ready(function(e) {	
document.addEventListener("deviceready",function(){

 $('#iaxxa').on('click', function (){
     //  alert("Hola");
	 url = $(this).attr("href");
      window.open(url, 'https://axa.mx/home');
      return false;
   });
});
});