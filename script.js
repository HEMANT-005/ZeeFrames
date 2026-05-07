const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");
const bars = document.querySelectorAll(".bar");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("max-h-0");
  mobileMenu.classList.toggle("max-h-[500px]");
  mobileMenu.classList.toggle("opacity-0");
  mobileMenu.classList.toggle("opacity-100");

  bars[0].classList.toggle("rotate-45");
  bars[0].classList.toggle("translate-y-[6px]");

  bars[1].classList.toggle("opacity-0");

  bars[2].classList.toggle("-rotate-45");
  bars[2].classList.toggle("-translate-y-[6px]");
});
function toggleFaq(button) {
  const item = button.parentElement;
  const content = item.querySelector(".faq-content");
  const icon = button.querySelector(".faq-icon");
  const allItems = document.querySelectorAll(".faq-item");
  allItems.forEach((el) => {
    const c = el.querySelector(".faq-content");
    const i = el.querySelector(".faq-icon");
    if (el !== item) {
      c.style.maxHeight = null;
      el.classList.remove("border-[#F3FE00]");
      el.classList.add("border-gray-800");
      i.textContent = "+";
    }
  });
  if (content.style.maxHeight) {
    content.style.maxHeight = null;
    item.classList.remove("border-[#F3FE00]");
    item.classList.add("border-gray-800");
    icon.textContent = "+";
  } else {
    content.style.maxHeight = content.scrollHeight + "px";
    item.classList.remove("border-gray-800");
    item.classList.add("border-[#F3FE00]");
    icon.textContent = "−";
  }
}

var swiper = new Swiper(".mySwiper", {
  slidesPerView: "auto",
  spaceBetween: 30,
  loop: true,
  speed: 4000,
  freeMode: true,
  freeModeMomentum: false,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },
});
