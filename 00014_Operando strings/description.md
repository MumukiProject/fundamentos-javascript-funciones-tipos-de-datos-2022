¿Y qué podemos hacer con los strings, además de compararlos? ¡Varias cosas! Por ejemplo, podemos preguntarles cuál es su cantidad de letras:

```javascript
ム longitud("biblioteca")
10
ム longitud("babel")
5
```

O también podemos _concatenarlos_, es decir, obtener **uno nuevo** que junta dos strings:

```javascript
ム "aa" + "bb"
"aabb"
ム "sus anaqueles " + "registran todas las combinaciones"
"sus anaqueles registran todas las combinaciones"
```

O podemos preguntarles si uno comienza con otro:

```javascript
ム comienzaCon("una página", "una")
true
ム comienzaCon("la biblioteca", "todos los fuegos")
false
```

> Veamos si queda claro: definí una función `longitudNombreCompleto`, que tome un nombre y un apellido, y devuelva su longitud total, contando un espacio extra para separar a ambos:
>
>```javascript
> ム longitudNombreCompleto("Cosme", "Fulanito")
>14
>```