//Intento de reformulación de código pero ya lo probé y no funciona, debo modularizar mejor.

function borrarElemento(){
		nuevaLista.removeChild(elementoLi);
		nuevaLista.removeChild(botonBorrar);
}

function removerLista(){
		aquiHareOtraLista.removeChild(nuevaLista);
		aquiHareOtraLista.removeChild(botonBorrarLista);
}
function agregarElemento(){
			var elementoLi = document.createElement("LI");
			var nombreElemento = prompt("¿Qué tarea quieres agregar?");
			var nodo = document.createTextNode(nombreElemento);
				elementoLi.appendChild(nodo);
				nuevaLista.appendChild(elementoLi);
			//Agrega todo el elemento Li a la Lista
			nuevaLista.appendChild(elementoLi);

			//Agrega botón de borrar a cada uno de los elementos
			var botonBorrar = document.createElement('input');
				botonBorrar.type = "button";
				botonBorrar.value = "Eliminar tarea";
			botonBorrar.onclick = borrarElemento();
			//Agrega el elemento input botón como hijo del elemento UL, variable NUEVA LISTA
			nuevaLista.appendChild(botonBorrar);
}
function crearLista(Lista){
	//CREA ELEMENTO UL EN EL HTML
		var nuevaLista = document.createElement('UL');
	//OBTIENE EL NOMBRE DE LA LISTA QUE SE VA A ASIGNAR AL UL
		var nombreDeNuevaLista =document.getElementById("nombreNuevaLista").value;
	//CONVIERTE A TEXTO NODO EL NOMBRE DE LA NUEVA LISTA
		var nodo = document.createTextNode(nombreDeNuevaLista);
	//SE ASIGNA EL NOMBRE DE LA NUEVA LISTA AL ELEMENTO UL COMO CONTENIDO
		nuevaLista.appendChild(nodo);
	//OBTIENE EL LUGAR EN DONDE SE CREARÁ UN ELEMENTO LI NUEVO
		var aquiHareOtraLista = document.getElementById("listasNuevas");
	//ASIGNA LA NUEVA LISTA COMO ELEMENTO HIJO DE UN SECTION CON ID: LISTAS NUEVAS
		aquiHareOtraLista.appendChild(nuevaLista);
	/*
	//Crea input de tipo texto, para agregar tareas 
		var formulario = document.createElement("input");
		formulario.type = "text";
	//ormulario.id= "nombre";
		nuevaLista.appendChild(formulario);
*/

		var boton = document.createElement("input");
		boton.type = "button";
		boton.value= "Agregar elemento";
		boton.onclick = agregarElemento();
		nuevaLista.appendChild(boton);
		//Botón que borra toda la lista
		var botonBorrarLista = document.createElement("input");
		botonBorrarLista.type = "button";
		botonBorrarLista.value = "Eliminar Lista";
		botonBorrarLista.onclick = removerLista();
		}
		nuevaLista.appendChild(botonBorrarLista);

		
}


