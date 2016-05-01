var Expensas_Modificado = false;
var ABL_Modificado = false;
var Alquiler_Modificado = false;
var Garantia_Modificado = false;
var A_linea_B_Modificado = false;
var A_linea_D_Modificado = false;
var A_tren_Mitre_Modificado = false;
var A_tren_Urquiza_Modificado = false;
var A_tren_San_Martin_Modificado = false;
var Distribucion_y_Tamanio_Modificado = false;
var Distribucion_Modificado = false;
var Tamanio_Modificado = false;
var Ascensor_Modificado = false;
var Instalacion_de_Agua_Modificado = false;
var Antiguedad_Agua_Modificado = false;
var Materiales_Agua_Modificado = false;
var Humedad_Agua_Modificado = false;
var Instalacion_de_Gas_Modificado = false;
var Antiguedad_Gas_Modificado = false;
var Aprobacion_Gas_Modificado = false;
var Instalacion_de_Luz_Modificado = false;
var Antiguedad_Luz_Modificado = false;
var Llave_Termica_Luz_Modificado = false;
var Descarga_A_Tierra_Luz_Modificado = false;
var Cocina_Modificado = false;
var Banio_Modificado = false;
var Lavarropas_Modificado = false;
var Vista_Modificado = false;
var Iluminacion_Modificado = false;
var Pintura_Modificado = false;
var Pisos_Modificado = false;
var Amoblado_Modificado = false;
var Parrilla_Modificado = false;
var Supermercado_Modificado = false;
var Verduleria_Modificado = false;
var Carniceria_Modificado = false;
var Bancos_Modificado = false;
var Deliverys_Modificado = false;
var Seguridad_Modificado = false;
var Espacios_Verdes_Modificado = false;
var Cortes_de_Luz_Modificado = false;
var Cortes_de_Gas_Modificado = false;
var Cortes_de_Agua_Modificado = false;
var Quilombo_Modificado = false;
var Atractivo_Visual_Modificado = false;
var Gimnasio_Modificado = false;
var Ferreteria_Modificado = false;
var Construccion_Modificado = false;
var Farmacia_Modificado = false;
var Hospitales_Modificado = false;
var Veterinarias_Modificado = false;
var Peluquerias_Modificado = false;
var Libreria_Modificado = false;
var Talleres_Mecanicos_Modificado = false;
var Bicicleteria_Modificado = false;
var Cines_Modificado = false;
var Bares_Modificado = false;
var Teatros_Modificado = false;
var Restaurantes_Modificado = false;

var Expensas = 0;
var ABL = 0;
var Alquiler = 0;
var Garantia = 0;
var A_linea_B = 0;
var A_linea_D = 0;
var A_tren_Mitre = 0;
var A_tren_Urquiza = 0;
var A_tren_San_Martin = 0;
var Distribucion_y_Tamanio = 0;
var Distribucion = 0;
var Tamanio = 0;
var Ascensor = 0;
var Instalacion_de_Agua = 0;
var Antiguedad_Agua = 0;
var Materiales_Agua = 0;
var Humedad_Agua = 0;
var Instalacion_de_Gas = 0;
var Antiguedad_Gas = 0;
var Aprobacion_Gas = 0;
var Instalacion_de_Luz = 0;
var Antiguedad_Luz = 0;
var Llave_Termica_Luz = 0;
var Descarga_A_Tierra_Luz = 0;
var Cocina = 0;
var Banio = 0;
var Lavarropas = 0;
var Vista = 0;
var Iluminacion = 0;
var Pintura = 0;
var Pisos = 0;
var Amoblado = 0;
var Parrilla = 0;
var Supermercado = 0;
var Verduleria = 0;
var Carniceria = 0;
var Bancos = 0;
var Deliverys = 0;
var Seguridad = 0;
var Espacios_Verdes = 0;
var Cortes_de_Luz = 0;
var Cortes_de_Gas = 0;
var Cortes_de_Agua = 0;
var Quilombo = 0;
var Atractivo_Visual = 0;
var Gimnasio = 0;
var Ferreteria = 0;
var Construccion = 0;
var Farmacia = 0;
var Hospitales = 0;
var Veterinarias = 0;
var Peluquerias = 0;
var Libreria = 0;
var Talleres_Mecanicos = 0;
var Bicicleteria = 0;
var Cines = 0;
var Bares = 0;
var Teatros = 0;
var Restaurantes = 0;

