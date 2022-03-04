¿Y qué podemos hacer con los strings, además de compararlos? ¡Varias cosas! 

JavaScript ya viene con varias operaciones primitivas. Una de ellas es el operador `+` (sí, el mismo de la suma), que nos permite _concatenar_ dos strings, es decir, obtener **uno nuevo** que los junta:

```javascript
ム "aa" + "bb"
"aabb"
ム "sus anaqueles " + "registran todas las combinaciones"
"sus anaqueles registran todas las combinaciones"
```

Otra es la primitiva `.length`, que nos permite averiguar su cantidad de letras y se usa así:

```javascript
ム "biblioteca".length
10
ム "babel".length
5
```

Como vemos, para usar a `.length` tenemos que ponerlo _pegadito_ al string que estamos operando. :eye: Pero ojo, porque si ese string es el resultado de otra operación, vamos a tener que ponerlo entre paréntesis: 

```javascript
ム ("multi" + "color").length
10
```

Usando una sintaxis parecida, podemos preguntarle a un string si uno comienza con otro usando la primitiva `.startsWith()`:

```javascript
ム "una página".startsWith("una")
true
ム "la biblioteca".startsWith("todos los fuegos")
false
```

> Veamos si queda claro: definí la función `longitudNombreCompleto`, que tome un nombre, un segundo nombre y un apellido, y retorne su longitud total, contando dos espacios extra para separarlos:
>
>```javascript
> ム longitudNombreCompleto("Cosme", "Miguel", "Fulanito")
>21
>```