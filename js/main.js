// Mapa

if (document.getElementById('mapa')) {

    var map = L.map('mapa').setView([17.960890, -102.195890], 17);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

    L.marker([17.960890, -102.195890]).addTo(map).bindPopup('Albercas del mar').openPopup();
    // .bindTooltip('GDLWebCamp 2018, Boletos ya disponibles')
    // .openTooltip();
}
(function () {
    $(function () {
        // Colorbox

        $('body.invitados .navegacion-principal a:contains("Invitados")').addClass('activo');

        $('.alberca-info').colorbox({ inline: true, width: '50%' });
        $('.boton_newsletter').colorbox({ inline: true, width: '50%' });
    })
})();




const url = 'https://fb-api-5835a-default-rtdb.firebaseio.com/anuncios.json'




// fetch(url)
//     .then(response => response.json())
//     .then(data => {

//         let element = document.getElementById('elem')

//         data.forEach(anun => {
//             element.innerHTML = `
            
//             <div class="contenedor-anuncios">
//             <div class="anuncio">
//             <img src="${anun.url}" alt="">
//             <div class="contenido-anuncio">
//             <h3>${anun.name} </h3>
//             <p>${anun.descripcion}</p>
            
//             </div>
//             </div>
//             </div>
            
//             `;
//         });
//         console.log(element);


//         console.log(data);
//     })
//     .catch(err => console.log(err))

fetch(url)
    .then((response) => response.json())
    .then((data) => {

        let output = ` <div class="contenedor-anuncios">`;

        data.forEach(function(anun)  {
            output += `
            
            <div class="anuncio">
            <img src="${anun.url}" alt="">
            <div class="contenido-anuncio">
            <h3>${anun.name} </h3>
            <p>${anun.descripcion}</p>
            
            </div>
            </div>
            `;
        });
        document.getElementById('elem').innerHTML=output;
        console.log(element);


        console.log(data);
    })
    .catch(err => console.log(err))


  