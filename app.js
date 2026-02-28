const app = document.getElementById("app");

/* HERO IMAGES */
const heroImages = [
  "images/god.jpg",
  "images/shop.jpg",
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
        <a href="#order" class="btn">Order Now</a>
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

function orderNow() {
  return `
    <section id="order" class="section order-section">
      <h2>Order Now</h2>
      <p>Fill the details and send your order on WhatsApp</p>

      <form id="orderForm">
        <input type="text" id="name" placeholder="Your Name" required>
        <input type="text" id="phone" placeholder="Your Phone Number" required>

        <select id="deliveryType" required>
          <option value="">Select Delivery Type</option>
          <option value="Store Pickup">Store Pickup</option>
          <option value="Door Delivery">Door Delivery</option>
        </select>

        <textarea
          id="address"
          placeholder="Delivery Address (required for Door Delivery)"
          style="display:none;"></textarea>

        <textarea
          id="message"
          placeholder="Example: Rice 5kg, Soap 3pcs, Biscuit 2 packets"
          required></textarea>

        <button type="submit" class="btn">Send Order on WhatsApp</button>
      </form>
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
    </section>
  `;
}

/* RENDER */
app.innerHTML =
  home() +
  productsSection() +
  gallery() +
  orderNow() +
  contact();

/* HERO SLIDER */
const hero = document.querySelector(".hero");
hero.style.backgroundImage = `url('${heroImages[0]}')`;

setInterval(() => {
  heroIndex = (heroIndex + 1) % heroImages.length;
  hero.style.backgroundImage = `url('${heroImages[heroIndex]}')`;
}, 4000);

/* SHOW / HIDE ADDRESS */
document.addEventListener("change", function (e) {
  if (e.target.id === "deliveryType") {
    const address = document.getElementById("address");
    if (e.target.value === "Door Delivery") {
      address.style.display = "block";
      address.required = true;
    } else {
      address.style.display = "none";
      address.required = false;
      address.value = "";
    }
  }
});

/* ORDER FORM → WHATSAPP */
document.addEventListener("submit", function (e) {
  if (e.target.id === "orderForm") {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const deliveryType = document.getElementById("deliveryType").value;
    const address = document.getElementById("address").value;
    const message = document.getElementById("message").value;

    let text =
      `Hello Mamta Departmental Store,%0A%0A` +
      `Name: ${name}%0A` +
      `Phone: ${phone}%0A` +
      `Delivery Type: ${deliveryType}%0A`;

    if (deliveryType === "Door Delivery") {
      text += `Address: ${address}%0A`;
    }

    text += `%0AOrder:%0A${message}`;

    const url = `https://wa.me/916361450214?text=${text}`;
    window.open(url, "_blank");
  }
});

/* SCROLL ANIMATION */
const cards = document.querySelectorAll(".card");
window.addEventListener("scroll", () => {
  cards.forEach(card => {
    if (card.getBoundingClientRect().top < window.innerHeight - 100) {
      card.classList.add("show");
    }
  });
});