// Mobile Menu Animation

const menuAnimationData = {"v":"5.7.6","fr":30,"ip":0,"op":47,"w":813,"h":165,"nm":"wave-menu","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"Shape Layer 1","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[406.5,82.5,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[],"ip":0,"op":300,"st":0,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"Layer 1 Outlines 2","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[406.5,82.497,0],"ix":2,"l":2},"a":{"a":0,"k":[406.75,82.747,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":0,"s":[{"i":[[0,0],[0,0],[199.226,0],[0,0],[0,0]],"o":[[0,0],[0,0],[-199.236,0],[0,0],[0,0]],"v":[[406.5,-82.497],[406.75,-89.833],[-0.24,-89.503],[-406.25,-90.833],[-406.5,-82.497]],"c":true}]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":12,"s":[{"i":[[0,0],[0,0],[199.226,0],[0,0],[0,0]],"o":[[0,0],[0,0],[-199.236,0],[0,0],[0,0]],"v":[[406.5,-82.497],[406.5,7.167],[0.005,82.497],[-406.5,7.167],[-406.5,-82.497]],"c":true}]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":20,"s":[{"i":[[0,0],[0,0],[199.226,0],[0,0],[0,0]],"o":[[0,0],[0,0],[-199.236,0],[0,0],[0,0]],"v":[[406.5,-82.497],[406.25,88.167],[0.01,86.497],[-406.75,88.167],[-406.5,-82.497]],"c":true}]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":25,"s":[{"i":[[0,0],[0,0],[199.226,0],[0,0],[0,0]],"o":[[0,0],[0,0],[-199.236,0],[0,0],[0,0]],"v":[[406.5,-82.497],[406.25,88.167],[0.01,86.497],[-406.75,88.167],[-406.5,-82.497]],"c":true}]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":37,"s":[{"i":[[0,0],[0,0],[199.226,0],[0,0],[0,0]],"o":[[0,0],[0,0],[-199.236,0],[0,0],[0,0]],"v":[[406.5,-82.497],[406.5,7.167],[-0.24,-75.503],[-406.5,7.167],[-406.5,-82.497]],"c":true}]},{"t":45,"s":[{"i":[[0,0],[0,0],[199.226,0],[0,0],[0,0]],"o":[[0,0],[0,0],[-199.236,0],[0,0],[0,0]],"v":[[406.5,-82.497],[406.75,-87.833],[-0.73,-85.503],[-406.25,-85.833],[-406.5,-82.497]],"c":true}]}],"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[406.75,82.747],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":300,"st":0,"bm":0}],"markers":[]};

