import React, { component, useRef, useEffect } from 'react'
import * as THREE from 'three';
//import './OrbitControls'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import '../../data/datapoints2'

const Datashape2 = () => {
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

    var data_points = datapoints2



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
          "rgb(100,100,255)",
          "rgb(255,255,0)",
          "rgb(255,0,255)",
          "rgb(255,102,255)",
          "rgb(192,192,192)",
          "rgb(0,255,255)",
      ]
      // Lighten or darken colors
      const RGB_Linear_Shade=(p,c)=>{
          var i=parseInt,r=Math.round,[a,b,c,d]=c.split(","),P=p<0,t=P?0:255*p,P=P?1+p:1-p;
          return"rgb"+(d?"a(":"(")+r(i(a[3]=="a"?a.slice(5):a.slice(4))*P+t)+","+r(i(b)*P+t)+","+r(i(c)*P+t)+(d?","+d:")");
      }

      // Add datapoints to plot
      var knowledgeMap = new THREE.Object3D();
      for (var i=0; i<data_points.length; i++) {
        //console.log((data_points[i].influenceDistance)/275)
          var geometry = new THREE.SphereBufferGeometry((data_points[i].influenceDistance)/275, 20, 20);
          //var geometry = new THREE.SphereBufferGeometry((data_points[i].influenceDistance)/275, 60, 60);
          // Scale percentile from [0, 0.70] to prevent super dark colors
          var thisColor = RGB_Linear_Shade(-data_points[i].pct*0.70, color_array[data_points[i].category]);
          var material = new THREE.MeshLambertMaterial({ color: thisColor });

          var sphere = new THREE.Mesh( geometry, material );
          sphere.userData.id = i;
          sphere.position.set(data_points[i].x, data_points[i].y, data_points[i].z);
          knowledgeMap.add(sphere);
      }

      scene.add(knowledgeMap);






      // Hover interaction
      var mouseRay = new THREE.Vector3();
      var raycaster = new THREE.Raycaster();

      // mouseMove optimization (checks every 100-ms)
      var mouseMoveTimer = null;
      function onMouseMove(event) {
          if (mouseMoveTimer) {
              window.clearTimeout(mouseMoveTimer);
          }
          mouseMoveTimer = window.setTimeout(delayedMouseMove(event), 100);
      }
      function delayedMouseMove(event) {
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

          var geometry = new THREE.SphereBufferGeometry( (datum.influenceDistance*radius_scale)/225, 20, 20);
          var material = new THREE.MeshLambertMaterial( {color: color_array[datum.category] } );
          var sphere = new THREE.Mesh( geometry, material );
          sphere.position.set(datum.x*distance_scale, datum.y*distance_scale, datum.z*distance_scale);

          hoverContainer.add(sphere);
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

      camera = new THREE.PerspectiveCamera(40, width/height, 0.1, 1000 );
      camera.position.z = 35;

      // Renderer
      //contentRef.current.querySelectorAll('*').forEach(n => n.remove());
      //renderer = new THREE.WebGLRenderer({antialias: true});
      renderer.setSize(width, height);

      controls = new OrbitControls( camera, renderer.domElement );
      controls.autoRotate = true;
      controls.maxDistance = 150;
      controls.minDistance = 1;

      //renderer.setSize(width, height);

      renderer.setSize( width, height );


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

  var render = function() {
    //init()
    console.log('render')
    requestAnimationFrame(render);


    controls.update();
    renderer.render(scene, camera);
  }



  useEffect(() => {
    renderer = new THREE.WebGLRenderer( { antialias: true } );
    init()

    render();


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

export default Datashape2
