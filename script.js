// Плавный скролл для меню
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Анимации GSAP + ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

gsap.from(".card", {
    scrollTrigger: {
        trigger: ".services",
        start: "top 80%",
        toggleActions: "play none none none"
    },
    y: 50,
    opacity: 0,
    duration: 1,
    stagger: 0.3
});

// Параллакс-эффект для карточек
document.addEventListener("mousemove", (e) => {
    const cards = document.querySelectorAll(".card");
    cards.forEach((card, index) => {
        const speed = 0.1 + (index * 0.05);
        const x = (window.innerWidth - e.pageX * speed) / 100;
        const y = (window.innerHeight - e.pageY * speed) / 100;
        card.style.transform = `translateX(${x}px) translateY(${y}px)`;
    });
});

const button = document.querySelector("button");
button.addEventListener("mousemove", (e) => {
    const rect = button.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width * 100;
    const y = (e.clientY - rect.top) / rect.height * 100;
    button.style.setProperty("--mouse-x", x);
    button.style.setProperty("--mouse-y", y);
});



// Анимация при наведении на иконки
document.querySelectorAll('.icon').forEach(icon => {
    icon.addEventListener('mouseenter', () => {
        icon.classList.add('animate__rubberBand');
    });
    icon.addEventListener('mouseleave', () => {
        icon.classList.remove('animate__rubberBand');
    });
});
// Плавная прокрутка к разделу "Услуги"
function scrollToServices() {
    document.getElementById('services').scrollIntoView({
        behavior: 'smooth'  // Плавный скролл
    });
}