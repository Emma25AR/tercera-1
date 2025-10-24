console.log("Cargando Acordión...");

const dataAccordion = [
  {
    title: "Instrumentos Musicales",
    desc: "Ofrecemos instrumentos de alta calidad",
  },
  {
    title: "Musica Reciente",
    desc: "Tame Impala lanza su reciente Tiny desk",
    link: "https://youtu.be/xSDfCwDmJNo?si=hIYw1IMOcvFHTobE",
    desc2: "Macario Martinez - Otra vez",
    link2: "https://youtu.be/WdzYTblHzG4?si=kDYL-ZMHKrrHqiQT", 
  },
  {
    title: "Recomendacion Semanal",
    desc: "Adios Cometa - Transparente - Conquista Sessions 33",
    link: "https://youtu.be/eJD_g8TbkS0?si=xQg_iCXjpPzbHDgF", 
  },
  {
    title: "Dónde estamos ubicados?",
    desc: "Estamos en Alajuela Centro.",
  },
];

(function () {
  let ACCORDION = {
    init: function () {
      let _self = this;
      this.insertData(_self);
      this.eventhandler(_self);
    },

    insertData: function (_self) {
      dataAccordion.map(function (item, index) {
        document
          .querySelector(".main-accordion-container")
          .insertAdjacentHTML("beforeend", _self.tplAccordionItem(item));
      });
    },

    eventhandler: function (_self) {
      let arrayRefs = document.querySelectorAll(".accordion-title");
      for (let x = 0; x < arrayRefs.length; x++) {
        arrayRefs[x].addEventListener("click", function (event) {
          //console.log("Evento: ", event);
          _self.showTab(event.target);
        });
      }
    },

tplAccordionItem: function (item) {
  // Si el item tiene link, usar <a>, si no usar <p>
  let descHTML = item.link
    ? `<a href="${item.link}" target="_blank" rel="noopener noreferrer">${item.desc}</a>`
    : `<p>${item.desc}</p>`;

  return `
    <div class='accordion-item'>
      <div class='accordion-title'><p>${item.title}</p></div>
      <div class='accordion-desc'>${descHTML}</div>
    </div>
  `
},

    showTab: function (refItem) {
      let activeTab = document.querySelector("tab-active");
      if (activeTab) {
        activeTab.classList.remove("tab-active");
      }
      console.log("Show Tab: ", refItem);
      refItem.parentElement.classList.toggle("tab-active");
    },
  };
  ACCORDION.init();
})();
