let array = [2, 4, 2, 5, 7, 5];

array.sort(); // [2, 2, 4, 5, 5, 7]

/* 
NÚMEROS BINARIOS

Se leen de derecha a izquierda potrque el mínimo valor lo tenemos en la derecha. 

Van dos números binarios:
19 = 10011
24 = 11000
43 = ?

Cómo sumamos ambos:

110011
011000
------
101011

Empezamos de derecha a izquierda:

AND:Para que al and sea positivo tienen que ser true (1) los dos. Con que uno sea 1 te devuelve 1 (true). El and te determina si hay un acarrero.
A B AND
1 0  0
0 1  0
1 1  1
0 0  0

XOR: exclusivamente hago 0. Es decir si los dos son true entonces te da 0. con que uno sea true (1) te devuelve true, o sea 1. El xor es un or exclusivo. Es decir, se tiene que dar uno solo de ellos.

Posibles resultados:
A B XOR
1 0  1
0 1  1
1 1  0
0 0  0

Paso 1)
1 and 0 = 0 (no tengo acarreo. El acarrero equivale a cuando sumo una misma línea que supera el número nueve por ejemeplo, entonces se pasa el número uno a la posición adelante. Luego con el xor obtenemos el valor) 
1 xor 0 = 1

Paso 2)
1 and 0 = 0 (no tengo acarreo)
1 xor 0 = 1

Paso 3)
0 and 0 = 0 (no tengo acarreo)
0 xor 0 = 0

Paso 4)
0 and 1 = 0 (no tengo acarreo)
0 xor 1 = 1

Paso 5)
1 and 1 = 1 (tengo acarreo)
1 xor 1 = 1

*/

/* Cómo hago traducción de números decimales a binarios:

10011

Cada posición va a ser 2 ** (indice que me encuentro)

El primer indice (se hace de derecha a izquierda) es 0.

Es decir, la primer (0) posición vale 2**0 y así hasta la posición 9

1        0       0       1      1
2**4   2**3    2**2    2**1    2**0
16      8       4        2      1 
Ahora se multiplican por el número 1 o 0 según su valor de posición (10011): 
16  +  0   +   0    +   2   +   1 = 19


1         1          0           0           0
2**4     2**3      2**2        2**1         2**0
16        8         4            2            1
16        8         0             0           0 = 24


DECIMAL A BINARIO:
Lo voy dividiendo por 0 y viendo cuánto es el resto. Luego lo doy vuelta y ese es el número binario:

división  total   resto
-----------------------
19/2    = 9       [1]
9/2     = 4       [1]
4/2    =  2       [0]
2/2    =  1       [0]
1/2    =  0       [1]
------------------------
1 0 0 1 1 = 19

división  total   resto
-----------------------
24/2    = 12      [0]
12/2    = 6       [0]
6/2    =  3       [0]
3/2    =  1       [1]
1/2    =  0       [1]
------------------------
1 1 0 0 0 = 24

1 byte tiene 8 posiciones (bits). Representa el espacio de memoria que ocupa el elemento. En el mejor de los casos es 1 1 1 1 1 1 1 1 que te da en número decimal 255. Es decir, tengo 255 elementos. Pero con tan pocos elementos no podes representar todos los elementos del mundo. Por eso se decidió ampliar la cantidad de posiciones del byte en la máquina para poder representar más cosas. El lenguaje de máquina es 0 y 1. 

El compilador traduce el lenguaje que usas a 0 y 1. A mayor complejidad del lenguaje mayor la dificultad para el compilador traducirlo. Y mientras más fácil es para nosotros entender el lenguaje, es decir, mientras más se aleja del 0 y 1, más díficial traducirlo por el compilador.

*/
