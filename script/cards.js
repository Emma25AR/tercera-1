console.log("Cargando Cards");

const dataCards = [
    {
        "title": "Bajos",
        "url_image": "./imgs/bajoAcus.jpg",
        "desc": "El mejor del año, esta vez fue otorgado para un título muy importante lanzado en julio pasado para la consola Nintendo.",
        "cta": "Mostrar más...",
        "link": "./bajos.php"
    },
    {
        "title": "Guitarras",
        "url_image": "./imgs/fenderStrato.jpg",
        "desc": "Guitarras",
        "cta": "Mostrar más...",
        "link": "./guitarra.php"
    },
    {
        "title": "Playstation",
        "url_image": "./imgs/bajoE.jpg",
        "desc": "Muchos juegos exclusivos",
        "cta": "Mostrar más...",
        "link": "./ps5.php"
    }
];

(function () {
    let CARD = {

        init: function() {
            let _self = this;
            this.insertData(_self);
        },

        insertData: function(_self) {
            dataCards.map(function (item, index) {
                document.querySelector('.card-list').insertAdjacentHTML('beforeend', _self.tplCardItem(item,index));
            })
        },

        tplCardItem: function(item, index) {
            return(`<div class='card-item id='card-number-${index}'>
                <img src='${item.url_image}'>
                <div class='card-info'>
                    <p class='card-title'>${item.title}</p>
                    <p class='card-desc'>${item.desc}</p>
                    <a class='card-cta' target='blank' href='${item.link}'>${item.cta}</a>
                </div>
            </div>`)
        },
    }
    CARD.init();
})();