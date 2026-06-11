<?php

require_once "controlador/plantilla_controlador.php";
require_once "modelo/plantilla_modelo.php";
require_once "modelo/rutas.php";
require_once "extensiones/vendor/autoload.php";


$plantilla=new ControladorPlantilla();
 $plantilla -> plantilla();