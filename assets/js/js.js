function Lista(nombre){
		this.nombre = nombre;
		this.nuevoElemento(){
			var elementoLi = document.creatElement("LI");
			var nombre = document.getElementById("nombreElemento");
			var nodo = document.creatTextNode(nombre);
			elementoLi.appendChild(nodo);
		}
		this.borrarElemento()function{

		}
}


function crearLista(Lista){
			//Crear elemento padre
		var nuevaLista = document.creatElement('UL');
		nuevaLista.appendChild(Lista)
			
		var aquiHareOtraLista = document.getElementById("nombre");
		aquiHareOtraLista.appendChild(nuevaLista);
			//Obtener el nombre que tendrá mi nueva lista
		var nombreDeNuevaLista = Lista.nombre;
			//Crear el texto nodo que llevará el nombre de la lista
		aquiHareOtraLista.innerHTML = nombreDeNuevaLista;
			
		
}


