Además de los operadores matemáticos `+`, `-`, `/` y `*`, existen muchas otras funciones matemáticas comunes, algunas de las cuales ya vienen con JavaScript y están listas para ser usadas.

Sin embargo, la sintaxis de estas funciones matemáticas es _apenitas_ diferente de lo que veníamos haciendo hasta ahora: hay que prefijarlas con `Math.`. Por ejemplo, la función que nos sirve para redondear un número es `Math.round`:

```javascript
function cuantoSaleAproximadamente(precio, impuestos) {
   return Math.round(precio * impuestos);
}
```

> Probá en la consola las siguientes expresiones:
>
> * `Math.round(4.4)`
> * `Math.round(4.6)`
> * `Math.max(4, 7)`
> * `Math.min(4, 7)`