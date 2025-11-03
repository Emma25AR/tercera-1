console.log("Loading Guitar Products");

const guitarProducts = [
  {
    title: "Fender Stratocaster",
    image_url: "./imgs/fenderStrato.jpg",
    price: "$550,000", cta: "Add to cart"
  },
  {
    title: "Gibson Les Paul",
    image_url: "./imgs/gibsonLesPaul.jpg",
    price: "$720,000", cta: "Add to cart"
  },
  {
    title: "Yamaha Acoustic Guitar",
    image_url: "./imgs/yamahaAcoustic.jpg",
    price: "$230,000", cta: "Add to cart"
  },
  {
    title: "Ibanez RG Series",
    image_url: "./imgs/ibanezRG.png",
    price: "$450,000", cta: "Add to cart"

  },

  {
    title: "Rickenbacker 620",
    image_url: "./imgs/rickenbacker620.webp",
    price: "$2,049.00",
    cta: "Add to cart"
  },
  {
    title: "Taylor Acoustic Deluxe",
    image_url: "./imgs/taylorAcoustic.webp",
    price: "$4,450.00",
    cta: "Add to cart"
  }
];

(function () {
  const PRODUCT = {
    init: function () {
      this.insertProducts();
    },

    insertProducts: function () {
      const container = document.querySelector('.product-list-guitars');
      if (!container) return; // 👈 prevents it from loading elsewhere
      guitarProducts.forEach((item, index) => {
        container.insertAdjacentHTML('beforeend', this.templateProduct(item, index));
      });
    },

    templateProduct: function (item, index) {
      return `
        <div class='product-item' id='product-${index}'>
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