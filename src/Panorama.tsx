import React, { useEffect } from 'react';
import { Scene, PerspectiveCamera, WebGLRenderer, BoxGeometry, MeshBasicMaterial, Mesh, Color, TextureLoader, RepeatWrapping, CubeRefractionMapping } from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

export const LandingCanvas: React.FC = () => {
  const scene = new Scene();
  const texture = new TextureLoader().load("textures/design.jpg");
  texture.wrapS = RepeatWrapping;
  texture.wrapT = RepeatWrapping;
  texture.repeat.set(1, 0.1);
  
  scene.background = texture;
  const camera = new PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
  const renderer = new WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight)

  var geometry = new BoxGeometry(1, 1, 1)
  const material = new MeshBasicMaterial({ map: texture });
  const cube = new Mesh(geometry, material);

  scene.add(cube);
  camera.position.z = 10;
  renderer.render(scene, camera);

  const controls = new OrbitControls( camera, renderer.domElement );

  useEffect(() => {
    const element = document.getElementById('__landingCanvas');
    element!.parentNode!.replaceChild(renderer.domElement, element!);
    const animate = () => {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);
    };
    animate();
    console.log("firing");
  }, [renderer, cube, scene, camera]);
  
  return <div id={"__landingCanvas"} />
};
