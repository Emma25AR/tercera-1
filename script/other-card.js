console.log("Loading Other Instruments");

const otherProducts = [
  {
    title: "Yamaha YAS-280 Alto Saxophone",
    image_url: "./imgs/yamahaSaxo.jpg",
    price: "$1,200.00",
    cta: "Add to cart"
  },
  {
    title: "Roland AX-Edge Keytar",
    image_url: "./imgs/rolandSynth.webp",
    price: "$1,499.00",
    cta: "Add to cart"
  },
  {
    title: "Moog Subsequent 37 Synthesizer",
    image_url: "./imgs/moogSub.jpg",
    price: "$1,799.00",
    cta: "Add to cart"
  },
  {
    title: "Hohner Special 20 Harmonica",
    image_url: "./imgs/hohnerHarm.avif",
    price: "$49.00",
    cta: "Add to cart"
  },
  {
    title: "Korg Volca Drum Machine",
    image_url: "./imgs/korgDrum.jpg",
    price: "$199.00",
    cta: "Add to cart"
  }
];

(function () {
  const PRODUCT = {
    init: function() {
      this.insertProducts();
    },

    insertProducts: function() {
      const container = document.querySelector('.product-list-others');
      if (!container) return;
      otherProducts.forEach((item, index) => {
        container.insertAdjacentHTML('beforeend', this.templateProduct(item, index));
      });
    },

    templateProduct: function(item, index) {
      return `
        <div class='product-item' id='other-${index}'>
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