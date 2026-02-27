const app = document.getElementById("app");

/* HERO IMAGES */
const heroImages = [
  "images/god.jpg",
  "images/snacks_buiscuits.jpg",
  "images/grocery.jpg",
  "images/soap.jpg"
];

let heroIndex = 0;

/* PRODUCTS */
const products = [
  { name: "Rice & Grains", img: "images/rice.jpg" },
  { name: "Snacks & Biscuits", img: "images/snacks_buiscuits.jpg" },
  { name: "Detergents", img: "images/detergent.jpg" },
  { name: "Grocery", img: "images/grocery.jpg" },
  { name: "Soaps", img: "images/soap.jpg" },
  { name: "Noodles", img: "images/noodles.jpg" },
  { name: "Shaving Products", img: "images/shavingproducts.jpg" },
  { name: "Daily Essentials", img: "images/beauty_products.jpg" }
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
      <p>📍 #10, 1st Main Rd, Vijayanagar 2nd Stage, Bengaluru 560104</p>
      <p>📞 +91 6361450214</p>
      <p>🕘 Open Daily: 9 AM – 10 PM</p>

      <a href="https://wa.me/916361450214" target="_blank" class="btn whatsapp-btn">
        💬 Chat on WhatsApp
      </a>
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