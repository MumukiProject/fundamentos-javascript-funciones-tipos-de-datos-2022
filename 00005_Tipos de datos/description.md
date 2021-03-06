Como acabamos de ver, en JavaScript existen números, booleanos y strings:

|  Tipo de dato |  Representa             |  Ejemplo |  Operaciones                   |
|---------------|-------------------------|----------|--------------------------------|
|Números        |cantidades               | `4947`   | `+`, `-`, `*`, `%`, `<`, etc   |
|Boolean        |valores de verdad        | `true`   | `&&`, `!`, etc                 |
|Strings        |texto                    | `"hola"` | `.length`, `.toUpperCase()`, etc  |


Además, existen operaciones que sirven para todos los _tipos de datos_, por ejemplo:

* `===`: nos dice si dos cosas son iguales
* `!==`: nos dice si dos cosas son diferentes

**Es importante usar las operaciones correctas con los tipos de datos correctos**, por ejemplo, no tiene sentido sumar dos booleanos o hacer operaciones booleanas con los números. **Si usas operaciones que no corresponden, cosas muy raras y malas pueden pasar**. :confounded:

> Probá en la consola las siguientes expresiones en orden:
>
>``` javascript
ム 5 + 6 // ok, los números se pueden sumar
```
>
>``` javascript
ム 5 === 6 // ok, todas las cosas se pueden comparar
``` 
>
>``` javascript
ム 8 > 6 // ok, los números se pueden ordenar
```
>
>``` javascript
ム !true // ok, los booleanos se pueden negar
```  
>
>``` javascript
ム false / true // no está bien, ¡los booleanos no se pueden dividir!
```