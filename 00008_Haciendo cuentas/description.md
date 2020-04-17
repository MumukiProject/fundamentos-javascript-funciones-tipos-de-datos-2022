Además de los operadores matemáticos `+`, `-`, `/` y `*`, existen muchas otras funciones matemáticas comunes, algunas de las cuales ya vienen con JavaScript y están listas para ser usadas.

Sin embargo, la sintaxis de estas funciones matemáticas es _apenitas_ diferente de lo que veníamos haciendo hasta ahora: hay que prefijarlas con `Math.`. Por ejemplo, la función que devuelve el valor absoluto de un número es `Math.abs`:

```javascript
function dobleDelAbsoluto(numero) {
   return 2 * Math.abs(numero);
}
```

> Probá en la consola las siguientes expresiones:
>
> * `Math.abs(4)`
> * `Math.abs(0)`
> * `Math.abs(-123)`
> * `Math.round(4.6)`
> * `Math.round(4.3)`
> * `Math.floor(4.3)`
> * `Math.floor(4.6)`
> * `Math.max(4, 7)`
> * `Math.min(4, 7)`