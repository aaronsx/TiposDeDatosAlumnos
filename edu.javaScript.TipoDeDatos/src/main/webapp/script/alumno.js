function Clase()
{
	function Alumno(nombre, apellidos, edad) 
	{
  		this.nombre=nombre;
  		this.apellidos=apellidos;
  		this.edad=edad;
	}
	var Alumnos = new Alumno('Aaron Senen', 'Muñoz Prada', 21);
	
	document.writeline(Alumnos);
}