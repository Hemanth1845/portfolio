import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface TechNode {
  name: string;
  color: number;
}

const TECH_ITEMS: TechNode[] = [
  { name: 'Java', color: 0xf59e0b },
  { name: 'Python', color: 0x3b82f6 },
  { name: 'React', color: 0x06b6d4 },
  { name: 'Node.js', color: 0x22c55e },
  { name: 'MongoDB', color: 0x10b981 },
  { name: 'LangChain', color: 0x8b5cf6 },
  { name: 'RAG', color: 0xec4899 },
  { name: 'Spring Boot', color: 0x84cc16 },
  { name: 'PyTorch', color: 0xf97316 },
  { name: 'Docker', color: 0x0284c7 },
  { name: 'AWS', color: 0xfbbf24 },
  { name: 'Azure', color: 0x2563eb },
];

export const TechOrb3DCanvas: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    const width = container.clientWidth || 360;
    const height = container.clientHeight || 360;

    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 50);
    camera.position.z = 5.2;

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    const constellationGroup = new THREE.Group();
    scene.add(constellationGroup);

    // Inner wireframe sphere
    const wireGeo = new THREE.SphereGeometry(1.6, 16, 16);
    const wireMat = new THREE.MeshBasicMaterial({
      color: 0x3b82f6,
      wireframe: true,
      transparent: true,
      opacity: 0.18,
    });
    const wireSphere = new THREE.Mesh(wireGeo, wireMat);
    constellationGroup.add(wireSphere);

    // Position tech nodes uniformly on sphere surface using Fibonacci sphere
    const nodePositions: THREE.Vector3[] = [];
    const phi = Math.PI * (3 - Math.sqrt(5)); // Golden ratio angle

    TECH_ITEMS.forEach((tech, i) => {
      const y = 1 - (i / (TECH_ITEMS.length - 1)) * 2; // y goes from 1 to -1
      const radius = Math.sqrt(1 - y * y);
      const theta = phi * i;

      const x = Math.cos(theta) * radius;
      const z = Math.sin(theta) * radius;
      const sphereRadius = 1.9;

      const pos = new THREE.Vector3(x * sphereRadius, y * sphereRadius, z * sphereRadius);
      nodePositions.push(pos);

      // Node Mesh
      const nodeGeo = new THREE.DodecahedronGeometry(0.16, 0);
      const nodeMat = new THREE.MeshStandardMaterial({
        color: tech.color,
        emissive: tech.color,
        emissiveIntensity: 0.8,
        metalness: 0.8,
        roughness: 0.2,
      });
      const nodeMesh = new THREE.Mesh(nodeGeo, nodeMat);
      nodeMesh.position.copy(pos);
      constellationGroup.add(nodeMesh);

      // Node halo
      const haloGeo = new THREE.SphereGeometry(0.24, 12, 12);
      const haloMat = new THREE.MeshBasicMaterial({
        color: tech.color,
        transparent: true,
        opacity: 0.25,
      });
      const halo = new THREE.Mesh(haloGeo, haloMat);
      halo.position.copy(pos);
      constellationGroup.add(halo);
    });

    // Connecting vectors between nodes
    const lineIndices: number[] = [];
    for (let i = 0; i < nodePositions.length; i++) {
      for (let j = i + 1; j < nodePositions.length; j++) {
        if (nodePositions[i].distanceTo(nodePositions[j]) < 2.2) {
          lineIndices.push(i, j);
        }
      }
    }

    const linePoints: THREE.Vector3[] = [];
    for (let k = 0; k < lineIndices.length; k += 2) {
      linePoints.push(nodePositions[lineIndices[k]]);
      linePoints.push(nodePositions[lineIndices[k + 1]]);
    }

    const linesGeo = new THREE.BufferGeometry().setFromPoints(linePoints);
    const linesMat = new THREE.LineBasicMaterial({
      color: 0x8b5cf6,
      transparent: true,
      opacity: 0.35,
    });
    const constellationLines = new THREE.LineSegments(linesGeo, linesMat);
    constellationGroup.add(constellationLines);

    // Ambient Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.9);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0x3b82f6, 2.5, 10);
    pointLight.position.set(3, 3, 3);
    scene.add(pointLight);

    // Mouse interactive tilt
    let mouseX = 0;
    let mouseY = 0;
    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouseX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouseY = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
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

    // Loop
    let animId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const time = clock.getElapsedTime();

      constellationGroup.rotation.y = time * 0.25 + mouseX * 0.5;
      constellationGroup.rotation.x = time * 0.15 + mouseY * 0.3;

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
      wireGeo.dispose();
      wireMat.dispose();
      linesGeo.dispose();
      linesMat.dispose();
    };
  }, []);

  return (
    <div className="relative w-full h-[320px] sm:h-[380px] flex items-center justify-center">
      <div ref={mountRef} className="w-full h-full cursor-grab" />
      <div className="absolute bottom-1 text-[11px] font-mono text-slate-500/70 pointer-events-none">
        3D Interactive Tech Mesh
      </div>
    </div>
  );
};

