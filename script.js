function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });

    // Optional: Add animation or other effects upon scrolling to section
    section.classList.add('scroll-animation'); // Add a class for animation
}

function toggleMenu() {
    var navbar = document.getElementById('navbar');
    navbar.classList.toggle('show');
}

document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.service, .section h1, .section h2, .section p, button');
    elements.forEach(el => {
      el.style.opacity = 0;
      el.style.transition = 'opacity 1s';
    });
  
    const products = document.querySelectorAll('.product');
    const modal = document.getElementById('productModal');
    const modalImg = document.getElementById('modalImg');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
    const modalClose = document.getElementsByClassName('close')[0];
  
    products.forEach((product, index) => {
      product.addEventListener('click', () => {
        const imgSrc = product.querySelector('img').getAttribute('src');
        const title = product.querySelector('h3').textContent;
        const description = product.querySelector('p').textContent;
  
        modal.style.display = 'block';
        modalImg.src = imgSrc;
        modalTitle.textContent = title;
        modalDescription.textContent = description;
      });
    });
  
    modalClose.addEventListener('click', () => {
      modal.style.display = 'none';
    });
  
    window.addEventListener('click', (event) => {
      if (event.target == modal) {
        modal.style.display = 'none';
      }
    });
    
    window.addEventListener('scroll', () => {
      elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
          el.style.opacity = 1;
        }
      });

      const sections = document.querySelectorAll('.section');
      sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
          section.classList.add('scroll-animation');
        }
      });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var loadingScreen = document.getElementById("loading-screen");
    loadingScreen.style.display = "none";
});