function calcularAtributoFuncionLineal(atributo, pendiente, ordenadaAlOrigen, porcentajeTotal){
	window[atributo] = pendiente*parseInt(document.getElementsByName(atributo)[0].value)+ordenadaAlOrigen;
	if (window[atributo] > 100) {
		window[atributo] = 100;
	} else if (window[atributo] < 0) {
		window[atributo] = 0;
	}
	
	window[atributo+"_Modificado"] = true;
	window[atributo] *= porcentajeTotal;
}

function calcularAtributoValoresDiscretos(atributo, porcentajeTotal){
	var radios = document.getElementsByName(atributo);

	for (var i = 0; i < radios.length; i++) {
		if (radios[i].checked) {
			window[atributo] = parseInt(radios[i].value);
			break;
		}
	}
	
	window[atributo+"_Modificado"] = true;
	window[atributo] *= porcentajeTotal;
}

function calcularAtributoInstalacionDeAgua() {
	Instalacion_de_Agua = (Antiguedad_Agua+Materiales_Agua+Humedad_Agua)*0.019;
}

function calcularAtributoInstalacionDeGas() {
	Instalacion_de_Gas = (Antiguedad_Gas+Aprobacion_Gas)*0.019;
}

function calcularAtributoInstalacionDeLuz() {
	Instalacion_de_Luz = (Antiguedad_Luz+Llave_Termica_Luz+Descarga_A_Tierra_Luz)*0.019;
}

function calcularAtributoDistribucionYTamanio() {
	Distribucion_y_Tamanio = (Distribucion+Tamanio)*0.0209;
}

function calcularTotal() {
    document.getElementsByName("resultado")[0].value = Expensas+
	 ABL+
	 Alquiler+
	 Garantia+
	 A_linea_B+
	 A_linea_D+
	 A_tren_Mitre+
	 A_tren_Urquiza+
	 A_tren_San_Martin+
	 Distribucion_y_Tamanio+
	 Ascensor+
	 Instalacion_de_Agua+
	 Instalacion_de_Gas+
	 Instalacion_de_Luz+
	 Cocina+
	 Banio+
	 Lavarropas+
	 Vista+
	 Iluminacion+
	 Pintura+
	 Pisos+
	 Amoblado+
	 Parrilla+
	 Supermercado+
	 Verduleria+
	 Carniceria+
	 Bancos+
	 Deliverys+
	 Seguridad+
	 Espacios_Verdes+
	 Cortes_de_Luz+
	 Cortes_de_Gas+
	 Cortes_de_Agua+
	 Quilombo+
	 Atractivo_Visual+
	 Gimnasio+
	 Ferreteria+
	 Construccion+
	 Farmacia+
	 Hospitales+
	 Veterinarias+
	 Peluquerias+
	 Libreria+
	 Talleres_Mecanicos+
	 Bicicleteria+
	 Cines+
	 Bares+
	 Teatros+
	 Restaurantes;
}

function obtenerValorAtributoFuncionLineal(atributo, unidad){
	var valor = "";
	
	if (window[atributo+"_Modificado"] == true) {
		valor = (atributo + " = " + document.getElementsByName(atributo)[0].value + " " + unidad + "\n");
	}
	
	return valor;
}

function obtenerValorAtributoValoresDiscretos(atributo){
	var radios = document.getElementsByName(atributo);
	var valor = "";
	
	if (window[atributo+"_Modificado"] == true) {
		for (var i = 0; i < radios.length; i++) {
			if (radios[i].checked) {
				valor = (atributo + " = " + radios[i].getAttribute("valor") + "\n");
				break;
			}
		}
	}
		
	return valor;
}

function obtenerValorAtributoInstalacionDeAgua() {
	return (obtenerValorAtributoValoresDiscretos("Antiguedad_Agua") +
			obtenerValorAtributoValoresDiscretos("Materiales_Agua") +
			obtenerValorAtributoValoresDiscretos("Humedad_Agua"));
}

function obtenerValorAtributoInstalacionDeGas() {
	return (obtenerValorAtributoValoresDiscretos("Antiguedad_Gas") +
			obtenerValorAtributoValoresDiscretos("Aprobacion_Gas"));
}

function obtenerValorAtributoInstalacionDeLuz() {
	return (obtenerValorAtributoValoresDiscretos("Antiguedad_Luz") +
			obtenerValorAtributoValoresDiscretos("Llave_Termica_Luz") +
			obtenerValorAtributoValoresDiscretos("Descarga_A_Tierra_Luz"));
}

function obtenerValorAtributoDistribucionYTamanio() {
	return (obtenerValorAtributoFuncionLineal("Tamanio", "m2") +
			obtenerValorAtributoValoresDiscretos("Distribucion"));
}

