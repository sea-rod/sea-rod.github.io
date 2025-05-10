// Initialize AOS
      AOS.init({ duration: 1000, once: true });

      // Toggle Mobile Menu
      function toggleMenu() {
        const menu = document.getElementById('mobile-menu');
        menu.classList.toggle('hidden');
      }

      // Intersection Observer for Animations
      const animateElements = document.querySelectorAll('.animate-on-scroll');
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
              observer.unobserve(entry.target); // Stop observing once visible
            }
          });
        },
        {
          rootMargin: '0px 0px -100px 0px', // Trigger 100px before element is fully in view
          threshold: 0.1 // Trigger when 10% of the element is visible
        }
      );
      animateElements.forEach((el) => observer.observe(el));

      // Typewriter Effect for Hero Text
      const heroText = document.querySelector('#hero h1');
      const text = heroText.textContent;
      heroText.textContent = '';
      let i = 0;
      function typeWriter() {
        if (i < text.length) {
          heroText.textContent += text.charAt(i);
          i++;
          setTimeout(typeWriter, 100);
        }
      }
      setTimeout(typeWriter, 500);