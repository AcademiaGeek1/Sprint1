//selecciona el form y al formulario se le agrega un detector de eventos
const form = document.getElementById("formulario");
//console.log(form)
//cuando haya un evento submit osea el boton, escucha y ejecuta la funcion
form.addEventListener("submit", function(event){
    event.preventDefault();
}
)

var cantidad = 0;
var descuento = 0;
var valorcompra = 0;
var totalcompra = 0;

function Calcular(){
    
    cantidad = Number(document.getElementById('idcantidad').value);
    valorcompra = cantidad * 820000;

    if (valorcompra>=1640000 && valorcompra<=3280000){
        descuento= 0.15;
        totalvalorcompra= valorcompra*0.15;
    }
    else if (valorcompra>3280000 && valorcompra<=6560000){
        descuento= 0.25;
        totalvalorcompra= valorcompra*0.25;
    }
    else if(valorcompra>6560000 && valorcompra<=9840000){
        descuento= 0.35;
        totalvalorcompra= valorcompra*3.15;
    }
    else{
        descuento=0;
    }
    total= totalvalorcompra-descuento;
    document.getElementById('valorcompra').value = valorcompra;
    document.getElementById('valordescuento').value = descuento;
    document.getElementById('total').value = total;
    document.getElementById('descuento').innerHTML = "el descuento es del: "+(descuento*100) + "%";
}