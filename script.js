const links = document.querySelectorAll('a[href^="#"]');
const headerHeight = document.querySelector("header").offsetHeight;

links.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();

    const targetId = link.getAttribute("href");
    const target = document.querySelector(targetId);

    if (!target) return;

    const offsetTop = target.offsetTop - headerHeight;

    window.scrollTo({
      top: offsetTop,
      behavior: "smooth"
    });
  });
});


const slides = document.querySelectorAll(".gallery-slide");


let currentSlide = 0;
const intervalTime = 4000;
let isAnimating = false;

function changeSlide() {
  if (isAnimating) return;
  isAnimating = true;

  const current = slides[currentSlide];
  const nextIndex = (currentSlide + 1) % slides.length;
  const next = slides[nextIndex];

  current.classList.remove("active");
  current.classList.add("exit");

  next.classList.add("active");

  setTimeout(() => {
    current.classList.remove("exit");
    currentSlide = nextIndex;
    isAnimating = false;
  }, 800);
}

/* avvio automatico */
setInterval(changeSlide, intervalTime);