document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.c-header__menu-toggle');
  const menuLines = document.querySelectorAll('.c-header__menu-toggle .menu-line');
  const navMobile = document.querySelector('.c-nav-mobile');
  const curtain = document.querySelector('.c-nav-mobile__curtain');
  const menuLinks = document.querySelectorAll('.c-nav-mobile__link');
  const menuFooterItems = document.querySelectorAll('.c-nav-mobile__footer > *');
  
  const menuLottie = lottie.loadAnimation({
    container: document.getElementById('menu-lottie'),
    renderer: 'svg',
    loop: false,
    autoplay: false,
    animationData: menuAnimationData,
    rendererSettings: {
      preserveAspectRatio: 'none'
    }
  });

  menuLottie.addEventListener('DOMLoaded', () => {
    menuLottie.goToAndStop(0, true);
  });

  const lottiePlayhead = { frame: 0 };
  let isMenuOpen = false;

  gsap.set(navMobile, { display: 'none' });
  gsap.set(curtain, { yPercent: -100 });

  menuToggle.addEventListener('click', () => {
    isMenuOpen = !isMenuOpen;
    
    gsap.killTweensOf([curtain, lottiePlayhead, menuLinks, menuFooterItems, menuLines]);
    
    if (isMenuOpen) {
      // --- OPEN SEQUENCE ---
      menuToggle.classList.add('is-open');
      menuToggle.setAttribute('aria-expanded', 'true');
      if (typeof lenis !== 'undefined') lenis.stop();

      gsap.set(navMobile, { display: 'flex' });
      menuLottie.resize();

      // 1. Slide curtain down (power3.out gives it a fast start but smooth finish)
      gsap.to(curtain, { yPercent: 0, duration: 1.2, ease: 'power3.out' });
      
      // 2. Change button color to dark exactly when curtain hits it
      gsap.to(menuLines, { backgroundColor: '#5d6067', duration: 0.1, delay: 0.1 });
      
      // 3. Play Lottie to frame 25
      gsap.to(lottiePlayhead, { 
        frame: 25, 
        duration: 1.2, 
        ease: 'power3.out', 
        onUpdate: () => menuLottie.goToAndStop(Math.round(lottiePlayhead.frame), true) 
      });

      // 4. Fade in links & footer
      gsap.fromTo(menuLinks, 
        { y: 40, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 0.9, stagger: 0.08, ease: 'power2.out', delay: 0.5 }
      );
      gsap.fromTo(menuFooterItems, 
        { y: 30, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 0.9, stagger: 0.08, ease: 'power2.out', delay: 0.7 }
      );

    } else {
      // --- CLOSE SEQUENCE ---
      menuToggle.classList.remove('is-open');
      menuToggle.setAttribute('aria-expanded', 'false');
      if (typeof lenis !== 'undefined') lenis.start();

      // 1. Fade out links & footer quickly
      gsap.to([...menuLinks, ...menuFooterItems], { y: 20, opacity: 0, duration: 0.3, stagger: 0.02, ease: 'power2.in' });

      // 2. Slide curtain up INSTANTLY upon click (0s delay)
      gsap.to(curtain, { yPercent: -100, duration: 1.2, ease: 'power3.inOut' });

      // 3. Change button color to white exactly when curtain leaves it
      gsap.to(menuLines, { backgroundColor: '#ffffff', duration: 0.1, delay: 0.8 });

      // 4. Play Lottie
      let targetFrame = lottiePlayhead.frame < 24 ? 0 : 47;
      
      gsap.to(lottiePlayhead, { 
        frame: targetFrame, 
        duration: 1.2, 
        ease: 'power3.inOut', 
        onUpdate: () => menuLottie.goToAndStop(Math.round(lottiePlayhead.frame), true),
        onComplete: () => {
          if (!isMenuOpen) {
            gsap.set(navMobile, { display: 'none' });
            lottiePlayhead.frame = 0;
            menuLottie.goToAndStop(0, true);
          }
        }
      });
    }
  });
});

// Contact CTA Animation

