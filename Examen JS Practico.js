
/*===============================================
=           Ejercicio 1                         =
===============================================*/
//Escribe una función para invertir una cadena de texto

function invertirCadena(cadena) {
    let resultado = '';
    for (let i = cadena.length - 1; i >= 0; i--) {
      resultado += cadena[i];
    }
    return resultado;
  }
  
  // Ejemplo de uso
  const cadenaOriginal = "Hola, mundo!";
  const cadenaInvertida = invertirCadena(cadenaOriginal);
  
  console.log(cadenaInvertida);  // Salida de Texto al revez
  

  /*===============================================
=            Ejercicio 2                          =
===============================================*/
//Crea un objeto en en llave script y luego realiza una iteración sobre sus propiedades

// Crear un objeto llamado script
const script = {
  nombre: 'EjemploScript',
  autor: 'Edder',
  version: '1.0',
  descripcion: 'Este es un objeto de script en JavaScript',
};

// Iterar sobre las propiedades del objeto
for (let propiedad in script) {
  if (script.hasOwnProperty(propiedad)) {
    console.log(`${propiedad}: ${script[propiedad]}`);
  }
}


/*===============================================
=            Ejercicio 3                        =
===============================================*/
//Implementa una función que sume todos los números de un arreglo

function sumarNumerosConReduce(numeros) {
  return numeros.reduce((acumulador, numero) => acumulador + numero, 0);
}

// Ejemplo de uso:
const arreglo = [1, 2, 3, 4, 5];
const resultado = sumarNumerosConReduce(arreglo);
console.log(resultado); // salida: suma de numeros que se vayan agregando al arreglo




/*===============================================
=            Ejercicio 4                        =
===============================================*/
//Escriba una función que devuelva la lista de números primos hasta un número dado

function obtenerNumerosPrimos(hasta) {
  return Array.from({ length: hasta + 1 }, (_, i) => i)
    .filter((num) => num > 1 && Array.from({ length: Math.sqrt(num) + 1 }, (_, i) => i + 2).every(divisor => num % divisor !== 0));
}

// Ejemplo de uso:

// Aqui se modifica el número de cual se quieren sacar los números primos:
const limiteSuperior = 15;
const listaPrimos = obtenerNumerosPrimos(limiteSuperior);
console.log(listaPrimos); 

/*===============================================
=            Ejercicio 5                       =
===============================================*/
// Usa promesas, simula una llamada síncrona que se resuelve después de dos segundos

function llamadaSimulada() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Simulación de una operación que toma dos segundos
      const exito = true;

      if (exito) {
        resolve("Llamada resuelta con éxito");
      } else {
        reject("Llamada fallida");
      }
    }, 2000); // 2000 milisegundos = 2 segundos
  });
}

// Uso de la función llamadaSimulada
console.log("Inicio de la llamada");

llamadaSimulada()
  .then((resultado) => {
    console.log("Éxito:", resultado);
  })
  .catch((error) => {
    console.error("Error:", error);
  })
  .finally(() => {
    console.log("Fin de la llamada");
  });
