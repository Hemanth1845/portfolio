import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

export const Hero3DCanvas: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [webglSupported, setWebglSupported] = useState(true);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Check WebGL support
    try {
      const testCanvas = document.createElement('canvas');
      const gl = testCanvas.getContext('webgl') || testCanvas.getContext('experimental-webgl');
      if (!gl) {
        setWebglSupported(false);
        return;
      }
    } catch {
      setWebglSupported(false);
      return;
    }

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x050505, 0.05);

    const width = container.clientWidth || 600;
    const height = container.clientHeight || 600;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 7.5);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    container.appendChild(renderer.domElement);

    // Root Group for Mouse Parallax
    const rootGroup = new THREE.Group();
    scene.add(rootGroup);

    // 1. Core Metallic Icosahedron
    const coreGeometry = new THREE.IcosahedronGeometry(1.5, 2);
    const coreMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x1e293b,
      metalness: 0.92,
      roughness: 0.12,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
      reflectivity: 0.9,
      emissive: 0x0c1427,
      wireframe: false,
    });
    const coreMesh = new THREE.Mesh(coreGeometry, coreMaterial);
    rootGroup.add(coreMesh);

    // 2. Outer Wireframe Cage (Electric Blue)
    const cageGeometry = new THREE.IcosahedronGeometry(1.95, 1);
    const cageMaterial = new THREE.MeshStandardMaterial({
      color: 0x3b82f6,
      wireframe: true,
      emissive: 0x2563eb,
      emissiveIntensity: 0.6,
      transparent: true,
      opacity: 0.65,
    });
    const cageMesh = new THREE.Mesh(cageGeometry, cageMaterial);
    rootGroup.add(cageMesh);

    // 3. Floating Orbital Rings
    const ring1Geo = new THREE.TorusGeometry(2.4, 0.02, 16, 100);
    const ring1Mat = new THREE.MeshBasicMaterial({
      color: 0x8b5cf6,
      transparent: true,
      opacity: 0.7,
    });
    const ring1 = new THREE.Mesh(ring1Geo, ring1Mat);
    ring1.rotation.x = Math.PI / 3;
    ring1.rotation.y = Math.PI / 6;
    rootGroup.add(ring1);

    const ring2Geo = new THREE.TorusGeometry(2.7, 0.015, 16, 100);
    const ring2Mat = new THREE.MeshBasicMaterial({
      color: 0x3b82f6,
      transparent: true,
      opacity: 0.5,
    });
    const ring2 = new THREE.Mesh(ring2Geo, ring2Mat);
    ring2.rotation.x = -Math.PI / 4;
    ring2.rotation.z = Math.PI / 3;
    rootGroup.add(ring2);

    // 4. Orbiting Quantum Nodes / Satellites
    const satelliteGroup = new THREE.Group();
    const satGeo = new THREE.SphereGeometry(0.08, 16, 16);
    const satMat1 = new THREE.MeshStandardMaterial({
      color: 0x60a5fa,
      emissive: 0x3b82f6,
      emissiveIntensity: 2,
    });
    const satMat2 = new THREE.MeshStandardMaterial({
      color: 0xc084fc,
      emissive: 0x8b5cf6,
      emissiveIntensity: 2,
    });

    const sat1 = new THREE.Mesh(satGeo, satMat1);
    sat1.position.set(2.4, 0, 0);
    satelliteGroup.add(sat1);

    const sat2 = new THREE.Mesh(satGeo, satMat2);
    sat2.position.set(-2.7, 0.5, 0.5);
    satelliteGroup.add(sat2);

    rootGroup.add(satelliteGroup);

    // 5. 3D Floating Particle Cloud
    const particleCount = 450;
    const particlePositions = new Float32Array(particleCount * 3);
    const particleColors = new Float32Array(particleCount * 3);

    const colorBlue = new THREE.Color(0x3b82f6);
    const colorViolet = new THREE.Color(0x8b5cf6);
    const colorCyan = new THREE.Color(0x06b6d4);

    for (let i = 0; i < particleCount; i++) {
      const radius = 3 + Math.random() * 4.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      particlePositions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      particlePositions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      particlePositions[i * 3 + 2] = radius * Math.cos(phi);

      const mixedColor = Math.random() > 0.5 ? colorBlue : (Math.random() > 0.5 ? colorViolet : colorCyan);
      particleColors[i * 3] = mixedColor.r;
      particleColors[i * 3 + 1] = mixedColor.g;
      particleColors[i * 3 + 2] = mixedColor.b;
    }

    const particleGeometry = new THREE.BufferGeometry();
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    particleGeometry.setAttribute('color', new THREE.BufferAttribute(particleColors, 3));

    const particleMaterial = new THREE.PointsMaterial({
      size: 0.05,
      vertexColors: true,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending,
    });
    const particleField = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particleField);

    // 6. Lighting Setup
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const blueLight = new THREE.PointLight(0x3b82f6, 4, 15);
    blueLight.position.set(4, 3, 4);
    scene.add(blueLight);

    const violetLight = new THREE.PointLight(0x8b5cf6, 3.5, 15);
    violetLight.position.set(-4, -3, 3);
    scene.add(violetLight);

    const cyanLight = new THREE.PointLight(0x06b6d4, 2, 10);
    cyanLight.position.set(0, 4, -2);
    scene.add(cyanLight);

    // Mouse Tracking for Parallax Interaction
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };
    let dragVelocity = { x: 0, y: 0 };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      targetX = x * 0.45;
      targetY = y * 0.45;

      if (isDragging) {
        const deltaX = e.clientX - previousMousePosition.x;
        const deltaY = e.clientY - previousMousePosition.y;
        dragVelocity.x = deltaX * 0.005;
        dragVelocity.y = deltaY * 0.005;
        rootGroup.rotation.y += dragVelocity.x;
        rootGroup.rotation.x += dragVelocity.y;
        previousMousePosition = { x: e.clientX, y: e.clientY };
      }
    };

    const handleMouseDown = (e: MouseEvent) => {
      isDragging = true;
      previousMousePosition = { x: e.clientX, y: e.clientY };
    };

    const handleMouseUp = () => {
      isDragging = false;
    };

    window.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse lerping
      currentX += (targetX - currentX) * 0.05;
      currentY += (targetY - currentY) * 0.05;

      // Natural rotations
      coreMesh.rotation.y = elapsedTime * 0.25;
      coreMesh.rotation.x = elapsedTime * 0.15;

      cageMesh.rotation.y = -elapsedTime * 0.2;
      cageMesh.rotation.z = elapsedTime * 0.15;

      ring1.rotation.z = elapsedTime * 0.3;
      ring2.rotation.y = -elapsedTime * 0.25;

      satelliteGroup.rotation.y = elapsedTime * 0.6;
      satelliteGroup.rotation.x = Math.sin(elapsedTime * 0.5) * 0.3;

      particleField.rotation.y = elapsedTime * 0.05;
      particleField.rotation.x = Math.sin(elapsedTime * 0.03) * 0.05;

      // Inertia decay for dragging
      if (!isDragging) {
        dragVelocity.x *= 0.95;
        dragVelocity.y *= 0.95;
        rootGroup.rotation.y += dragVelocity.x;
        rootGroup.rotation.x += dragVelocity.y;
      }

      // Parallax offset
      rootGroup.position.x = currentX;
      rootGroup.position.y = currentY;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('resize', handleResize);

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      coreGeometry.dispose();
      coreMaterial.dispose();
      cageGeometry.dispose();
      cageMaterial.dispose();
      ring1Geo.dispose();
      ring1Mat.dispose();
      ring2Geo.dispose();
      ring2Mat.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();
    };
  }, []);

  if (!webglSupported) {
    return (
      <div className="w-full h-full flex items-center justify-center p-8">
        <div className="relative w-64 h-64 rounded-full bg-gradient-to-tr from-blue-600/30 to-violet-600/30 border border-blue-500/30 flex items-center justify-center shadow-2xl glow-blue animate-pulse-glow">
          <div className="w-48 h-48 rounded-full border border-violet-400/30 flex items-center justify-center">
            <span className="font-heading font-bold text-2xl text-blue-400">RH</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-[450px] sm:h-[520px] lg:h-[620px] flex items-center justify-center select-none cursor-grab active:cursor-grabbing">
      <div ref={mountRef} className="w-full h-full" />
      <div className="absolute bottom-2 text-xs font-mono text-slate-500/80 pointer-events-none flex items-center gap-1.5 bg-black/40 px-3 py-1 rounded-full border border-white/5 backdrop-blur-sm">
        <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-ping"></span>
        Interactive 3D Core • Drag to Rotate
      </div>
    </div>
  );
};

