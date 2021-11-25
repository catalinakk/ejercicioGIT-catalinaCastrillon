//Ejercicio 1

var numero1 = 5;
var numero2 = 8;
if (numero1 <= numero2) {
    console.log("numero1 no es mayor que numero2");
}

if (numero2 > 0) {
    console.log("numero2 es positivo");
}

if (numero1 > 0) {
    console.log("numero1 es negativo o distinto de cero");
}

numero1 = numero1 + 1

if (numero1 < numero2) {
    console.log(numero1)
    console.log(numero2)
    console.log("Incrementar en 1 unidad el valor de numero1 no lo hace mayor o igual que numero2");

}

//Ejercicio 2
function parImpar(numero) {
    if (numero%2 == 0){
       return "Par";
    }
   else{
       return "Impar";
   }
}
console.log(parImpar(2));

//Ejercicio 3 factorial
function factorial (n) {
   var total = 1; 
   for ( var i=1; i<=n; i++) {
       total = total * i; 
   }
   return total; 
}

console.log(factorial(5));

//Ejercicio 4

function palindromo(str) {
    //validacion de expresiones regulares
    var re = /[\W_]/g;
    
    //validacion de mayusculas, y remplazo
    var inicio = str.toLowerCase().replace(re, '');
    //valdiacion de vacios, validacion de alreves y la union
    var alreves = inicio.split('').reverse().join('');
    return alreves === inicio;
    }
    console.log(palindromo("A man, a plan, a canal. Panama"))


//Ejercicio 5
**//clase estudiante

package examen.practico;

public class Estudiante extends Persona {

	private double calificacion;

	public Estudiante(String nombre, String edad) {
		super(nombre, edad);
	}

	@Override
	public void obtDetalles() {
		super.obtDetalles();
		System.out.println("calificacion " + calificacion);

	}

	public double getCalificacion() {
		return calificacion;
	}

	public void setCalificacion(double calificacion) {
		this.calificacion = calificacion;
	}
	
	

}

**//clase grupo

package examen.practico;

import java.awt.List;

public class Grupo {
	private String promedio;
	private Estudiante estudiantes[];
	private Profesor profesor;

	public Grupo(Profesor profesor, Estudiante[] estudiantes) {
		this.profesor = profesor;
		this.estudiantes = estudiantes;
	}

	public void calificar() {
		for (Estudiante estudiante : estudiantes) {
			estudiante.setCalificacion(Math.random() * 10);

		}

	}

	private double calcularPro() {

		double promedio = 0;
		for (Estudiante estudiante : estudiantes) {
			promedio = promedio + estudiante.getCalificacion();
		}
		return promedio;
	}

	public void obtDetalles() {
		System.out.println("profesor");
		profesor.obtDetalles();
		System.out.println("estudiantes");
		for (Estudiante estudiante : estudiantes) {
			estudiante.obtDetalles();	
		}

	}

}

**// clase persona

package examen.practico;

public class Persona {

	private String nombre;
	private String edad;

	public void obtDetalles() {

		System.out.println("nombre "+ nombre);
		System.out.println("edad "+ edad);

	}
	
	public Persona(String nombre, String edad) {
		super();
		this.nombre = nombre;
		this.edad = edad;
	}

	
	
}

**// clase profesor

package examen.practico;

public class Profesor extends Persona {

	private String asignatura;
	private String nivel;

	public Profesor(String nombre, String edad, String asignatura, String nivel) {
		super(nombre, edad);
		this.asignatura = asignatura;
		this.nivel = nivel;
	}

	public Profesor(String nombre, String edad) {
		super(nombre, edad);
		this.asignatura = "JS";
		this.nivel = "BASICO";
	}

	@Override
	public void obtDetalles() {
		super.obtDetalles();
		System.out.println("asignatura " + asignatura);
		System.out.println("nivel " + nivel);

	}

}
 **// clase principal

 package examen.practico;

public class main {

	public static void main(String[] args) {
		Estudiante[] estudiante= new Estudiante[6];
		estudiante[0]= new Estudiante("catalina", "30");
		estudiante[1]= new Estudiante("gabriela", "10");
		estudiante[2]= new Estudiante("natalia", "18");
		estudiante[3]= new Estudiante("angela", "30");
		estudiante[4]= new Estudiante("javier", "60");
		estudiante[5]= new Estudiante("filomena", "5");


		Profesor profesor = new Profesor("eduardo", "56");
		Grupo grupo = new Grupo(profesor, estudiante);
		grupo.calificar();
		grupo.obtDetalles();
		

	}

}





