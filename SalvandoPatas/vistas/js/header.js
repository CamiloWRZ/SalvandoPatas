
var numero;
 


$(".listanivel"+numero).click(function(){
//pregunta a la ventana el ancho q tiene----- MATCHMEDIA.
	if(window.matchMedia("(max-width:767px)").matches){
 
		$(".listanivel"+numero).after($(".subnivel"+numero).slideToggle("fast"))
Console.log("fgdfg");
	}else{

		$("listanivel"+numero).after($(".subnivel"+numero).slideToggle("fast"))
		Console.log("fgdfg");
	}

		
})


$(".listanivel1").click(function(){
	
	alert(1);
})	
$(".listanivel2").click(function(){
	
	alert(2);
})	

