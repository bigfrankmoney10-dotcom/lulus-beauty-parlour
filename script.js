function initializeTailwind() {
    document.documentElement.style.setProperty('--accent', '#d4af77');
}

// Mobile Menu
const hamburgerBtn = document.getElementById('hamburger-btn');
const mobileMenu = document.getElementById('mobile-menu');

hamburgerBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    const icon = hamburgerBtn.querySelector('i');
    if (mobileMenu.classList.contains('hidden')) {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    } else {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    }
});

function closeMobileMenu() {
    mobileMenu.classList.add('hidden');
    const icon = hamburgerBtn.querySelector('i');
    icon.classList.remove('fa-times');
    icon.classList.add('fa-bars');
}

document.querySelectorAll('.mobile-link').forEach(link => {
    link.addEventListener('click', closeMobileMenu);
});

// Review Carousel
let currentReview = 1;
const totalReviews = 3;

function showReview(n) {
    for (let i = 1; i <= totalReviews; i++) {
        const review = document.getElementById(`review-${i}`);
        if (review) review.classList.add('hidden');
    }
    const activeReview = document.getElementById(`review-${n}`);
    if (activeReview) activeReview.classList.remove('hidden');
}

function rotateReviews() {
    currentReview = currentReview % totalReviews + 1;
    showReview(currentReview);
}
setInterval(rotateReviews, 5000);

// Booking Modal
function showBookingModal() {
    document.getElementById('booking-modal').classList.remove('hidden');
    document.getElementById('booking-modal').classList.add('flex');
}

function hideBookingModal() {
    const modal = document.getElementById('booking-modal');
    modal.classList.remove('flex');
    modal.classList.add('hidden');
}

function submitBooking(e) {
    e.preventDefault();
    const modalContent = document.querySelector('#booking-modal > div');
    modalContent.innerHTML = `
        <div class="text-center py-8">
            <i class="fa-solid fa-check-circle text-6xl text-[#d4af77] mb-4"></i>
            <h3 class="text-2xl font-semibold mb-2">Thank you!</h3>
            <p class="text-white/70">We've received your booking request.<br>We'll contact you shortly via WhatsApp or phone.</p>
            <button onclick="hideBookingModal()" class="mt-6 px-8 py-3 bg-white text-black rounded-2xl font-medium">Close</button>
        </div>
    `;
}

// Init
function init() {
    initializeTailwind();
    showReview(1);
    
    document.addEventListener('keydown', function(e) {
        if (e.key === "Escape") {
            const modal = document.getElementById('booking-modal');
            if (!modal.classList.contains('hidden')) hideBookingModal();
        }
    });
    
    console.log('%c[Lulu’s Beauty Parlour] Premium website initialized successfully.', 'color:#666');
}

window.onload = init;
