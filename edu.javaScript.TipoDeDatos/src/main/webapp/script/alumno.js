function Objeto() 
	{			
			 function alumno(nombre, apellido, edad) 
			 {
	          		this.nombre=nombre;
	        		this.apellido=apellido;
	        		this.edad=edad;
	    	 }
	    var Alumnos = new alumno(" Aaron Senen", " Munoz Prada", " "+21);
	
	    document.write(typeof(Alumnos));
	    document.write(typeof(Alumnos) == 'object'); //o document.write(AlumnoUno instanceof Object);
	    document.write(Alumnos instanceof alumno);
	    document.write(Alumnos.nombre);
		document.write(Alumnos.apellido);
		document.write(Alumnos.edad);
	}
	/*CORRECCION 
	
		function Objeto()
		{
			function alumno(nombre, apellidos, edad)
			{
				this.nombre=nombre Si no se pone sin this da un error porque fuera de esa funcion ya o existe
				this.apellidos=apellidos;
				this.edad=edad;
			}
				var AlumnoUno=new alumno('Regino','Fdez',31);
				
				document.write(typeof(AlumnoUno));
				document.write(AlumnoUno instanceof Object);
	    		document.write(AlumnoUno instanceof alumno);
	    		document.write(AlumnoUno.nombre);
				document.write(AlumnoUno.apellidos);
				document.write(AlumnoUno.edad);
		}
	
	*/ 
	