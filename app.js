const app = document.getElementById("app");

/* HERO IMAGES */
const heroImages = [
 "images/mamta1.jpg",
  "images/mamta_god.jpg",
  "images/mamta_aile.jpg",
  "images/mamta3.jpg",
  "images/mamta2.jpg",
  "images/mamta4.jpg",
];

let heroIndex = 0;

/* DATA */
const products = [
  { name: "Rice & Grains", img: "images/mamta_rice.jpg" },
  { name: "Snacks & Biscuits", img: "images/mamta_buscuits.jpg" },
  { name: "Soaps & Detergents", img: "images/mamta_detergent.jpg" },
  { name: "Soaps", img: "images/mamta_detergent_soap.jpg" },
  { name: "Noodles", img: "images/mamta_noodles.jpg" },
  { name: "Tea & coffee", img: "images/mamta_tea.jpg" },


  { name: "Daily Essentials", img: "images/mamta2.jpg" }
];

/* SECTIONS */
function home() {
  return `
    <section id="home" class="hero">
      <div class="hero-content">
        <h1>Everything You Need, Under One Roof</h1>
        <p>Trusted Store in Vijayanagar, Bangalore</p>
        <a href="#products" class="btn">Shop Now</a>
      </div>
    </section>
  `;
}

function productsSection() {
  return `
    <section id="products" class="section">
      <h2>Our Products</h2>
      <div class="cards">
        ${products.map(p => `
          <div class="card">
            <img src="${p.img}">
            <div class="card-content">
              <h3>${p.name}</h3>
              <p>Quality products at best prices</p>
            </div>
          </div>
        `).join("")}
      </div>
    </section>
  `;
}

function gallery() {
  return `
    <section id="gallery" class="section">
      <h2>Our Store</h2>
      <div class="gallery">
        <img src="images/mamta1.jpg">
        <img src="images/mamta_card.jpg">
      </div>
    </section>
  `;
}

function contact() {
  return `
    <section id="contact" class="section">
      <h2>Visit Us</h2>
      <p>📍 Vijayanagar, Bangalore</p>
      <p>📞 +91 XXXXX XXXXX</p>
      <p>🕘 Open Daily: 8 AM – 9:30 PM</p>
    </section>
  `;
}

/* RENDER */
app.innerHTML = home() + productsSection() + gallery() + contact();

/* HERO SLIDER */
const hero = document.querySelector(".hero");
hero.style.backgroundImage = `url('${heroImages[0]}')`;

setInterval(() => {
  heroIndex = (heroIndex + 1) % heroImages.length;
  hero.style.backgroundImage = `url('${heroImages[heroIndex]}')`;
}, 4000);

/* SCROLL ANIMATION */
const cards = document.querySelectorAll(".card");

window.addEventListener("scroll", () => {
  cards.forEach(card => {
    if (card.getBoundingClientRect().top < window.innerHeight - 100) {
      card.classList.add("show");
    }
  });
});