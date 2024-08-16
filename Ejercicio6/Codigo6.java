package Ejercicio03;
//Importamos al scanner
import java.util.Scanner;

public class Codigo6 { // por convencion se nombran las clases con Upper Cammel Case
    //Añadimos la clase pública main
    public static void main(String[] args) {    	
    	Scanner s = new Scanner(System.in); //agregamos un Scanner y lo importamos en la parte de arriba
   	int[] n = new int [20];
    for (int i = 0; i < 20; i++) {//hacia falta un  +
      n[i] = (int)(Math.random() * 381) + 20;
      System.out.print(n[i] + " ");//agregamos el .out
    }
    
    System.out.println("\n¿Qué números quiere resaltar? ");
    System.out.println("(1 –los múltiplos de 5, 2 – los múltiplos de 7): ");
    int opcion = s.nextInt(); // se cambio por Scanner

    int multiplo = (opcion == 1) ? 5 : 7;

    for (int e : n) { // se quito el forEach por for
    if (e % multiplo == 0) {
        System.out.print("[" + e + "] ");
      } else {
        System.out.print(e + " ");//system.out
       }
      }
}
}
