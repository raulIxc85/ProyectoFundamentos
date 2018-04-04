var anchoPared, alturaPared, areaPared, info;
var anchoVen, alturaVen, areaVen;
var anchoPuerta, alturaPuerta, areaPuerta, TotalArea;

anchoPared=prompt("Ingrese ancho de la pared (metros): ");
alturaPared=prompt("Ingrese altura de la pared (metros): ");
areaPared=anchoPared*alturaPared;
document.write("Area de la pared: "+areaPared+" metros cuadrados.");

info=prompt("La pared tiene ventana: S/N");
if ((info=='S')|| (info=='s')){
  anchoVen=prompt("Ingrese ancho de la ventana (metros):");
  alturaVen=prompt("Ingrese altura de la venta (metros):");
  areaVen=anchoVen*alturaVen;
  document.write("Area de la ventana: "+areaVen+" metros cuadrados.");
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
  document.write("Area de la puerta: "+areaPuerta+" metros cuadrados.");
}
else
{
    areaPuerta=0;
}
TotalArea=areaPared-areaVen-areaPuerta;
document.write("Total del area de la pared: "+TotalArea+" metros cuadrados");
