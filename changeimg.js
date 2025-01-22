const track = document.querySelector('.carousel-track');
          const items = document.querySelectorAll('.testimonial-item');
          let currentIndex = 0;
  
          function updateCarousel() {
              const width = items[0].getBoundingClientRect().width;
              track.style.transform = `translateX(-${currentIndex * width}px)`;
          }
  
          function startCarousel() {
              setInterval(() => {
                  currentIndex = (currentIndex < items.length - 1) ? currentIndex + 1 : 0;
                  updateCarousel();
              }, 3000); // Change slide every 3 seconds
          }
  
          window.addEventListener('resize', updateCarousel);
          updateCarousel();
          startCarousel();