function guardarResultado() {
	calcularTotal();
	
	var textFile = null;
	
	var contenidoArchivo = 
			"||||||||||||||||||||||||||||||||||||||||\n" +
			"Nombre = \"" + document.getElementsByName("Nombre")[0].value + "\"\n" +
			"Link = " + document.getElementsByName("Link")[0].value + "\n" +
			"||||||||||||||||||||||||||||||||||||||||\n" +
			obtenerValorAtributoFuncionLineal("Expensas","$") +
			obtenerValorAtributoFuncionLineal("ABL","$") +	 
			obtenerValorAtributoFuncionLineal("Alquiler","$") +	
			obtenerValorAtributoFuncionLineal("Garantia","$") +	
			obtenerValorAtributoFuncionLineal("A_linea_B","Cuadras") +	
			obtenerValorAtributoFuncionLineal("A_linea_D","Cuadras") +
			obtenerValorAtributoFuncionLineal("A_tren_Mitre","Cuadras") +
			obtenerValorAtributoFuncionLineal("A_tren_Urquiza","Cuadras") +
			obtenerValorAtributoFuncionLineal("A_tren_San_Martin","Cuadras") +
			obtenerValorAtributoFuncionLineal("Supermercado","Cuadras") +
			obtenerValorAtributoFuncionLineal("Verduleria","Cuadras") +
			obtenerValorAtributoFuncionLineal("Carniceria","Cuadras") +
			obtenerValorAtributoFuncionLineal("Bancos","Cuadras") +
			obtenerValorAtributoFuncionLineal("Deliverys","Cuadras") +
			obtenerValorAtributoFuncionLineal("Espacios_Verdes","Cuadras") +
			obtenerValorAtributoFuncionLineal("Gimnasio","Cuadras") +
			obtenerValorAtributoFuncionLineal("Ferreteria","Cuadras") +
			obtenerValorAtributoFuncionLineal("Construccion","Cuadras") +
			obtenerValorAtributoFuncionLineal("Farmacia","Cuadras") +
			obtenerValorAtributoFuncionLineal("Hospitales","Cuadras") +
			obtenerValorAtributoFuncionLineal("Veterinarias","Cuadras") +
			obtenerValorAtributoFuncionLineal("Peluquerias","Cuadras") +
			obtenerValorAtributoFuncionLineal("Libreria","Cuadras") +
			obtenerValorAtributoFuncionLineal("Talleres_Mecanicos","Cuadras") +
			obtenerValorAtributoFuncionLineal("Bicicleteria","Cuadras") +
			obtenerValorAtributoFuncionLineal("Cines","Cuadras") +
			obtenerValorAtributoFuncionLineal("Bares","Cuadras") +
			obtenerValorAtributoFuncionLineal("Teatros","Cuadras") +
			obtenerValorAtributoFuncionLineal("Restaurantes","Cuadras") + 
			obtenerValorAtributoValoresDiscretos("Ascensor") +
			obtenerValorAtributoValoresDiscretos("Cocina") +
			obtenerValorAtributoValoresDiscretos("Banio") +
			obtenerValorAtributoValoresDiscretos("Lavarropas") +
			obtenerValorAtributoValoresDiscretos("Vista") +
			obtenerValorAtributoValoresDiscretos("Iluminacion") +
			obtenerValorAtributoValoresDiscretos("Pintura") +
			obtenerValorAtributoValoresDiscretos("Pisos") +
			obtenerValorAtributoValoresDiscretos("Amoblado") +
			obtenerValorAtributoValoresDiscretos("Parrilla") +
			obtenerValorAtributoValoresDiscretos("Seguridad") +
			obtenerValorAtributoValoresDiscretos("Cortes_de_Luz") +
			obtenerValorAtributoValoresDiscretos("Cortes_de_Gas") +
			obtenerValorAtributoValoresDiscretos("Cortes_de_Agua") +
			obtenerValorAtributoValoresDiscretos("Quilombo") +
			obtenerValorAtributoValoresDiscretos("Atractivo_Visual") +
			obtenerValorAtributoInstalacionDeAgua() +
			obtenerValorAtributoInstalacionDeGas() +
			obtenerValorAtributoInstalacionDeLuz() + 
			obtenerValorAtributoDistribucionYTamanio() +
			"||||||||||||||||||||||||||||||||||||||||\n" +
			"Total Puntaje = " + document.getElementsByName("resultado")[0].value + "\n" +
			"||||||||||||||||||||||||||||||||||||||||\n";
		
	var blob = new Blob([contenidoArchivo], {type: 'text/plain'});
	textFile = window.URL.createObjectURL(blob);

	var link = document.getElementById('downloadlink');
	link.href = textFile;
	link.download = "Puntaje " + document.getElementsByName("Nombre")[0].value;
	link.click();
}