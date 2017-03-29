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
			
		var aquiHareOtraLista = document.getElementById("nombre");
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
		}
		nuevaLista.appendChild(boton);
		
		
}


