// JavaScript Document
$(document).ready(function(e) {	
document.addEventListener("deviceready",function(){

		var suma=0;
			
		var y=0;
		var oportunidades = 4;
		var juegopalabra = 1;
		var pasofor=0;
		
		var pal="";
		var palabra="";
		
		
		 palabra ="- + ? ¿ ] [ 1 * # $ % / ! . , = _";
		 pal="I N T E G R A L I N M E D I A T A";
		 $('#palabra').html(palabra);	
	
		var suma=0;
		
		$('.a1').on('click', function (){
						
		var idletra = $(this).attr('id')
		var existe = false;
		
			var letraactual = $("#"+idletra).text();
			$('#'+idletra).hide();
		for (x = 0; x < palabra.length; x++)
		 {
			var p= pal.charAt(x);
			var signo=palabra.charAt(x);
			
			
			
			
		  if (letraactual == p)
		   {
			
				suma=suma+1;
				
			var remplaso=palabra.replace(signo,p) 
	
				
				$("#palabra").text(remplaso);
				 palabra=document.getElementById("palabra").innerHTML;
			
					if(palabra==pal)
					{
						juegopalabra=juegopalabra+1;
						$('.a1').show();
						switch (juegopalabra)
						{
							
							case 2:
								alert("Integrales inmediatas son las que salen directamente por la propia definición de integral, es decir, la que se puede resolver de forma más o menos intuitiva pensando en una función que cuando se derive me dé la que está en la integral.");
								palabra ="_ 1 * # $ + .";
						 		pal="F U N C I O N";
								$('#titulo').html("NIVEL 2");
								break;
							case 3:
								alert("Una función es una regla de asociación que relaciona dos o mas conjuntos entre si; generalmente cuando tenemos la asociación dos conjuntos las función se define como una regla de asociación entre un conjunto llamado dominio con uno llamado codominio, también dominio e imagen respectivamente o dominio y rango. Esta regla de asociación no permite relacionar un mismo elemento del dominio con dos elementos del codominio.")
								palabra ="- * + } { _ ? ( ) # 2 6 !";
						 		pal="F A C T O R I Z A C I O N";
								$('#titulo').html("NIVEL 3");
								break;
							case 4:
								alert("En álgebra, la factorización es expresar un objeto o número (por ejemplo, un número compuesto, una matriz o un polinomio) como producto de otros objetos más pequeños (factores), (en el caso de números debemos utilizar los números primos) que, al multiplicarlos todos, resulta el objeto original. Por ejemplo, el número 15 se factoriza en números primos 3 × 5; y a²-b² se factoriza como binomio conjugados (a - b)(a + b).")
								palabra ="{ } 4 . _ ¿ ? *";
						 		pal="D E R I V A D A";
								$('#titulo').html("NIVEL 4");
								break;
							case 5:
								alert("Derivada es un término que puede utilizarse como sustantivo o como adjetivo. En el primer caso, se trata de una noción de la matemática que nombra al valor límite del vínculo entre el aumento del valor de una función y el aumento de la variable independiente.");
								palabra ="* _ } { ¡ ! ? ¿ . 1 [ 4";
						 		pal="A N T I D E R I V A D A";
								$('#titulo').html("NIVEL 5");
								break;
							case 6:
								alert("Es la función que resulta del proceso inverso de la derivación, es decir, consiste en encontrar una función que, al ser derivada produce la función dada.")
								palabra ="} { _ - , : . ? ¡ ! 1";
						 		pal="S U S T I T U C I O N";
								$('#titulo').html("NIVEL 6");
								break;
							case 7:
								alert("Se basa en realizar un reemplazo de variables adecuado que permita convertir el integrando en algo sencillo con una integral o antiderivada simple.")
								palabra ="- _ ! 2 ¡ ? } { # $ % / ( ) 3 6 . , = ¿ 9 * ] [";
						 		pal="F U N C I O N E S T R I G O N O M E T R I C A S";
								$('#titulo').html("NIVEL 7");
								break;
							case 8:
								alert("Función Seno La Función Seno nos describe la relación existente entre Lado Opuesto sobre la Hipotenusa.");
								palabra ="+ * { } , . ? 5 ] [ 1 8 ¡ ! ¿";
						 		pal="A R E A B A J O L A C U R V A";
								$('#titulo').html("NIVEL 8");
								break;
							case 9:
								alert("Límite de la sumatoria de Riemann cuando n tiende a Infinito.");
								palabra ="* _ . , 9 ¡ ! ¿ ? + ; % $ = 2 6";
						 		pal="V A R I A B L E A U X I L I A R";
								$('#titulo').html("NIVEL 9");
								break;
							case 10:
								alert("Es el cambio de variable para realizar una integral y consiste en igualar una parte del integrado a una nueva variable, (la podemos llamar U,V)");
								palabra ="* _ 6 , 9 ¡ ! ¿ ? + ; % $ [ 4 8 ) { 5 # 2 1 ° . 3 0";
						 		pal="I D E N T I D A D E S T R I G O N O M E T R I C A S";
								$('#titulo').html("NIVEL 10");
								break;
							case 11:
								alert("cos² α + sen² α = 1                    sec² α = 1 + tg² α                       cosec² α = 1 + cotg² α");
								$(location).attr('href','#resultado'); 
								$('#resultadofinal').html(suma);	
								if(suma<=60){
									$('#rango').html("MALO");
									$("#rango").css("background-color","#FF0000")			
								}else if(suma<=90)
								{
									$('#rango').html("REGULAR");
									$("#rango").css("background-color","#FFFF00")
								}else if(suma<=130){
									$('#rango').html("BUENO");
									$("#rango").css("background-color","#40FF00")
								}else{
									$('#rango').html("EXCELENTE");	
									$("#rango").css("background-color","#04B404")
								}
								
						}
						$('.a1').show();
						$('#btnayuda').show();
						$('#palabra').html(palabra);	
						
						$("#imagen").attr("src","images/p1.jpg");
						oportunidades = 4;
					}else{
						//alert("No igual");	
					}
			
				existe = true;
				
				
			
		    }
			
			
		 
		 }
		 
		 
		 
		 if(!existe){
	suma=suma-1;			    
	oportunidades--; 
	
		switch (oportunidades)
	{
		case 3:
		$("#imagen").attr("src","images/p2.jpg");
		break;
		case 2:
		$("#imagen").attr("src","images/p3.jpg");
		break;
		case 1:
		$("#imagen").attr("src","images/p5.jpg");
		break;
		case 0:
			alert("Se terminaron tus oportunidades");
					juegopalabra=juegopalabra+1;
					$('.a1').show();
						switch (juegopalabra)
						{
							case 2:
								
								palabra ="_ 1 * # $ + .";
						 		pal="F U N C I O N";
								$('#titulo').html("NIVEL 2");
								break;
							case 3:
								
								palabra ="- * + } { _ ? ( ) # 2 6 !";
						 		pal="F A C T O R I Z A C I O N";
								$('#titulo').html("NIVEL 3");
								break;
							case 4:
								
								palabra ="{ } 4 . _ ¿ ? *";
						 		pal="D E R I V A D A";
								$('#titulo').html("NIVEL 4");
								break;
							case 5:
								
								palabra ="* _ } { ¡ ! ? ¿ . 1 [ 4";
						 		pal="A N T I D E R I V A D A";
								$('#titulo').html("NIVEL 5");
								break;
							case 6:
								
								palabra ="} { _ - , : . ? ¡ ! 1";
						 		pal="S U S T I T U C I O N";
								$('#titulo').html("NIVEL 6");
								break;
							case 7:
								
								palabra ="- _ ! 2 ¡ ? } { # $ % / ( ) 3 6 . , = ¿ 9 * ] [";
						 		pal="F U N C I O N E S T R I G O N O M E T R I C A S";
								$('#titulo').html("NIVEL 7");
								break;
							case 8:
								
								palabra ="+ * { } , . ? 5 ] [ 1 8 ¡ ! ¿";
						 		pal="A R E A B A J O L A C U R V A";
								$('#titulo').html("NIVEL 8");
								break;
							case 9:
							
								palabra ="* _ . , 9 ¡ ! ¿ ? + ; % $ = 2 6";
						 		pal="V A R I A B L E A U X I L I A R";
								$('#titulo').html("NIVEL 9");
								break;
							case 10:
								palabra ="* _ 6 , 9 ¡ ! ¿ ? + ; % $ [ 4 8 ) { 5 # 2 1 / . 3 0";
						 		pal="I D E N T I D A D E S T R I G O N O M E T R I C A S";
								$('#titulo').html("NIVEL 10");
								break;
							case 11:
								$(location).attr('href','#resultado'); 
								$('#resultadofinal').html(suma);	
								if(suma<=60){
									$('#rango').html("MALO");
									$("#rango").css("background-color","#FF0000")			
								}else if(suma<=90)
								{
									$('#rango').html("REGULAR");
									$("#rango").css("background-color","#FFFF00")
								}else if(suma<=130){
									$('#rango').html("BUENO");
									$("#rango").css("background-color","#40FF00")
								}else{
									$('#rango').html("EXCELENTE");	
									$("#rango").css("background-color","#04B404")
								}
								
								break;
						}
						
						$('#palabra').html(palabra);	
						$('#btnayuda').show();
						$("#imagen").attr("src","images/p1.jpg");
						oportunidades = 4;
	}
		
		
			}
	//	alert(suma);
		});
		
		
		$('#regresar').on('tap', function (){
			palabra ="- + ? ¿ ] [ 1 * # $ % / ! . , = _";
			$('#palabra').html(palabra);
			pal="I N T E G R A L I N M E D I A T A";
			$('.a1').show();
			$('#titulo').html("NIVEL 1");
			suma=0;
			oportunidades = 4;
			juegopalabra = 1;
		});
		
		$('#inicio1').on('tap', function (){
			palabra ="- + ? ¿ ] [ 1 * # $ % / ! . , = _";
			$('#palabra').html(palabra);
			pal="I N T E G R A L I N M E D I A T A";
			$('.a1').show();
			$('#titulo').html("NIVEL 1");
			suma=0;
			oportunidades = 4;
			juegopalabra = 1;
		});
	
	
	$('#btnayuda').on('click', function (){
		
						for (i = 0; i < palabra.length; i ++)
						
						{
								var mod=i%2;
							if(mod==0){
									var l=palabra.charAt(i);
									var lp=pal.charAt(i);
									//alert(lp);
									//var sig=palabra.charAt(i);
									if(l=="A" || l=="B"||l=="C"||l=="D"||l=="E"||l=="F"||l=="G"||l=="H"||l=="I"||l=="J"||l=="K"||l=="L"||l=="M"||l=="N"||l=="O"||l=="P"||l=="Q"||l=="R"||l=="S"||l=="T"||l=="U"||l=="V"||l=="W"||l=="X"||l=="Y"||l=="Z"){
									//	alert("Letra");
									
									}else{
										var remplaso=palabra.replace(l,lp) 
										$("#palabra").text(remplaso);
										palabra=document.getElementById("palabra").innerHTML;
										pasofor=pasofor+1;
										if(pasofor==1){
											pasofor=0;
											$('#btnayuda').hide();
											break;
										
										}
									}
									
									//alert(l);
							}
							
							//alert(mod);
						}
	});
	
});
});