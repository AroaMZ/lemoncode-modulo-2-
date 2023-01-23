var hoteles = {
    Malkorra :  {
        nombre: "Malkorra",
        ubicacion: "San Sebastian",
        img: "https://turismo.euskadi.eus/contenidos/a_alojamiento/0000095481_a1_rec_turismo/es_95481/images/GL_malkorrahotelservicios11.jpg",
        
    },

    Londres : {
        nombre: "Londres",
        ubicacion: "San Sebastian",
        img: "https://groupcorner.com/uploads/HOTELS/hotel_10291/diaporama/_-image_3_1120/1000x548_C_image_3_1120.jpg",
       
    },
};

var estrellas = {
    1: "&#9733",
    2: "&#9733 &#9733",
    3: "&#9733 &#9733 &#9733",
    4: "&#9733 &#9733 &#9733 &#9733",
    5: "&#9733 &#9733 &#9733 &#9733 &#9733",
};
 

var nombreHotel = prompt("Introduce el nombre del hotel: Malkorra o Londres");
document.getElementById("nombre").innerHTML = hoteles[nombreHotel].nombre;
document.getElementById("ubicacion").innerHTML = hoteles[nombreHotel].ubicacion;
document.getElementById("hotel-img").src = hoteles[nombreHotel].img;

var puntuacion = prompt("Que puntuacion le das al hotel? del 1 al 5");
document.getElementById("estrellas").innerHTML = estrellas[puntuacion];
document.getElementById("estrellas").style.color =  "#FFFF00";

var resena = confirm("Quieres que la reseña sea anonima?");
document.getElementById("resena").checked = resena;