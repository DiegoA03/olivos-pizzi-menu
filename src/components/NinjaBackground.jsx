import { useEffect, useRef } from 'react';

function hexToRgba(hex, alpha) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

function NinjaBackground() {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: null, y: null });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationId;
    let shurikens = [];

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    // Crear shurikens (estrellas ninja) flotantes
    function createShurikens() {
      shurikens = [];
      const count = Math.floor((canvas.width * canvas.height) / 45000);
      for (let i = 0; i < count; i++) {
        shurikens.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          size: Math.random() * 8 + 6,
          rotation: Math.random() * Math.PI * 2,
          rotSpeed: (Math.random() - 0.5) * 0.02,
          glow: Math.random() * 0.5 + 0.3
        });
      }
    }
    createShurikens();
    window.addEventListener('resize', createShurikens);

    // Dibujar un shuriken (estrella de 4 puntas)
    function drawShuriken(s, accent) {
      ctx.save();
      ctx.translate(s.x, s.y);
      ctx.rotate(s.rotation);
      ctx.beginPath();
      for (let i = 0; i < 4; i++) {
        const angle = (Math.PI / 2) * i;
        const outerX = Math.cos(angle) * s.size;
        const outerY = Math.sin(angle) * s.size;
        const innerAngle = angle + Math.PI / 4;
        const innerX = Math.cos(innerAngle) * (s.size * 0.35);
        const innerY = Math.sin(innerAngle) * (s.size * 0.35);
        if (i === 0) ctx.moveTo(outerX, outerY);
        else ctx.lineTo(outerX, outerY);
        ctx.lineTo(innerX, innerY);
      }
      ctx.closePath();
      ctx.fillStyle = accent;
      ctx.shadowColor = accent;
      ctx.shadowBlur = 15 * s.glow;
      ctx.globalAlpha = 0.85;
      ctx.fill();
      ctx.restore();
    }

    function handleMouseMove(e) {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    }
    window.addEventListener('mousemove', handleMouseMove);

    function handleMouseLeave() {
      mouseRef.current = { x: null, y: null };
    }
    window.addEventListener('mouseleave', handleMouseLeave);

    function animate() {
      const accent = getComputedStyle(document.documentElement)
        .getPropertyValue('--accent')
        .trim() || '#4cd137';

      // Fondo con textura sutil tipo "alcantarilla"
      ctx.fillStyle = '#050805';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Viñeta radial sutil con el color del tema
      const gradient = ctx.createRadialGradient(
        canvas.width / 2, canvas.height / 2, 0,
        canvas.width / 2, canvas.height / 2, canvas.width * 0.7
      );
      gradient.addColorStop(0, hexToRgba(accent, 0.07));
      gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Actualizar y mover shurikens
      shurikens.forEach((s) => {
        s.x += s.vx;
        s.y += s.vy;
        s.rotation += s.rotSpeed;

        if (s.x < 0 || s.x > canvas.width) s.vx *= -1;
        if (s.y < 0 || s.y > canvas.height) s.vy *= -1;

        const mouse = mouseRef.current;
        if (mouse.x !== null) {
          const dx = s.x - mouse.x;
          const dy = s.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 150) {
            const force = (150 - dist) / 150;
            s.x += (dx / dist) * force * 4;
            s.y += (dy / dist) * force * 4;
            s.rotSpeed = 0.08;
          } else {
            s.rotSpeed = (Math.random() - 0.5) * 0.02;
          }
        }
      });

      // Líneas de energía "chi" conectando shurikens cercanos
      for (let i = 0; i < shurikens.length; i++) {
        for (let j = i + 1; j < shurikens.length; j++) {
          const dx = shurikens[i].x - shurikens[j].x;
          const dy = shurikens[i].y - shurikens[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 160) {
            ctx.beginPath();
            ctx.moveTo(shurikens[i].x, shurikens[i].y);
            ctx.lineTo(shurikens[j].x, shurikens[j].y);
            ctx.strokeStyle = accent;
            ctx.globalAlpha = (1 - dist / 160) * 0.2;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }
      ctx.globalAlpha = 1;

      shurikens.forEach((s) => drawShuriken(s, accent));

      animationId = requestAnimationFrame(animate);
    }
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('resize', createShurikens);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 z-0" />;
}

export default NinjaBackground;