/**
 * Este programa simula un juego de "Piedra, Papel o Tijeras" para dos jugadores.
 * Cada jugador ingresa su elección, y el programa determina el ganador según las reglas del juego.
 * Si ambos jugadores eligen la misma opción, el resultado es un empate.
 * De lo contrario, el programa compara las elecciones para determinar quién gana.
 * Al final, el programa muestra en pantalla el jugador ganador o si ha habido un empate.
 
 Se quito el segundo Scanner
 Se coloco el metodo equals en lugar de ==
 Se agrego los break;
 Se coloco case "tijeras":
 */
package com.generation;

import java.util.Scanner;

public class Codigo4 {
	public static void main(String[] args) {
		Scanner s = new Scanner(System.in);
	    
	    System.out.print("Turno del jugador 1 (introduzca piedra, papel o tijeras): ");
	    String j1 = s.nextLine();
	    
	    System.out.print("Turno del jugador 2 (introduzca piedra, papel o tijeras): ");
	    String j2 = s.nextLine();
	    
	    if (j1.equals(j2)) {
	      System.out.println("Empate");
	    } else {
	      int g = 2;
	      switch(j1) {
	        case "piedra":
	          if (j2.equals("tijeras") ) {
	            g = 1;
	          }
	          break;
	        case "papel":
	          if (j2.equals("piedra")) {
	            g = 1;
	          }
	          break;
	        case "tijeras":
	          if (j2.equals("papel")) {
	            g = 1;
	          }
	          break;
	        default:
	      }
	      System.out.println("Gana el jugador " + g);
	    }
	    s.close();
	}
}
