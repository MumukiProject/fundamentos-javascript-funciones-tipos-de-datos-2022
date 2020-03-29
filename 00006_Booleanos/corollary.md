¡Bien hecho!

Usar los operadores `!`, `&&` y `||` por separado no tiene gran misterio. ¡Pero ojo! Pueden darnos problemas si los mezclamos. Para resolver ese problema usaremos parántesis agrupando las expresiones según lo que queramos decir. Por ejemplo según esta definición de `malTiempo` un día lluvioso y caluroso es buen tiempo...


```javascript
function malTiempo(llueve, nieva, haceFrio) {
  return (llueve || nieva) && haceFrio ;  
}
```

...pero según esta otra, cualquier día lluvioso será mal tiempo:

```javascript
function malTiempo(llueve, nieva, haceFrio) {
  return llueve || (nieva && haceFrio);  
}
```

Pero ya fueron suficientes booleanos por ahora, ¿no? Exploremos algo más interesante: los `string`s. 