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