/*

DE FORMA ESTRUCTURADA

var existe50 = 3;
var existe20 = 2;
var existe10 = 2;

var montoSacar = prompt('Ingrese el monto');

function calcular(total){
    var suma = (existe50*50) + (existe20*20) + (existe10*10);
    console.log('suma ' + suma);
    if(suma >= total){
        var billetes50 = 0;
        var billetes20 = 0;
        var billetes10 = 0;
        
        billetes50 = parseInt(total/50);
        if (billetes50 > existe50){
            billetes50 = existe50;
            existe50 = 0;
            total = total - (billetes50*50);
        } else{
            existe50 = existe50 - billetes50;
            total = total - (billetes50*50);
        };
        console.log('total: ' + total);
        billetes20 = parseInt(total/20);
        if (billetes20 > existe20){
            billetes20 = existe20;
            existe20 = 0;
            total = total - (billetes20*20);
        } else{
            existe20 = existe20 - billetes20;
            total = total - (billetes20*20);
        };
        console.log('total: ' + total);
        billetes10 = parseInt(total/10);
        if (billetes10 > existe10){
            billetes10 = existe10;
            existe10 = 0;
            total = total - (billetes10*10);
        } else{
            existe10 = existe10 - billetes10;
            total = total - (billetes10*10);
        };
        
        console.log('total: ' + total);
        if(total == 0){
            document.write('En billetes son:<br/>');
            document.write('Billetes de 50: ' + billetes50 + '<br/>');
            document.write('Billetes de 20: ' + billetes20 + '<br/>');
            document.write('Billetes de 10: ' + billetes10 + '<br/>');
            document.write('Existencias de billetes:<br/>');
            document.write('Billetes de 50: ' + existe50 + '<br/>');
            document.write('Billetes de 20: ' + existe20 + '<br/>');
            document.write('Billetes de 10: ' + existe10 + '<br/>');        } else {
            document.write('<strong>No es posible otorgar ese monto con los billetes disponibles</strong>');
        }
    } else {
        document.write('<strong>El cajero no cuenta con ese monto</strong>');
    };
}

calcular(montoSacar);*/

// DE FORMA ORIENTADA A OBJETOS

var billetes = [];
billetes.push(new Billete('Cien',100, 3, 'cien.png'));
billetes.push(new Billete('Cincuenta',50, 3, 'cincuenta.png'));
billetes.push(new Billete('Veinte', 20, 2, 'veinte.png'));
billetes.push(new Billete('Diez', 10, 2, 'diez.png'));
billetes.push(new Billete('Cinco', 5, 4, 'cinco.png'));
billetes.push(new Billete('Uno', 1, 3, 'uno.png'));

var retiro =[];
var resultado = document.getElementById("resultado");

function valorCaja(){
    var suma = 0;
    for (billete of billetes){
        suma = suma + (billete.valor * billete.existencia); 
    };
    return suma;
}

function calcular(total){
    total = parseInt(total);
    var saco = total;
    var caja = valorCaja();
    if ((total <= caja) && (total > 0)) {
        for (billete of billetes){
            var necesito = Math.floor(total/billete.valor);
            if (necesito > billete.existencia) {
                total = total - (billete.existencia * billete.valor);
                retiro[billete.valor] = billete.existencia;
                billete.existencia = 0;
            } else {
                total = total - (necesito * billete.valor);
                retiro[billete.valor] = necesito;
                billete.existencia = billete.existencia - necesito;
            };
        };
        if (total != 0){
            resultado.innerHTML = '<strong>El cajero no puede procesar con ese monto</strong>';
        } else {
            for (bil of billetes){
                if (retiro[bil.valor] != 0){
                    bil.imagen.id = 'imagen' + bil.valor;
                    resultado.innerHTML = resultado.innerHTML + '<br/> Necesito ' + retiro[bil.valor] + ' de ' + bil.nombre + '<br/>';
                    document.body.appendChild(bil.imagen);
                };
            };
            resultado.innerHTML = resultado.innerHTML + '<br/> Usted solicito ' + saco;
        };
    } else {
        resultado.innerHTML = '<strong>El cajero no cuenta con ese monto</strong>';
    };
}

function buscar(){
    var plata = document.getElementById("dinero");
    calcular(plata.value);
}

document.getElementById("extraer").addEventListener("click",buscar);

