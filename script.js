//funcion para registrar usuario con local storage
const Registrar = e => {
    let nombre = document.getElementById('nombre').value;
        apellidos = document.getElementById('apellidos').value,
        email = document.getElementById('email').value,
        telefono = document.getElementById('telefono').value,
        edad = document.getElementById('edad').value,
        contra1 = document.getElementById('contra1').value,
        contra2 = document.getElementById('contra2').value;
    let genero = $("input:radio[name=Sexo]:checked").val();
 
    let Usuarios = JSON.parse(localStorage.getItem('Usuarios')) || [];

    let UsNexist = Usuarios.length && 
        JSON.parse(localStorage.getItem('Usuarios')).some(data => 
            data.nombre.toLowerCase() == nombre.toLowerCase() && 
            data.apellidos.toLowerCase() == apellidos.toLowerCase()
        );
//En caso de que los datos de registro ya esten usados
    if(!UsNexist){
        if(contra1 == contra2){
        Usuarios.push({ nombre, apellidos, email, telefono, edad, genero, contra1 });
        localStorage.setItem('Usuarios', JSON.stringify(Usuarios));
        document.querySelector('form').reset();

        alert("Cuenta creada con éxito"+"\nBienvenido " + nombre + ", por favor inicie sesión");
        location.href = "login.html";
        }else{
            alert("Contraseñas diferentes!");
        }
    }
    else{
        alert("Estos datos ya fueron usados por el usuario: "+ nombre + "\nIngrese datos nuevos");
    }
    e.preventDefault();

}

//Funcion para validar contraseña y correo del usuario, si existen o no
function Iniciar(e) {
    let email = document.getElementById('email').value, contra1 = document.getElementById('contra1').value;
    let Usuarios = JSON.parse(localStorage.getItem('Usuarios')) || [];
    let UsExist = Usuarios.length && 
    JSON.parse(localStorage.getItem('Usuarios')).some(data => data.email.toLowerCase() == email && data.contra1.toLowerCase() == contra1);
    if(!UsExist){
        alert("Usuario o contraseña no existentes");
    }
    else{
        location.href = "dsh.html";
    }
    e.preventDefault();
}


//Pagina Ventas
//Cada boton esta con su respectiva funcion
var conArt = 0;
function Art1(){
    totalPagar += 2299;
    conArt += 1;
    art1 += 1;
    document.getElementById('total').innerHTML=totalPagar;
    document.getElementById('totalP').innerHTML=conArt;
    document.getElementById('totalP1').innerHTML=art1;
}
function Art2(){
    totalPagar += 6499;
    conArt += 1;
    art2 += 1;
    document.getElementById('total').innerHTML=totalPagar;
    document.getElementById('totalP').innerHTML=conArt;
    document.getElementById('totalP2').innerHTML=art2;
}
function Art3(){
    totalPagar += 2799;
    conArt += 1;
    art3 += 1;
    document.getElementById('total').innerHTML=totalPagar;
    document.getElementById('totalP').innerHTML=conArt;
    document.getElementById('totalP3').innerHTML=art3;
}
function Art4(){
    totalPagar += 2699;
    conArt += 1;
    art4 += 1;
    document.getElementById('total').innerHTML=totalPagar;
    document.getElementById('totalP').innerHTML=conArt;
    document.getElementById('totalP4').innerHTML=art4;
}
function Art5(){
    totalPagar += 2199;
    conArt += 1;
    art5 += 1;
    document.getElementById('total').innerHTML=totalPagar;
    document.getElementById('totalP').innerHTML=conArt;
    document.getElementById('totalP5').innerHTML=art5;
}
function Art6(){
    totalPagar += 3699;
    conArt += 1;
    art6 += 1;
    document.getElementById('total').innerHTML=totalPagar;
    document.getElementById('totalP').innerHTML=conArt;
    document.getElementById('totalP6').innerHTML=art6;
}
var art1 = 0,art2 = 0,art3 = 0,art4 = 0,art5 = 0,art6 = 0;
var noArtTotal=0;
var ventas = 0;
var noArt = 0;
var totalPagar=0;

function pagar(){
    //datos recogidos de una label de html
    document.getElementById('total').value = totalPagar;
    document.getElementById('totalP').value = conArt;
    alert("Usted a pagado $"+ totalPagar + " por "+conArt+" articulos, gracias por su compra");
    //Local storage ventas
    ventas += totalPagar;
    ventas += JSON.parse(localStorage.getItem('ventas'));
    localStorage.setItem('ventas', JSON.stringify(ventas));

    noArt += conArt;
    noArt += JSON.parse(localStorage.getItem('noArt'));
    localStorage.setItem('noArt', JSON.stringify(noArt));

    window.location.href = "pagVentas.html"

}


//Pagina Gastos
//Cada boton esta con su respectiva funcion
function btn1(){
    totalGasto += 5000;
    document.getElementById('totalGastos').innerHTML=totalGasto;
}
function btn2(){
    totalGasto += 6000;
    document.getElementById('totalGastos').innerHTML=totalGasto;
}
function btn3(){
    totalGasto += 35000;
    document.getElementById('totalGastos').innerHTML=totalGasto;
}
function btn4(){
    totalGasto += 12000;
    document.getElementById('totalGastos').innerHTML=totalGasto;
}


var gastos = 0;
var totalGasto = 0;
    function GastosTienda(){
    //datos recogidos de una label de html
        document.getElementById('totalGastos').value = totalGasto;
        alert("Usted a pagado $ "+totalGasto+" por conceptos de gastos");
        //Local storage gastos
        gastos += totalGasto;
        gastos += JSON.parse(localStorage.getItem('gastos'));
        localStorage.setItem('gastos', JSON.stringify(gastos));
    
        window.location.href = "pagGastos.html";
    
    }

//Funcion que borra datos de las paginas
function borrarVentas(){
    window.location.href = "pagVentas.html";
}
function borrarGastos(){
    window.location.href = "pagGastos.html";
}
//Se manda a la dsh(datos usados para grafica)
//gastos
var gastosT = localStorage.getItem('gastos');
document.getElementById('gastosTnda').innerHTML = gastosT;
//productos(ventas)
var noProductos = localStorage.getItem('noArt');
document.getElementById('totalPro').innerHTML = noProductos;
