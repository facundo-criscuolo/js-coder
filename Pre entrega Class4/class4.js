let cantidadProductos = parseInt(prompt(`Hola! Cuantos productos vas a ingresar en la factura?`));
let totalFactura = 0;
let precioEnvio = 0;
let tipoFactura = parseInt(prompt(`Que tipo de factura es?
[1] Responsable Inscripto
[2] Consumidor Final
[3] Excento`));
let envio = parseInt(prompt(`Incluye envio?
[1] Si, a CABA.
[2] Si, Nacional
[3] No`));


for (let i = 1; i <= cantidadProductos; i++) {
    let nombreProducto = prompt(`Ingrese el nombre del producto ${i}:`);
    let precioProducto = parseInt(prompt(`Ingrese el precio del producto ${i}:`));

    totalFactura = totalFactura + precioProducto;
    console.log(`${nombreProducto}: $${precioProducto.toFixed(2)}`);
}


function calcularEnvio(opcEnvio, impFactura){
    let precioEnvio = 0;
    switch (opcEnvio){
        case 1: console.log(`Envio: Gratuito`);
        break;
        case 2: if (impFactura > 10000){
            console.log(`Envio: Gratuito`);
        } else {
            precioEnvio = 500;
            console.log(`Envio: $500`);
            return precioEnvio;
        }
        default: return 0;
    }
    return precioEnvio;
}

function calcularImpuesto(tipFact,totFact){

let cuit = 0;
let iva = 0;

if (tipFact == 2){
    iva = totFact * 0.21;
    totFact = totFact * 1.21;
    console.log(`IVA (21%): $${iva}`);
    console.log(`Subtotal (+21%): $${totFact}`);

} else if (tipFact == 1) {
    cuit = prompt(`Ingrese el numero de CUIL de la empresa sin espacios ni guiones`);

            iva = totFact * 0.21;
            totFact = totFact * 1.21;
            console.log(`CUIL: ${cuit}`); 
            console.log(`IVA (21%): $${iva}`)
            console.log(`Subtotal (+21%): $${totFact}`)
    }
    
    totalFactura = totFact;
    return totalFactura;
}

function calcularImporte(impIva,impEnvio){
    let importeFinal = 0;
    importeFinal = parseInt(impIva + impEnvio);
    console.log(`Total: $${importeFinal.toFixed(2)}`);
    return importeFinal;
}

console.log(`Subtotal: $${totalFactura.toFixed(2)}`);
let totalImpuesto = calcularImpuesto(tipoFactura,totalFactura);
let totalEnvio = calcularEnvio(envio,totalFactura);
calcularImporte(totalImpuesto,totalEnvio);





