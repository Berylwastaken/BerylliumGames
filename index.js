        document.addEventListener('mousemove', function(e) {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        document.body.style.backgroundPosition = `${x * 100}% ${y * 100}%`;
        document.querySelectorAll('.shape').forEach(shape => {
        const rect = shape.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const dx = centerX - e.clientX;
        const dy = centerY - e.clientY;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const threshold = 150;
        if (distance < threshold) {
          const moveX = (dx / distance) * (threshold - distance);
          const moveY = (dy / distance) * (threshold - distance);
          shape.style.transform = `translate(${moveX}px, ${moveY}px)`;
        } else {
          shape.style.transform = `translate(0, 0)`;
        }
      });
    });
