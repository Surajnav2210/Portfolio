/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollDown = window.scrollY

  sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
        
        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
        }                                                    
    })
}
window.addEventListener('scroll', scrollActive)

/*===== SCROLL REVEAL ANIMATION =====*/

const sr = ScrollReveal({
    origin: 'top', 
    distance: '60px', 
    duration: 2000, 
    delay: 200, 
    reset: true, 
});

// Apply animations to specific elements
sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text', {});
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__data', { delay: 400 });
sr.reveal('.home__social-icon, .skills__data, .work__img, .contact__input', { interval: 200 });


// Vue.js Component
new Vue({
    el: '#app',
    data: {
      message: 'Welcome to Suraj\'s Portfolio',
    },
    mounted() {
      // Initialize animations after the DOM is fully rendered
      this.initScrollReveal();
      this.initVanta();
    },
    methods: {
      initScrollReveal() {
        const sr = ScrollReveal({
          origin: 'top',
          distance: '60px',
          duration: 2000,
          delay: 200,
          reset: false, // Avoid resetting animations on every scroll
        });
  
        // Apply ScrollReveal to the required elements
        sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text', {});
        sr.reveal('.home__img, .about__subtitle, .about__text, .skills__data', { delay: 400 });
        sr.reveal('.home__social-icon, .skills__data, .work__img, .contact__input', { interval: 200 });
      },
      initVanta() {
        // Initialize Vanta.js animation
        VANTA.WAVES({
          el: "#vanta-bg",
          color: 'white',
          waveHeight: 70,
          shininess: 60,
          waveSpeed: 0.6,
          zoom: 0.70,
        });
      },
    },
  });
  