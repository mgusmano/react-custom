import React, { component, useRef, useEffect } from 'react'
import * as THREE from 'three';
//import './OrbitControls'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import '../../data/datapoints'

const Datashape = () => {
  //https://threejs.org/
  const animate = false
  var req = null
  const contentRef = useRef()
  var camera, scene, renderer;
  var geometry, material, mesh;
  var controls
  var hoverContainer

  const init = () => {

  //   d3.csv("data/KB2d.csv", function (data) {
  //     return {
  //         index: +data.index,
  //         category: +data.category,
  //         description: data.description,
  //         influenceDistance: +Math.round(data.influenceDistance),
  //         pct: +data.pct,
  //         x: +data.x,
  //         y: +data.y,
  //     };
  // }).then(function(data_points) {

    var data_points = datapoints



    //console.log(JSON.stringify(data_points))
      scene = new THREE.Scene();
      scene.background = new THREE.Color( 0xffffff );

      // Light
      var light = new THREE.DirectionalLight(0xffffff);
      light.position.set(10, 10, 10);
      scene.add(light);

      var light = new THREE.DirectionalLight(0xffffff);
      light.position.set(-10, -10, -10);
      scene.add(light);

      var light = new THREE.AmbientLight(0x222222);
      scene.add(light);

      // Knowledge Element Color
      // MAXIMUM of 8 categories :(
      let color_array = [
          "rgb(255,0,0)",
          "rgb(0,255,0)",
          "rgb(0,0,255)",
          "rgb(255,255,0)",
          "rgb(255,0,255)",
          "rgb(255,102,255)",
          "rgb(192,192,192)",
          "rgb(0,255,255)",
      ]

      // Add datapoints to map
      const INITIAL_HEIGHT = 15;
      var knowledgeMap = new THREE.Object3D();
      for (var i=0; i<data_points.length; i++) {
          let geometry = new THREE.CylinderBufferGeometry((data_points[i].influenceDistance)/225, (data_points[i].influenceDistance)/225,
              data_points[i].pct*INITIAL_HEIGHT, 30, 30);
          geometry.translate( 0, 12.5, 0 );
          geometry.rotateX( Math.PI / 2 );

          var material = new THREE.MeshLambertMaterial( {color: color_array[data_points[i].category] } );
          var cylinder = new THREE.Mesh( geometry, material );

          cylinder.userData.id = i;
          cylinder.position.set(data_points[i].x, data_points[i].y, (data_points[i].pct*INITIAL_HEIGHT)/2 - 12.5);
          knowledgeMap.add(cylinder);
      }
      scene.add(knowledgeMap);







          // Hover interaction
          var mouseRay = new THREE.Vector3();
          var raycaster = new THREE.Raycaster();

          // mouseMove optimization (checks every 100-ms)
          var mouseMoveTimer = null;
          function onMouseMove(event) {
            //console.log('mousemove')
              if (mouseMoveTimer) {
                  window.clearTimeout(mouseMoveTimer);
              }
              mouseMoveTimer = window.setTimeout(delayedMouseMove(event), 200);
          }
          function delayedMouseMove(event) {
            //console.log('delayedMouseMove')
              mouseRay.x = ( event.clientX / renderer.domElement.clientWidth ) * 2 - 1;
              mouseRay.y = - ( event.clientY / renderer.domElement.clientHeight ) * 2 + 1;
              mouseRay.z = 1;
              let mouse = [event.clientX, event.clientY];
              raycaster.setFromCamera(mouseRay, camera);
              let intersects = raycaster.intersectObjects(scene.children, true);
              //console.log('a')
              if (intersects[0]) {
                //console.log('b')
                  let sorted_intersects = sortIntersectsByDistanceToRay(intersects);
                  let intersect = sorted_intersects[0];
                  let index = intersect.object.userData.id;
                  let datum = data_points[index];
                  if (datum) {
                    console.log('highlight')
                      highlightPoint(datum);
                      //showTooltip(mouse, datum)
                  }
              } else {
                //console.log('c')
                  removeHighlights();
                  //hideTooltip();
              }
          }



          function sortIntersectsByDistanceToRay(intersects) {
              return _.sortBy(intersects, "distanceToRay");
          }

          // Mouse hover interaction
          hoverContainer = new THREE.Object3D();
          scene.add(hoverContainer);
          function highlightPoint(datum) {
              removeHighlights()
              let geometry = new THREE.CylinderBufferGeometry((datum.influenceDistance*radius_scale)/175, (datum.influenceDistance*radius_scale)/175,
                  datum.pct*INITIAL_HEIGHT*height_scale+0.01, 30, 30);
              geometry.translate( 0, 12.5, 0 );
              geometry.rotateX( Math.PI / 2 );
              var material = new THREE.MeshLambertMaterial( {color: color_array[datum.category] } );

              var cylinder = new THREE.Mesh( geometry, material );
              cylinder.userData.id = i;
              cylinder.position.set(datum.x*distance_scale, datum.y*distance_scale, (datum.pct*INITIAL_HEIGHT*height_scale)/2 - 12.5);
              knowledgeMap.add(cylinder);
              hoverContainer.add(cylinder);
          }
          function removeHighlights() {
              hoverContainer.remove(...hoverContainer.children);
          }
          function onMouseLeave() {
              removeHighlights()
          }


          contentRef.current.addEventListener('mousemove', onMouseMove, false);
          contentRef.current.addEventListener('mouseleave', onMouseLeave, false);








      sizeInit()
      //draw()

    //End d3.csv
  //  })
  }

  const sizeInit = () => {
    if (contentRef.current == null) {return}
    var width = contentRef.current.offsetWidth - 10;
    var height = contentRef.current.offsetHeight - 10;

    var fov = 40;
    var near = 0.1;
    var far = 400;
    camera = new THREE.PerspectiveCamera(fov, width/height, near, far);
    camera.position.set(0, 55, 35 );
    camera.up.set( 0, 0, 1 );



    controls = new OrbitControls( camera, renderer.domElement );
    controls.screenSpacePanning = false;
    // Max zoom out
    controls.maxDistance = 250;
    // Max zoom in
    controls.minDistance = 2;
    controls.maxPolarAngle = Math.PI/2;
    controls.mouseButtons = {
        RIGHT: THREE.MOUSE.ROTATE,
        MIDDLE: THREE.MOUSE.DOLLY,
        LEFT: THREE.MOUSE.PAN
    }


    renderer.setSize( width, height, true );
    contentRef.current.querySelectorAll('*').forEach(n => n.remove());

    //console.log(renderer.domElement)
    //console.log(contentRef.current)


    renderer.render( scene, camera );

    contentRef.current.appendChild( renderer.domElement );
    controls.update();




  }

  // const draw = () => {
  //   if (animate == true) {req = requestAnimationFrame(draw)}
  //   controls.update();
  //   renderer.render( scene, camera );
  // }

  const outputsize = () => {
    //if (req !== null) {window.cancelAnimationFrame(req)}
    init()





    //sizeInit()
    //draw()
  }

  useEffect(() => {
    renderer = new THREE.WebGLRenderer( { antialias: true } );
    init()



    // sizeInit()
    // draw()
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

export default Datashape
