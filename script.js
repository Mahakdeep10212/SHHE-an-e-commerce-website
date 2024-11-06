
const featuredProducts = [
    { id: 1, name: "Blanket", price: 30, image: "blankets.jpeg" },
    { id: 2, name: "Curtain", price: 20, image: "curtain.jpeg" },
    { id: 3, name: "Bed Sheet", price: 25, image: "nbs.jpeg" },
    { id: 4, name: "Comforter", price: 40, image: "comforter.jpeg" }
];


function loadFeaturedProducts() {
    const productGrid = document.getElementById("featured-product-list");
    if (!productGrid) return;

    productGrid.innerHTML = "";
    featuredProducts.forEach(product => {
        const productDiv = document.createElement("div");
        productDiv.classList.add("product");
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>$${product.price}</p>
            <button>Add to Cart</button>
        `;
        productGrid.appendChild(productDiv);
    });
}


let currentSlide = 0;
function showSlide(index) {
    const slides = document.querySelectorAll(".carousel-slide");
    slides.forEach(slide => slide.classList.remove("active"));
    slides[index].classList.add("active");
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % document.querySelectorAll(".carousel-slide").length;
    showSlide(currentSlide);
}

setInterval(nextSlide, 3000);


document.addEventListener("DOMContentLoaded", () => {
    loadFeaturedProducts();
    showSlide(currentSlide);
});
