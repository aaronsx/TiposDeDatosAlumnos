function Objeto() 
	{			
			 function alumno(nombre, apellido, edad) 
			 {
	          		this.nombre=nombre;
	        		this.apellido=apellido;
	        		this.edad=edad;
	    	 }
	    var Alumnos = new alumno(" Aaron Senen", " Munoz Prada", " "+21);
	
	    document.write(Alumnos instanceof Object);
	    document.write(Alumnos);
	    document.write(Alumnos.nombre);
		document.write(Alumnos.apellido);
		document.write(Alumnos.edad);
	}
	