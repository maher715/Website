
function showMessage() {
  alert("Welcome to FashionFit! Happy Shopping 😊");
}


const shopButton = document.querySelector(".hero button");


shopButton.addEventListener("mouseenter", () => {
  shopButton.textContent = "Let's Go!";
});


shopButton.addEventListener("mouseleave", () => {
  shopButton.textContent = "Shop Now";
});