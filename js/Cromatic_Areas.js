var anchoPared, alturaPared, areaPared, info;
var anchoVen, alturaVen, areaVen;
var anchoPuerta, alturaPuerta, areaPuerta, TotalArea;
var respuesta, control=true;
var TotalSuper=0.00,contador=1;
var tipoPintura=0, rendimiento;


do {
anchoPared=prompt("Ingrese ancho de la pared (metros): ");
alturaPared=prompt("Ingrese altura de la pared (metros): ");
areaPared=anchoPared*alturaPared;
document.write("Area de la pared: "+areaPared+" metros cuadrados.<br/>");

info=prompt("La pared tiene ventana: S/N");
if ((info=='S')|| (info=='s')){
  anchoVen=prompt("Ingrese ancho de la ventana (metros):");
  alturaVen=prompt("Ingrese altura de la venta (metros):");
  areaVen=anchoVen*alturaVen;
  document.write("Area de la ventana: "+areaVen+" metros cuadrados.<br/>");
}
else
{
      areaVen=0;
}
info=prompt("La pared tiene puerta: S/N");
if ((info=='S')|| (info=='s')){
  anchoPuerta=prompt("Ingrese ancho de la puerta (metros):");
  alturaPuerta=prompt("Ingrese altura de la puerta (metros):");
  areaPuerta=anchoPuerta*alturaPuerta;
  document.write("Area de la puerta: "+areaPuerta+" metros cuadrados.<br/>");
}
else
{
    areaPuerta=0;
}
TotalArea=areaPared-areaVen-areaPuerta;
TotalSuper=parseFloat(TotalSuper)+parseFloat(TotalArea);
  document.write("Total superficie de la pared "+"No. "+contador+": "+TotalArea+" metros cuadrados.<br/>");

  respuesta=prompt("Desea ingresar otra pared: S/N");
  if ((respuesta=='N') || (respuesta=='n'))
  {
    document.write("Total de todas las superficies: "+TotalSuper+" metros cuadrados.<br/>")
    control=false;
  }
  contador=parseInt(contador)+1;
}
while (control==true);
//noprotect

tipoPintura=prompt("Ingrese el tipo de Pintura: ");
switch (tipoPintura)
  {
    case '1':
      rendimiento=TotalSuper/13; //Pintura Aceite
      document.write("El total en litros: "+rendimiento);
      break;
    case '2':
      rendimiento=TotalSuper/10; //Pintura Agua
      document.write("El total en litros: "+rendimiento);
      break;
    case '3':
      rendimiento=TotalSuper/12; //Pintura Oleo
      document.write("El total en litros: "+rendimiento);
      break;
    default:
      alert("No ha ingresado el tipo de pintura");
  }
