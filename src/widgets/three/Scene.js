import React, { component, useRef, useEffect } from 'react'
import * as THREE from 'three';

const Scene = () => {
  //https://threejs.org/
  const animate = false
  var req = null
  const contentRef = useRef()
  var camera, scene, renderer;
  var geometry, material, mesh;

  const init = () => {
    scene = new THREE.Scene();
    scene.background = new THREE.Color( 0xffffff );
    geometry = new THREE.BoxGeometry( 0.4, 0.4, 0.4 );
    material = new THREE.MeshNormalMaterial();
    mesh = new THREE.Mesh( geometry, material );
    scene.add( mesh );
    renderer = new THREE.WebGLRenderer( { antialias: false } );
  }

  const sizeInit = () => {
    if (contentRef.current == null) {return}
    var width = contentRef.current.offsetWidth - 10;
    var height = contentRef.current.offsetHeight - 10;
    camera = new THREE.PerspectiveCamera( 50, 1, 0.1, 2000 );
    camera.position.z = 1;
    renderer.setSize( width, height, true );
    contentRef.current.querySelectorAll('*').forEach(n => n.remove());
    contentRef.current.appendChild( renderer.domElement );
  }

  const draw = () => {
    if (animate == true) {req = requestAnimationFrame(draw)}
    mesh.rotation.x += 0.01;
    mesh.rotation.y += 0.02;
    renderer.render( scene, camera );
  }

  const outputsize = () => {
    if (req !== null) {window.cancelAnimationFrame(req)}
    sizeInit()
    draw()
  }

  useEffect(() => {
    init()
    sizeInit()
    draw()
    new ResizeObserver(outputsize).observe(contentRef.current)
  }, []);

  const test = (width, height) => {
    var d = document.createElement('DIV')
    d.style.border = '1px solid red'
    d.style.width = width + 'px'
    d.style.height = height + 'px'
    contentRef.current.appendChild(d);
  }

  return (
    <div style={{margin:'0',padding:'0',height:'100%',border:'1px solid lightgray',background:'white'}} ref={contentRef}></div>
  )
}

export default Scene


    //var value = window.devicePixelRatio;
    //console.log(value)
    //console.log(height)

    //camera = new THREE.PerspectiveCamera( 50, width / height, 0.01, 10 );