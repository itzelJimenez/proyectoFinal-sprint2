function Lista(nombre){
		this.nombre = nombre;
		this.nuevoElemento = function(nuevoElemento){
			var elementoLi = document.createElement("LI");
			var nodo = document.creatTextNode(nuevoElemento);
			elementoLi.appendChild(nodo);
		}
		
		this.borrarElemento= function(){

		}
}


function crearLista(Lista){
		var nuevaLista = document.createElement('UL');
		var nombreDeNuevaLista =document.getElementById("nombreNuevaLista").value;
		var nodo = document.createTextNode(nombreDeNuevaLista);
		nuevaLista.appendChild(nodo);
			
		var aquiHareOtraLista = document.getElementById("listasNuevas");
		aquiHareOtraLista.appendChild(nuevaLista);
		
		var formulario = document.createElement("input");
		formulario.type = "text";
		formulario.id= "nombre";
		nuevaLista.appendChild(formulario);

		var boton = document.createElement("input");
		boton.type = "button";
		boton.value= "Agregar elemento";
		boton.onclick = function(){
			var elementoLi = document.createElement("LI");
			var nombreElemento = document.getElementById("nombre").value;
			var nodo = document.createTextNode(nombreElemento);
				elementoLi.appendChild(nodo);
				nuevaLista.appendChild(elementoLi);
			//Agrega todo el elemento Li a la Lista
			nuevaLista.appendChild(elementoLi);

			//Agregar botón de borrar a cada elemento de los elementos
			var botonBorrar = document.createElement('input');
				botonBorrar.type = "button";
				botonBorrar.value = "Eliminar tarea";
			botonBorrar.onclick = function(){
				alert("funciona chidoliro");
				nuevaLista.removeChild(elementoLi);
				nuevaLista.removeChild(botonBorrar);
			}
			
			
			nuevaLista.appendChild(botonBorrar);
		}
		nuevaLista.appendChild(boton);
		var botonBorrarLista = document.createElement("input");
		botonBorrarLista.type = "button";
		botonBorrarLista.value = "Eliminar Lista";
		botonBorrarLista.onclick = function(){
			alert("ya programa lo de la borrada")
		}
		nuevaLista.appendChild(botonBorrarLista);

		
}


