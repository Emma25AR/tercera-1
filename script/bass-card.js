console.log("Loading Bass Products");

const bassProducts = [
  { title: "Fender Acoustic Bass", image_url: "./imgs/bajoAcus.jpg", price: "$420,000", cta: "Add to cart" },
  { title: "Music Man StingRay 5 Special", image_url: "./imgs/musicman.webp", price: "$890,000", cta: "Add to cart" },
  { title: "Rickenbacker Standard", image_url: "./imgs/rickenbackerB.jpg", price: "$2,499.00", cta: "Add to cart" },
  { title: "Ibanez SR500E", image_url: "./imgs/IbanezSR500.webp", price: "$530,000", cta: "Add to cart" },
  { title: "Squier Precision Bass", image_url: "./imgs/squierP.webp", price: "$310,000", cta: "Add to cart" }
];

(function () {
  const PRODUCT = {
    init: function() {
      this.insertProducts();
    },

    insertProducts: function() {
      const container = document.querySelector('.product-list-basses');
      if (!container) return; // 👈 prevents other pages from rendering
      bassProducts.forEach((item, index) => {
        container.insertAdjacentHTML('beforeend', this.templateProduct(item, index));
      });
    },

    templateProduct: function(item, index) {
      return `
        <div class='product-item' id='bass-${index}'>
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