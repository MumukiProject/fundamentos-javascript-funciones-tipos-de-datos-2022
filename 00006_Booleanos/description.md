Ahora miremos a los booleanos con un poco más de detalle:

* Se pueden negar, mediante el operador `!`: `!hayComida`
* Se puede hacer la conjunción lógica entre dos booleanos (_and_, también conocido en español como _y lógico_), mediante el operador `&&`: `hayComida && hayBebida`
* Se puede hacer la disyunción lógica entre dos booleanos (_or_, también conocido en español como _o lógico_), mediante el operador `||`: `unaExpresion || otraExpresion`

> Veamos si se entiende; definí las siguientes funciones:
>
> * `estaEntre`, que tome tres números y diga si el primero es mayor al segundo y menor al tercero.
> * `estaFueraDeRango`: que tome tres números y diga si el primero es menor al segundo o mayor al tercero
>
> Ejemplos:
>
> ```javascript
> ム estaEntre(3, 1, 10)
> true
> ム estaEntre(90, 1, 10)
> false
> ム estaEntre(10, 1, 10)
> false
> ム estaFueraDeRango(17, 1, 10)
> true
> ```
>
