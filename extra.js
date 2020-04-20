// Nos dice cuan largo es un string
//
// Por ejemplo:
//
//  longitud("hola") devuelve 4
function longitud(unString) {
  return unString.length; 
}

// Convierte una palabra en mayúsculas
//
// Por ejemplo: 
//
//   convertirEnMayuscula("hola") devuelve "HOLA"
function convertirEnMayuscula(unString) {
  return unString.toUpperCase()
}

// Nos dice si unString empieza con otroString
//
// Por ejemplo: 
//
//   comienzaCon("hola todo el mundo", "hola todo") devuelve true
function comienzaCon(unString, otroString) {
  return unString.startsWith(otroString);
}
