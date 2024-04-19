function initCarousel() {
  const arrowR = document.querySelector(".carousel__arrow_right");
  const arrowL = document.querySelector(".carousel__arrow_left");
  const carousel = document.querySelector(".carousel__inner");
  const slideWidth = carousel.offsetWidth;
  let distance = 0;

  arrowR.addEventListener("click", () => {
    distance -= slideWidth;
    carousel.style.transform = `translateX(${distance}px)`;
  });
  arrowL.addEventListener("click", () => {
    distance += slideWidth;
    carousel.style.transform = `translateX(${distance}px)`;
  });
  if (distance == 0) {
    arrowL.style.display = "none";
  } else arrowL.style.display = "";
  if (distance == -0) {
    arrowR.style.display = "none";
  } else arrowR.style.display = "";
}
