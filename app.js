const video1 = document.getElementById('projectVideo1');
const video2 = document.getElementById('projectVideo2');
const video3 = document.getElementById('projectVideo3');
const video4 = document.getElementById('projectVideo4');
const video5 = document.getElementById('projectVideo5');
const video6 = document.getElementById('projectVideo6');
const video7 = document.getElementById('projectVideo7');


// Sidebar elements //
const sideBar = document.querySelector('.sidebar');
const menu = document.querySelector('.menu-icon');
const closeIcon = document.querySelector('.close-icon')

// CV Download functionality
const cvDownloadBtn = document.querySelector('.cv-download');

// Contact form elements
const contactForm = document.querySelector('.contact-form form');
const sendMessageBtn = contactForm.querySelector('button');

// Navigation links
const navLinks = document.querySelectorAll('header ul a, .sidebar ul a');

const hoverSign = document.querySelector('.hover-sign');

const videoList =[video1, video2, video3];

videoList.forEach (function(video){
    video.addEventListener("mouseover", function(){
        video.play()
        hoverSign.classList.add("active")
    })
    video.addEventListener("mouseout", function(){
    video.pause();
    hoverSign.classList.remove("active")
})
})

// CV Download functionality
cvDownloadBtn.addEventListener('click', function() {
    // Open CV PDF in a new tab
    window.open('cv.pdf', '_blank');
});

// Navigation link functionality
navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Close sidebar if open
        if (sideBar.classList.contains('open-sidebar')) {
            sideBar.classList.remove('open-sidebar');
            sideBar.classList.add('close-sidebar');
        }
        
        // Smooth scroll to target section
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Contact form functionality
sendMessageBtn.addEventListener('click', function(e) {
    e.preventDefault();
    
    const fullName = contactForm.querySelector('input[type="text"]').value;
    const email = contactForm.querySelector('input[type="email"]').value;
    const message = contactForm.querySelector('textarea').value;
    
    // Basic validation
    if (!fullName || !email || !message) {
        alert('Please fill in all fields');
        return;
    }
    
    if (!email.includes('@')) {
        alert('Please enter a valid email address');
        return;
    }
    
    // Simulate sending message (in a real scenario, this would send to a server)
    alert(`Thank you for your message, ${fullName}! I'll get back to you at ${email} soon.`);
    
    // Clear form
    contactForm.querySelector('input[type="text"]').value = '';
    contactForm.querySelector('input[type="email"]').value = '';
    contactForm.querySelector('textarea').value = '';
});

// Sidebar elements //
menu.addEventListener("click", function(){
    sideBar.classList.remove("close-sidebar")
    sideBar.classList.add("open-sidebar")
});

closeIcon.addEventListener("click", function(){
    sideBar.classList.remove("open-sidebar");
    sideBar.classList.add("close-sidebar");
    
})