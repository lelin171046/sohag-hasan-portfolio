import { useEffect, useRef } from "react";
import * as THREE from "three";

export function Hero3D() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const width = containerRef.current.clientWidth;
    const height = containerRef.current.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });

    renderer.setSize(width, height);
    renderer.setClearColor(0x000000, 0);
    containerRef.current.appendChild(renderer.domElement);

    camera.position.z = 5;

    const geometry = new THREE.IcosahedronGeometry(2, 4);
    const material = new THREE.MeshPhongMaterial({
      color: 0x00d4ff,
      emissive: 0x0088cc,
      shininess: 100,
    });
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    const light1 = new THREE.PointLight(0x00d4ff, 1, 100);
    light1.position.set(5, 5, 5);
    scene.add(light1);

    const light2 = new THREE.PointLight(0xff00d4, 0.8, 100);
    light2.position.set(-5, -5, 5);
    scene.add(light2);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
    scene.add(ambientLight);

    let animationId;
    const animate = () => {
      animationId = requestAnimationFrame(animate);
      mesh.rotation.x += 0.003;
      mesh.rotation.y += 0.005;
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      if (!containerRef.current) return;
      const newWidth = containerRef.current.clientWidth;
      const newHeight = containerRef.current.clientHeight;

      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationId);
      containerRef.current?.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, []);

  return <div ref={containerRef} className="w-full h-full" />;
}
export default Hero3D;