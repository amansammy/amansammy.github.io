document.addEventListener('DOMContentLoaded', () => {
    // Ensure viewport meta tag is optimal
    const viewport = document.querySelector('meta[name="viewport"]');
    if (viewport) {
      viewport.setAttribute('content', 'width=device-width, initial-scale=1, maximum-scale=1, shrink-to-fit=no');
    }
  
    // Inject CSS to prevent horizontal overflow
    const style = document.createElement('style');
    style.textContent = `
      html, body {
        width: 100%;
        overflow-x: hidden !important;
        margin: 0;
        padding: 0;
      }
      * {
        box-sizing: border-box;
        max-width: 100vw;
      }
      .nav-bar, .sidemenu-wrapper, .flgrid1, .listingmain, .homebanner, .featuredlistings, .homebanner2, .uui-section_heroheader24, .div-block-64, .uui-section_testimonial11, .div-block-6, .div-block-12 {
        max-width: 100%;
        overflow-x: hidden;
      }
      /* Fix animations to stay within bounds */
      [data-w-id] {
        will-change: transform;
        transform: translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
      }
      @media (max-width: 767px) {
        body {
          overflow-x: hidden !important;
        }
        .listingmain {
          width: 100%;
          margin-left: 0;
          margin-right: 0;
        }
        .flgrid1 {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
        }
      }
    `;
    document.head.appendChild(style);
  
    // Reset transforms on load to prevent animation overflow
    const animatedElements = document.querySelectorAll('[data-w-id]');
    animatedElements.forEach(el => {
      el.style.transform = 'translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)';
      el.style.opacity = '1';
      setTimeout(() => {
        el.style.transition = 'none'; // Disable initial animation glitch
      }, 100);
    });
  
    // Force reflow to recalculate layout
    document.body.style.display = 'none';
    document.body.offsetHeight; // Trigger reflow
    document.body.style.display = 'block';
  
    // Prevent horizontal scroll on resize
    window.addEventListener('resize', () => {
      document.body.style.overflowX = 'hidden';
      document.documentElement.style.overflowX = 'hidden';
    });
  });