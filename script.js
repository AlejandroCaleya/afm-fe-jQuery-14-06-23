let num = parseInt(prompt("Introduce un dato: "));

$(document).ready(inicializar); /* se ejecuta una vez el DOM esta cargado */
$(window).ready(inicializar);

function inicializar() {
	alert("Hola");
}

// -----------------------------------------------------------------------------------------------------------------

$(inicializar); /* se ejecuta una vez el DOM esta cargado */

function inicializar() {
	alert("Hola");
}

// -----------------------------------------------------------------------------------------------------------------

$(inicializar); /* se ejecuta una vez el DOM esta cargado */

function inicializar() {
	$("#boton").on("click", btnPulsado);

	function btnPulsado() {
		alert("Botón pulsado!");
	}
}

// -----------------------------------------------------------------------------------------------------------------

$(inicializar); /* se ejecuta una vez el DOM esta cargado */

function inicializar() {
	$("#boton").on("click", function () {
		/* La función btnPulsado la metes directamente como función anónima */
		alert("Botón pulsado!");
	});
}

// -----------------------------------------------------------------------------------------------------------------

$(inicializar); /* se ejecuta una vez el DOM esta cargado */

function inicializar() {
	/* cambias el .on('click, función) {} --> por: .click(function () {} */
	$("#boton").click(function () {
		/* La función btnPulsado la metes directamente como función anónima */
		alert("Botón pulsado!");
	});
}
