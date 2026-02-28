<script>
let slides = document.querySelectorAll(".slide");
let index = 0;

function showSlide(i) {
    slides.forEach(s => s.classList.remove("active"));
    slides[i].classList.add("active");
}

// Next
document.querySelector(".next").onclick = () => {
    index = (index + 1) % slides.length;
    showSlide(index);
};

// Prev
document.querySelector(".prev").onclick = () => {
    index = (index - 1 + slides.length) % slides.length;
    showSlide(index);
};

// Auto Slide
setInterval(() => {
    index = (index + 1) % slides.length;
    showSlide(index);
}, 3000);
</script>