<?php 

 
 class ControladorPlantilla{

public function plantilla(){
	include "vistas/plantilla.php";
}
 

public function ctrlEstiloPlantilla(){
 
	$tabla= "plantilla";
 
	$respuesta= ModeloPlantilla::mdlEstiloPlantilla($tabla);
 	return $respuesta;
	 
}

 } 

 