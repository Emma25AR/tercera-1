console.log("Loading Drum Products");

const drumProducts = [
  {
    title: "Pearl Roadshow Drum Set",
    image_url: "./imgs/drumPearl.webp",
    price: "$1,050.00",
    cta: "Add to cart"
  },
  {
    title: "Yamaha Stage Custom Birch",
    image_url: "./imgs/yamahaDrum.jpg",
    price: "$1,299.00",
    cta: "Add to cart"
  },
  {
    title: "Ludwig Breakbeats by Questlove",
    image_url: "./imgs/ludwigDrum.jpg",
    price: "$699.00",
    cta: "Add to cart"
  },
  {
    title: "Tama Imperialstar 5-Piece",
    image_url: "./imgs/tamaDrum.webp",
    price: "$1,099.00",
    cta: "Add to cart"
  },
  {
    title: "Roland V-Drums TD-1DMK",
    image_url: "./imgs/rolandDrum.jpg",
    price: "$849.00",
    cta: "Add to cart"
  }
];

(function () {
  const PRODUCT = {
    init: function() {
      this.insertProducts();
    },

    insertProducts: function() {
      const container = document.querySelector('.product-list-drums');
      if (!container) return;
      drumProducts.forEach((item, index) => {
        container.insertAdjacentHTML('beforeend', this.templateProduct(item, index));
      });
    },

    templateProduct: function(item, index) {
      return `
        <div class='product-item' id='drum-${index}'>
          <img src='${item.image_url}' alt='${item.title}'>
          <div class='product-info'>
            <p class='product-title'>${item.title}</p>
            <p class='price'>${item.price}</p>
            <button class='add-cart-btn'>${item.cta}</button>
          </div>
        </div>
      `;
    }
  };

  PRODUCT.init();
})();