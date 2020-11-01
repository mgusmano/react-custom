import React from 'react'
import Draggable from 'react-draggable';
import floorplan from './floorplan.png';
console.log(floorplan)

var sectionStyle = {
  width: "100%",
  height: "400px",
  backgroundImage: "url(" + { floorplan } + ")"
};



const Floorplan = () => {

  const handleStart = (e) => {
  }

  const handleDrag = (e) => {
  }

  const handleStop = (e) => {
  }



  return (
    <div style={{width:'100%',backgroundImage:`url(${floorplan})`,backgroundPosition:'center',backgroundRepeat:'no-repeat',backgroundSize:'cover'}}>


      <Draggable
        defaultPosition={{x: 0, y: 0}}
        onStart={handleStart}
        onDrag={handleDrag}
        onStop={handleStop}>
        <div style={{background:'lightgray',width:'120px',height:'50px',border:'1px solid gray'}}>
          <div className="handle">Brad Jones</div>
          <div>Mon and Wed</div>
        </div>
      </Draggable>

      <Draggable
        defaultPosition={{x: 0, y: 50}}
        onStart={handleStart}
        onDrag={handleDrag}
        onStop={handleStop}>
        <div style={{background:'cyan',width:'120px',height:'50px',border:'1px solid gray'}}>
          <div className="handle">Karen Smith</div>
          <div>Tue and Thu</div>
        </div>
      </Draggable>

      <Draggable
        defaultPosition={{x: 0, y: 100}}
        onStart={handleStart}
        onDrag={handleDrag}
        onStop={handleStop}>
        <div style={{background:'lightgray',width:'120px',height:'50px',border:'1px solid gray'}}>
          <div className="handle">Tim Johnson</div>
          <div>Mon and Wed</div>
        </div>
      </Draggable>



    </div>
  )
}

export default Floorplan