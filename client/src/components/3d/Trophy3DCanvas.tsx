import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const Trophy3DCanvas: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    const width = container.clientWidth || 320;
    const height = container.clientHeight || 320;

    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 50);
    camera.position.set(0, 0.3, 4.6);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.3;
    container.appendChild(renderer.domElement);

    const trophyGroup = new THREE.Group();
    scene.add(trophyGroup);

    // 1. Gold Physical Material
    const goldMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xffd700,
      emissive: 0x553300,
      metalness: 0.95,
      roughness: 0.18,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
      reflectivity: 1.0,
    });

    // Dark Platinum Base Material
    const baseMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x1e293b,
      metalness: 0.85,
      roughness: 0.25,
      clearcoat: 0.5,
    });

    // Electric Blue Glow Material
    const blueGlowMaterial = new THREE.MeshStandardMaterial({
      color: 0x3b82f6,
      emissive: 0x2563eb,
      emissiveIntensity: 1.5,
      roughness: 0.2,
      metalness: 0.8,
    });

    // Base Tier 1
    const base1Geo = new THREE.CylinderGeometry(0.85, 0.95, 0.2, 32);
    const base1 = new THREE.Mesh(base1Geo, baseMaterial);
    base1.position.y = -1.2;
    trophyGroup.add(base1);

    // Base Tier 2 (Gold ring)
    const base2Geo = new THREE.CylinderGeometry(0.75, 0.85, 0.1, 32);
    const base2 = new THREE.Mesh(base2Geo, goldMaterial);
    base2.position.y = -1.05;
    trophyGroup.add(base2);

    // Trophy Stem
    const stemGeo = new THREE.CylinderGeometry(0.18, 0.35, 0.6, 24);
    const stem = new THREE.Mesh(stemGeo, goldMaterial);
    stem.position.y = -0.7;
    trophyGroup.add(stem);

    // Blue Accent Ring on Stem
    const stemRingGeo = new THREE.TorusGeometry(0.24, 0.04, 16, 32);
    const stemRing = new THREE.Mesh(stemRingGeo, blueGlowMaterial);
    stemRing.rotation.x = Math.PI / 2;
    stemRing.position.y = -0.7;
    trophyGroup.add(stemRing);

    // Trophy Cup Body
    const cupGeo = new THREE.CylinderGeometry(0.7, 0.22, 1.0, 32, 1, true);
    const cup = new THREE.Mesh(cupGeo, goldMaterial);
    cup.position.y = 0.0;
    trophyGroup.add(cup);

    // Cup Base dome
    const cupDomeGeo = new THREE.SphereGeometry(0.25, 32, 16, 0, Math.PI * 2, Math.PI / 2, Math.PI / 2);
    const cupDome = new THREE.Mesh(cupDomeGeo, goldMaterial);
    cupDome.position.y = -0.45;
    cupDome.rotation.x = Math.PI;
    trophyGroup.add(cupDome);

    // Laurel Wreath / Outer Orbital Arcs
    const laurel1Geo = new THREE.TorusGeometry(0.85, 0.035, 16, 48, Math.PI * 1.3);
    const laurel1 = new THREE.Mesh(laurel1Geo, goldMaterial);
    laurel1.rotation.z = Math.PI * 0.35;
    laurel1.position.y = 0.05;
    trophyGroup.add(laurel1);

    const laurel2Geo = new THREE.TorusGeometry(0.85, 0.035, 16, 48, Math.PI * 1.3);
    const laurel2 = new THREE.Mesh(laurel2Geo, goldMaterial);
    laurel2.rotation.z = -Math.PI * 0.65;
    laurel2.position.y = 0.05;
    trophyGroup.add(laurel2);

    // Star Gem on Top of Cup
    const starGeo = new THREE.OctahedronGeometry(0.25, 0);
    const starMat = new THREE.MeshPhysicalMaterial({
      color: 0x60a5fa,
      emissive: 0x3b82f6,
      emissiveIntensity: 1.2,
      metalness: 0.2,
      roughness: 0.1,
      transmission: 0.7,
      transparent: true,
      opacity: 0.9,
    });
    const star = new THREE.Mesh(starGeo, starMat);
    star.position.y = 0.75;
    trophyGroup.add(star);

    // Orbiting Golden Particle Sparkles
    const sparkCount = 60;
    const sparkGeo = new THREE.BufferGeometry();
    const sparkPos = new Float32Array(sparkCount * 3);

    for (let i = 0; i < sparkCount; i++) {
      const r = 0.6 + Math.random() * 1.2;
      const angle = Math.random() * Math.PI * 2;
      const y = -0.8 + Math.random() * 1.8;
      sparkPos[i * 3] = r * Math.cos(angle);
      sparkPos[i * 3 + 1] = y;
      sparkPos[i * 3 + 2] = r * Math.sin(angle);
    }
    sparkGeo.setAttribute('position', new THREE.BufferAttribute(sparkPos, 3));

    const sparkMat = new THREE.PointsMaterial({
      color: 0xfbbf24,
      size: 0.05,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
    });
    const sparkles = new THREE.Points(sparkGeo, sparkMat);
    trophyGroup.add(sparkles);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);

    const goldKeyLight = new THREE.DirectionalLight(0xfffae0, 2.2);
    goldKeyLight.position.set(2, 3, 3);
    scene.add(goldKeyLight);

    const blueRimLight = new THREE.PointLight(0x3b82f6, 3.5, 8);
    blueRimLight.position.set(-2, 1, 2);
    scene.add(blueRimLight);

    const bottomGlow = new THREE.PointLight(0xf59e0b, 2.0, 5);
    bottomGlow.position.set(0, -1.2, 1);
    scene.add(bottomGlow);

    // Interactive Hover Tracking
    let targetRotY = 0;
    let targetRotX = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      targetRotY = x * 0.6;
      targetRotX = -y * 0.3;
    };

    container.addEventListener('mousemove', handleMouseMove);

    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    // Animation loop
    let animId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const time = clock.getElapsedTime();

      // Continuous gentle spin combined with mouse interaction
      trophyGroup.rotation.y = time * 0.4 + targetRotY;
      trophyGroup.rotation.x = Math.sin(time * 0.8) * 0.05 + targetRotX;

      // Floating gem spin
      star.rotation.y = time * 1.5;
      star.rotation.z = Math.sin(time) * 0.2;
      star.position.y = 0.75 + Math.sin(time * 2) * 0.04;

      sparkles.rotation.y = -time * 0.3;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      container.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      base1Geo.dispose();
      base2Geo.dispose();
      stemGeo.dispose();
      cupGeo.dispose();
      cupDomeGeo.dispose();
      laurel1Geo.dispose();
      laurel2Geo.dispose();
      starGeo.dispose();
      sparkGeo.dispose();
      goldMaterial.dispose();
      baseMaterial.dispose();
      blueGlowMaterial.dispose();
      starMat.dispose();
      sparkMat.dispose();
    };
  }, []);

  return (
    <div className="relative w-full h-[280px] sm:h-[320px] flex items-center justify-center">
      <div ref={mountRef} className="w-full h-full cursor-pointer" />
    </div>
  );
};

