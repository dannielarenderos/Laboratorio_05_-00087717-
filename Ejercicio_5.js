let rad = prompt("Ingrese el radio de la circunferencia");


var area = (rad) => {


    if (rad<=0) 
{
    console.log("ERROR:El radio debe ser mayor que cero");

}
else {
let ar =   Math.PI * Math.pow(rad, 2);
    console.log("EL RADIO DE LA CIRCUNFERENCIA ES " + ar)
}  ;
};