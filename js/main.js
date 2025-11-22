document.addEventListener("DOMContentLoaded", () => {
    /* =========================
       CURSOR PERSONALIZZATO
    ========================== */
    const circleElement = document.querySelector(".circle");

    const mouse = {x: 0, y: 0};
    const previousMouse = {x: 0, y: 0};
    const circle = {x: 0, y: 0};

    let currentScale = 0;
    let currentAngle = 0;
    const speed = 0.17;

    window.addEventListener("mousemove", e => {
        mouse.x = e.x;
        mouse.y = e.y;
    });

    const tick = () => {
        circle.x += (mouse.x - circle.x) * speed;
        circle.y += (mouse.y - circle.y) * speed;
        const translateTransform = `translate(${circle.x}px, ${circle.y}px)`;

        const deltaMouseX = mouse.x - previousMouse.x;
        const deltaMouseY = mouse.y - previousMouse.y;
        previousMouse.x = mouse.x;
        previousMouse.y = mouse.y;
        const mouseVelocity = Math.min(Math.sqrt(deltaMouseX ** 2 + deltaMouseY ** 2) * 4, 150);
        const scaleValue = (mouseVelocity / 150) * 0.5;
        currentScale += (scaleValue - currentScale) * speed;
        const scaleTransform = `scale(${1 + currentScale}, ${1 - currentScale})`;

        const angle = (Math.atan2(deltaMouseY, deltaMouseX) * 180) / Math.PI;
        if (mouseVelocity > 5) currentAngle = angle;
        const rotateTransform = `rotate(${currentAngle}deg)`;

        circleElement.style.transform = `${translateTransform} ${rotateTransform} ${scaleTransform}`;

        requestAnimationFrame(tick);
    };
    tick();

    /* =========================
     TIMELINE
  ========================== */
    const timeline = document.querySelector(".timeline-container");

// Linea rossa
    const fill = document.createElement("div");
    fill.className = "timeline-fill";
    timeline.appendChild(fill);

// Punti
    const items = document.querySelectorAll(".timeline-item");
    const dots = [];

    items.forEach(item => {
        const dot = document.createElement("div");
        dot.className = "timeline-dot";

        const itemTop = item.offsetTop;
        const itemHeight = item.offsetHeight;
        dot.style.top = `${itemTop + itemHeight / 2}px`;

        timeline.appendChild(dot);
        dots.push(dot);
    });

    function updateTimeline() {
        const scrollTop = window.scrollY;
        const viewportHeight = window.innerHeight;
        const timelineTop = timeline.offsetTop;
        const timelineHeight = timeline.offsetHeight;

        let fillHeight = scrollTop + viewportHeight / 1.5 - timelineTop;
        fillHeight = Math.max(0, Math.min(fillHeight, timelineHeight));
        fill.style.height = fillHeight + "px";

        // Attiva SOLO i dot
        dots.forEach(dot => {
            const dotTop = dot.offsetTop;
            if (dotTop <= fillHeight) dot.classList.add("active");
            else dot.classList.remove("active");
        });
    }

    window.addEventListener("scroll", updateTimeline);
    window.addEventListener("resize", () => {
        items.forEach((item, i) => {
            const itemTop = item.offsetTop;
            const itemHeight = item.offsetHeight;
            dots[i].style.top = `${itemTop + itemHeight / 2}px`;
        });
        updateTimeline();
    });

        // Ricalcola dot quando le immagini hanno finito di caricarsi
    document.querySelectorAll('.timeline-item img').forEach(img => {
        img.addEventListener('load', () => {
            items.forEach((item, i) => {
                const itemTop = item.offsetTop;
                const itemHeight = item.offsetHeight;
                dots[i].style.top = `${itemTop + itemHeight / 2}px`;
            });
            updateTimeline();
        });
    });


});


let myHoverables = document.getElementsByClassName("hoverable");
for (let i = 0; i < myHoverables.length; i++) {
    myHoverables[i].addEventListener("mouseover", function () {
        document.getElementsByClassName("circle")[0].classList.add("hovered");
        document.getElementsByClassName("circle")[0].classList.remove("not-hovered");
        console.log('sopra');
    });
    myHoverables[i].addEventListener("mouseout", function () {
        document.getElementsByClassName("circle")[0].classList.remove("hovered");
        document.getElementsByClassName("circle")[0].classList.add("not-hovered");
        console.log('sotto');
    });
}

let buttonSound = document.getElementsByClassName("btn-sound");
for (let i = 0; i < buttonSound.length; i++) {
    buttonSound[i].addEventListener("click", function () {
        this.classList.toggle("attivo");
    });
}

document.addEventListener('show.bs.offcanvas', () => {
    document.body.classList.add('offcanvas-open');
});
document.addEventListener('hide.bs.offcanvas', () => {
    document.body.classList.remove('offcanvas-open');
});

document.addEventListener('show.bs.offcanvas', () => {
    document.body.classList.add('no-scroll');
});

document.addEventListener('hide.bs.offcanvas', () => {
    document.body.classList.remove('no-scroll');
});


/* toDo: change comments to italian */
document.querySelectorAll(".btn-sound").forEach(btn => {
    btn.addEventListener("click", function () {
        const item = this.closest(".timeline-item");
        const video = item.querySelector("video");

        if (!video) return;

        // Se il video è in riproduzione → soft-stop
        if (!video.paused) {
            let rate = video.playbackRate;
            const interval = setInterval(() => {
                rate -= 0.1;                   // rallenta
                video.playbackRate = Math.max(rate, 0.1);

                if (rate <= 0.1) {
                    clearInterval(interval);
                    video.pause();
                    video.playbackRate = 1;      // reset per la prossima riproduzione
                }
            }, 40);
            return;
        }

        // Se il video è fermo → soft-start
        video.play();
        video.playbackRate = 0.1;

        let rate = 0.1;
        const interval = setInterval(() => {
            rate += 0.1;                     // accelera
            video.playbackRate = rate;

            if (rate >= 1) {
                video.playbackRate = 1;
                clearInterval(interval);
            }
        }, 40);
    });
});

document.addEventListener('DOMContentLoaded', function() {

    /* =========================================
       1. CAROSELLO IMMAGINI (Multiplo)
       Usa la classe specifica .swiper-images
       ========================================= */
    const swiperImages = new Swiper('.swiper-images', {
        direction: 'horizontal',
        loop: true,
        centeredSlides: true,
        spaceBetween: 5,

        // Breakpoints specifici per questo carosello
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 3,
            }
        },

        pagination: {
            el: '.swiper-images .swiper-pagination', // Scoping specifico
        },

        // Scoping specifico dei bottoni: cerca solo dentro .swiper-images
        navigation: {
            nextEl: '.swiper-images .swiper-button-next',
            prevEl: '.swiper-images .swiper-button-prev',
        },

        scrollbar: {
            el: '.swiper-images .swiper-scrollbar',
        },
    });

    /* =========================================
       2. CAROSELLO RECENSIONI (Singolo)
       Usa la classe specifica .swiper-reviews
       ========================================= */
const swiperReviews = new Swiper('.swiper-reviews', {
    direction: 'horizontal',
    loop: true,
    spaceBetween: 0,
    centeredSlides: true,

    breakpoints: {
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 1
        }
    },

    navigation: {
        nextEl: '.swiper-reviews .swiper-button-next',
        prevEl: '.swiper-reviews .swiper-button-prev'
    },

    pagination: {
        el: '.swiper-reviews .swiper-pagination'
    },

    scrollbar: {
        el: '.swiper-reviews .swiper-scrollbar'
    }
});


});