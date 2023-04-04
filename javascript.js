let cliente = prompt("Buenos dias bienvenido a Heladeria SAVA, Por favor ingresa tu nombre");
let saludo = alert(`Hola ${cliente} Hoy tenemos varios Helados en oferta que te pueden interesar`);
let metodoPago = prompt(`Los productos pueden ser abonados con efectivo o tarjetas de debito:
1: Efectivo (Retirar desde el local)
2: Tarjeta debito
`);
switch(metodoPago){
    case "1":
        alert("Pagando en efectivo tenes un %10 de descuento");
        break;
    case "2":
        alert("Pagando con tarjeta se le enviara un delivery de inmediato a su direccion");
        break;
}
let productos= prompt(`Elija uno de nuestros productos:
1: Helado de 1/4 kg
2: Helado de 1/2 kg
3: Helado de 1 kg
4: Helado de paleta`);

switch(productos){
    case"1":
    alert("Eligio Helado de 1/4 kg");
    break;
    case "2":
        alert("Eligio Helado de 1/2 kg");
    break;
    case "3":
        alert("Eligio Helado de 1 kg");
    break;
    case "4":
        alert("Eligio Helado de paleta")
    break;
    
}