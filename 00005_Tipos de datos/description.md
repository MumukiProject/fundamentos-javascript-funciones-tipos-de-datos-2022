Como acabamos de ver, en JavaScript existen al menos números y booleanos. Sin embargo, no son los únicos tipos de datos:

|  Tipo de dato |  Representa             |  Ejemplo |  Operaciones                   |
|---------------|-------------------------|----------|--------------------------------|
|Números        |cantidades               | `4947`   | `+`, `-`, `*`, `%`, `<`, etc   |
|Boolean        |valores de verdad        | `true`   | `&&`, `!`, etc              
|Strings        |texto                    | `"hola"` | ...en breve lo veremos...      |
|Listas         |conjuntos de cosas       | `[1, 9]` | ...en breve lo veremos...      |


Además, existen operaciones que sirven para todos los tipos de datos, por ejemplo:

* `===`: nos dice si dos cosas son iguales
* `!==`: nos dice si dos cosas son diferentes

**Es importante usar las operaciones correctas con los tipos de datos correctos**, por ejemplo, no tiene sentido sumar dos booleanos o hacer operaciones booleanas con los números. **Si usas operaciones que no corresponden, cosas muy raras y malas pueden pasar**. :confounded:

> Probá en la consola las siguientes cosas:
>
> * `5 + 6` (ok, los números se pueden sumar)
> * `5 === 6` (ok, todas las cosas se pueden comparar)
> * `8 > 6` (ok, los números se pueden ordenar)
> * `!true` (ok, los booleanos se pueden _negar_)
> * `false / true` (no está bien, ¡los booleanos no se pueden dividir!)