document.addEventListener('DOMContentLoaded', () => {
  const section = document.getElementById('contact-cta-section');
  const cursorBtn = document.getElementById('contact-cursor-btn');
  
  if (!section || !cursorBtn) return;

  if (window.innerWidth <= 1024) {
    // Create an observer to watch when the button scrolls into view
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Add the class to trigger the CSS grow & rotate animation
          cursorBtn.classList.add('is-visible');
          // Stop observing once it has animated in
          observer.unobserve(cursorBtn); 
        }
      });
    }, { 
      threshold: 0.2 // Triggers when 20% of the button is visible
    });

    observer.observe(cursorBtn);
  }

  // Variables for smooth tracking
  let mouseX = 0;
  let mouseY = 0;
  let cursorX = 0;
  let cursorY = 0;
  
  // Variables for smooth scaling
  let currentScale = 0;
  let targetScale = 0;
  
  // Speed of the delay (0.1 to 1). Lower = more delay/smoother
  const speed = 0.12; 

  // 1. Track mouse movement inside the section
  section.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  // 2. Handle mouse entering the section
  section.addEventListener('mouseenter', (e) => {
    if (window.innerWidth > 1024) {
      targetScale = 1;
      cursorBtn.style.opacity = '1';
      
      // Snap cursor to entry point instantly so it doesn't fly in from the top left
      if (currentScale === 0) {
        cursorX = e.clientX;
        cursorY = e.clientY;
      }
    }
  });

  // 3. Handle mouse leaving the section
  
  section.addEventListener('mouseleave', () => {
    if (window.innerWidth > 1024) {
      targetScale = 0;
      // Opacity fades out slightly faster than the scale shrinks
      setTimeout(() => {
        if (targetScale === 0) cursorBtn.style.opacity = '0';
      }, 200);
    }
  });

  // 4. Make the entire section clickable on desktop
  section.addEventListener('click', () => {
    if (window.innerWidth > 1024) {
      const link = cursorBtn.getAttribute('href');
      if (link) window.location.href = link;
    }
  });

  // 5. The Animation Loop
  const animate = () => {
    if (window.innerWidth > 1024) {
      // Lerp formula for smooth position tracking
      cursorX += (mouseX - cursorX) * speed;
      cursorY += (mouseY - cursorY) * speed;
      
      // Lerp formula for smooth scaling (grow/shrink)
      currentScale += (targetScale - currentScale) * speed;

      // Apply the transforms
      // translate(-50%, -50%) keeps the mouse perfectly in the center of the circle
      cursorBtn.style.transform = `translate(${cursorX}px, ${cursorY}px) translate(-50%, -50%) scale(${currentScale})`;
    } else {
      // Clean up inline styles if user resizes window below 1024px
      cursorBtn.style.transform = '';
      cursorBtn.style.opacity = '';
    }
    
    requestAnimationFrame(animate);
  };

  // Start the loop
  animate();
});



// Project List Animation

document.addEventListener("DOMContentLoaded", () => {
  const projectCards = document.querySelectorAll('.c-project-card');

  const cardObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-in-view');
        entry.target.classList.remove('is-out-of-view');
        entry.target.setAttribute('data-animated', 'true');
      } else {
        if (entry.target.getAttribute('data-animated') === 'true') {
          entry.target.classList.remove('is-in-view');
          entry.target.classList.add('is-out-of-view');
        }
      }
    });
  }, {
    threshold: 0.35
  });

  projectCards.forEach(card => {
    cardObserver.observe(card);
  });
});



// Contact Page Photo Parallax

document.addEventListener('DOMContentLoaded', () => {
  const photo = document.querySelector('.c-contact-layout__photo');
  
  if (!photo) return;

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let currentX = 0;
  let currentY = 0;
  let targetX = 0;
  let targetY = 0;

  const distanceXMultiplier = 0.12;
  const distanceYMultiplier = 0.24;
  const lerpSpeed = 0.1;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  const animatePhoto = () => {
    if (window.innerWidth > 1024) {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;

      targetX = (mouseX - centerX) * distanceXMultiplier;
      targetY = (mouseY - centerY) * distanceYMultiplier;

      currentX += (targetX - currentX) * lerpSpeed;
      currentY += (targetY - currentY) * lerpSpeed;

      photo.style.setProperty('--move-x', `${currentX}px`);
      photo.style.setProperty('--move-y', `${currentY}px`);
    } else {
      photo.style.setProperty('--move-x', '0px');
      photo.style.setProperty('--move-y', '0px');
    }

    requestAnimationFrame(animatePhoto);
  };

  animatePhoto();
});



// Element Reveal Animation

document.addEventListener("DOMContentLoaded", () => {
  const staticAnimatedElements = document.querySelectorAll(`
    .c-story-grid__lead, 
    .c-story-grid__body, 
    .c-divider, 
    .c-case-study, 
    .c-philosophy__title, 
    .c-philosophy__row,
    .c-pres-block__media,
    .c-pres-block__text-below,
    .c-pres-block__text-above,
    .c-spec-shelf
  `);

  const staticElementObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-in-view');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15
  });

  staticAnimatedElements.forEach(element => {
    staticElementObserver.observe(element);
  });
});


