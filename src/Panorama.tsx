import React, { useEffect } from 'react';
import { Scene, PerspectiveCamera, WebGLRenderer, BoxGeometry, MeshBasicMaterial, Mesh, Color, CubeTextureLoader, RepeatWrapping, CubeRefractionMapping } from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

export const LandingCanvas: React.FC = () => {
  const scene = new Scene();
  const texture = new CubeTextureLoader().load([
    "textures/design-1.jpg",
    "textures/design-2.jpg",
    "textures/design-3.jpg",
    "textures/design-4.jpg",
    "textures/design-6.jpg",
    "textures/design-5.jpg",
  ]);
  texture.wrapS = RepeatWrapping;
  texture.wrapT = RepeatWrapping;
  texture.repeat.set(1, 0.1);
  
  scene.background = texture;
  const camera = new PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
  const renderer = new WebGLRenderer();
  renderer.setSize(window.innerWidth *1.0, window.innerHeight *0.98)

  // var geometry = new BoxGeometry(1, 1, 1)
  // const material = new MeshBasicMaterial({ map: texture });
  // const cube = new Mesh(geometry, material);

  // scene.add(cube);
  camera.position.z = 10;
  
  renderer.render(scene, camera);

  const controls = new OrbitControls( camera, renderer.domElement );
  (controls as any).enableZoom = false ;
  useEffect(() => {
    const element = document.getElementById('__landingCanvas');
    element!.parentNode!.replaceChild(renderer.domElement, element!);
    const animate = () => {
      requestAnimationFrame(animate);

    renderer.render(scene, camera);
    };
    animate();
    console.log("firing");
  }, [renderer, scene, camera]);
  
  return <div id={"__landingCanvas"} />
};
