const { registrar, leer } = require('./operaciones');

  

const [, , operacion, ...args] = process.argv;

// Validar la operación
if (operacion !== 'registrar' && operacion !== 'leer') {
    console.error('Operación no válida. Las operaciones válidas son "registrar" y "leer".');
} else {
    
    if (operacion === 'registrar') {
        if (args.length !== 5) {
            console.error('Error: Se esperan 5 argumentos para la operación "registrar".');
        } else {
            const [nombre, edad, tipoAnimal, color, enfermedad] = args;
            registrar(nombre, edad, tipoAnimal, color, enfermedad);
        }
    } else if (operacion === 'leer') {
        leer();
    }
}
