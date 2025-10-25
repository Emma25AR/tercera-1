console.log("Cargando Carousel...");

const dataCarousel = [
  {
    "title": "Concierto en vivo - Octubre",
    "image": "./imgs/concierto3.jpg",
    "desc": "Compra tus entradas ya",
    "link": "https://www.eticket.cr/masinformacion.aspx?idevento=9077"
  },
  {
    "title": "Clase de guitarra gratis",
    "image": "./imgs/clases1.jpeg",
    "desc": "Ven a aprender acordes básicos con nuestros expertos.",
    "link": "./eventos.php"
  },
  {
    "title": "Promociones en marca Fender",
    "image": "./imgs/fenders.jpg",
    "desc": "Ofertas especiales en instrumentos todo el mes.",
    "link": "./eventos.php"
  }
];

(function() {
  const CAROUSEL = {
    index: 0,

    init: function() {
      this.renderItems();
      this.startAutoSlide();
    },

    renderItems: function() {
      const container = document.querySelector('.carousel-container');
      container.insertAdjacentHTML('beforeend', `
        <div class="carousel">
          <div class="carousel-inner"></div>
          <div class="carousel-controls">
            <button class="prev">◀</button>
            <button class="next">▶</button>
          </div>
        </div>
      `);

      const inner = container.querySelector('.carousel-inner');
      dataCarousel.forEach((item, i) => {
        inner.insertAdjacentHTML('beforeend', this.tplItem(item, i));
      });

      // Eventos
      container.querySelector('.prev').addEventListener('click', () => this.slide(-1));
      container.querySelector('.next').addEventListener('click', () => this.slide(1));

      this.updateSlide();
    },

    tplItem: function(item, index) {
      return `
        <div class="carousel-item" data-index="${index}">
          <img src="${item.image}" alt="${item.title}">
          <div class="carousel-caption">
            <h3>${item.title}</h3>
            <p>${item.desc}</p>
            <a href="${item.link}" target="_blank">Ver más</a>
          </div>
        </div>
      `;
    },

    slide: function(direction) {
      this.index = (this.index + direction + dataCarousel.length) % dataCarousel.length;
      this.updateSlide();
    },

    updateSlide: function() {
      const items = document.querySelectorAll('.carousel-item');
      items.forEach((item, i) => {
        item.style.display = (i === this.index) ? 'block' : 'none';
      });
    },

    startAutoSlide: function() {
      setInterval(() => this.slide(1), 8000); // cada 5 segundos
    }
  };

  CAROUSEL.init();
})();