import React, { useEffect, useRef } from 'react';

const NeuralCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let width, height;
    let particles = [];
    let mouse = { x: null, y: null, radius: 160 };
    let animationFrameId;

    const PARTICLE_COUNT = window.innerWidth < 768 ? 42 : 75;
    const CONNECT_DISTANCE = 140;
    const ROTATION_SPEED = 0.0004;

    class Particle3D {
      constructor() {
        this.reset();
      }

      reset() {
        const spread = Math.min(width || 800, height || 600) * 0.85;
        this.x = (Math.random() - 0.5) * spread;
        this.y = (Math.random() - 0.5) * spread;
        this.z = (Math.random() - 0.5) * spread;

        this.vx = (Math.random() - 0.5) * 0.45;
        this.vy = (Math.random() - 0.5) * 0.45;
        this.vz = (Math.random() - 0.5) * 0.45;

        this.baseRadius = Math.random() * 2 + 1.2;
        this.pulseSpeed = Math.random() * 0.03 + 0.01;
        this.pulseAngle = Math.random() * Math.PI * 2;
        this.isCoreNode = Math.random() > 0.85;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.z += this.vz;

        const maxDim = Math.min(width, height) * 0.7;
        if (Math.abs(this.x) > maxDim) this.vx *= -1;
        if (Math.abs(this.y) > maxDim) this.vy *= -1;
        if (Math.abs(this.z) > maxDim) this.vz *= -1;

        this.pulseAngle += this.pulseSpeed;

        const cosY = Math.cos(ROTATION_SPEED);
        const sinY = Math.sin(ROTATION_SPEED);
        const x1 = this.x * cosY - this.z * sinY;
        const z1 = this.z * cosY + this.x * sinY;
        this.x = x1;
        this.z = z1;
      }

      getProjectedCoordinates(fov, cx, cy) {
        const cameraDistance = 550;
        const scale = fov / (fov + this.z + cameraDistance);
        const projX = this.x * scale + cx;
        const projY = this.y * scale + cy;
        const radius = Math.max(0.5, this.baseRadius * scale * (1 + Math.sin(this.pulseAngle) * 0.25));
        const alpha = Math.min(1, Math.max(0.12, (this.z + cameraDistance) / (cameraDistance * 1.5)));

        return { x: projX, y: projY, scale, radius, alpha, z: this.z };
      }
    }

    function resizeCanvas() {
      if (!canvas || !canvas.parentElement) return;
      const rect = canvas.parentElement.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = width + 'px';
      canvas.style.height = height + 'px';

      ctx.scale(dpr, dpr);

      particles = [];
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        particles.push(new Particle3D());
      }
    }

    function animate() {
      ctx.clearRect(0, 0, width, height);

      const cx = width / 2;
      const cy = height / 2;
      const fov = 450;

      const projected = [];
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.update();
        const proj = p.getProjectedCoordinates(fov, cx, cy);
        proj.particle = p;
        projected.push(proj);
      }

      projected.sort((a, b) => a.z - b.z);

      for (let i = 0; i < projected.length; i++) {
        const p1 = projected[i];

        if (mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - p1.x;
          const dy = mouse.y - p1.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < mouse.radius) {
            const force = (1 - dist / mouse.radius) * 0.04;
            p1.particle.vx += (dx / dist) * force;
            p1.particle.vy += (dy / dist) * force;
          }
        }

        for (let j = i + 1; j < projected.length; j++) {
          const p2 = projected[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist2D = Math.sqrt(dx * dx + dy * dy);

          if (dist2D < CONNECT_DISTANCE) {
            const lineAlpha = (1 - dist2D / CONNECT_DISTANCE) * 0.28 * Math.min(p1.alpha, p2.alpha);
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(99, 102, 241, ${lineAlpha})`;
            ctx.lineWidth = 0.85;
            ctx.stroke();
          }
        }
      }

      for (let i = 0; i < projected.length; i++) {
        const p = projected[i];

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);

        if (p.particle.isCoreNode) {
          ctx.fillStyle = `rgba(6, 182, 212, ${p.alpha * 0.9})`;
          ctx.shadowColor = 'rgba(6, 182, 212, 0.7)';
          ctx.shadowBlur = 10;
        } else {
          ctx.fillStyle = `rgba(165, 180, 252, ${p.alpha * 0.75})`;
          ctx.shadowColor = 'rgba(99, 102, 241, 0.4)';
          ctx.shadowBlur = 5;
        }

        ctx.fill();
        ctx.shadowBlur = 0;
      }

      animationFrameId = requestAnimationFrame(animate);
    }

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      if (e.clientY >= rect.top && e.clientY <= rect.bottom) {
        mouse.x = e.clientX - rect.left;
        mouse.y = e.clientY - rect.top;
      } else {
        mouse.x = null;
        mouse.y = null;
      }
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    let resizeTimer;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(resizeCanvas, 150);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('resize', handleResize);

    resizeCanvas();
    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="hero-canvas-wrapper" aria-hidden="true">
      <canvas id="heroNeuralCanvas" ref={canvasRef}></canvas>
    </div>
  );
};

export default NeuralCanvas;
