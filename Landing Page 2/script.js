// === Manual Scroll per 3 cards ===
const categories = document.querySelector(".categories");
const card = document.querySelector(".categories-card");
const cards = document.querySelectorAll(".categories-card");

const itemsPerPage = 3;
const totalCards = cards.length;
const totalPages = Math.ceil(totalCards / itemsPerPage);

const indicatorBar = document.getElementById("indicator-bar");

// Buat indikator halaman
indicatorBar.innerHTML = "";
for (let i = 0; i < totalPages; i++) {
  const dot = document.createElement("div");
  dot.classList.add("indicator");
  if (i === 0) dot.classList.add("active");
  indicatorBar.appendChild(dot);
}
let indicators = document.querySelectorAll(".indicator");

let currentPage = 0;

function updateIndicator(index) {
  indicators.forEach((dot, i) => {
    dot.classList.toggle("active", i === index);
  });
  currentPage = index;
}

// Scroll manual detection
let scrollStop;
categories.addEventListener("scroll", () => {
  clearTimeout(scrollStop);

  scrollStop = setTimeout(() => {
    const cardWidth = card.offsetWidth;
    const pageIndex = Math.round(categories.scrollLeft / (cardWidth * itemsPerPage));
    updateIndicator(pageIndex);
  }, 100);
});

const vouchers = document.querySelectorAll(".box .rectangle");
let currentIndex = 0;

function showVoucher(index) {
  vouchers.forEach((v, i) => {
    v.classList.toggle("active", i === index);
  });
}

setInterval(() => {
  currentIndex = (currentIndex + 1) % vouchers.length;
  showVoucher(currentIndex);
}, 4000); // berganti setiap 4 detik

// tampilkan pertama kali
showVoucher(currentIndex);

// Tunggu hingga DOM selesai dimuat
document.addEventListener("DOMContentLoaded", function() {
  // Pilih tombol berdasarkan ID
  const continueButton = document.getElementById("continue-button");

  // Tambahkan event listener untuk klik
  continueButton.addEventListener("click", function() {
    // Arahkan ke signup.html
    window.location.href = "signup.html";
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const yearSpan = document.getElementById("year");
  const currentYear = new Date().getFullYear();
  yearSpan.textContent = currentYear;
});

function togglePassword() {
  const passwordInput = document.getElementById("password");
  passwordInput.type =
    passwordInput.type === "password" ? "text" : "password";
}

document
  .querySelector(".google-btn")
  .addEventListener("click", function () {
    window.location.href = "https://google.com";
  });

