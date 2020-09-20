import React, { component } from 'react'
//import * as d3 from 'd3'
import 'd3-tube-map/dist/d3-tube-map'
class TubeMap extends React.Component {
  //var container
  componentDidMount2() {
    const temperatureData = [ 8, 5, 13, 9, 12 ]
    d3.select(this.refs.temperatures)
        .selectAll("h2")
        .data(temperatureData)
        .enter()
            .append("h2")
            .text("New Temperature")
  }

  onResize() {
    console.log('onResize')
  }

  updateDimensions () {
    console.log(this.container)
    this.container = d3.select(this.refs.temperatures);

    console.log('updateDimensions')
    var width = this.refs.temperatures.scrollWidth;
    var height = this.refs.temperatures.scrollHeight;

    var map = d3
      .tubeMap()
      .width(width)
      .height(height)
      .margin({
        top: height / 50,
        right: width / 7,
        bottom: height / 10,
        left: width / 7,
      });

    d3.json('./pubs.json').then(function (data) {
      console.log(data)
      container.datum(data).call(map);
    });

    // if(window.innerWidth < 500) {
    //   this.setState({ width: 450, height: 102 });
    // } else {
    //   let update_width  = window.innerWidth-100;
    //   let update_height = Math.round(update_width/4.4);
    //   this.setState({ width: update_width, height: update_height });
    // }


  }

  outputsize() {
    //console.log('in')
    //width.value = textbox.offsetWidth
    //height.value = textbox.offsetHeight
    var width = this.refs.temperatures.scrollWidth;
    var height = this.refs.temperatures.scrollHeight;

    //console.log(this.container)
    //if (this.container == undefined) {
      //console.log(this.refs.temperatures.innerHTML)
      //this.refs.temperatures.innerHTML = "";


      //var node= document.getElementById("parent");
      this.refs.temperatures.querySelectorAll('*').forEach(n => n.remove());


      //console.log(this.refs.temperatures.innerHTML)
      this.container = d3.select(this.refs.temperatures);
    //}



    //console.dir(this.refs.temperatures)
    //console.dir(this.refs.temperatures.scrollWidth)

    //var width = this.refs.temperatures.scrollWidth;
    //var height = this.refs.temperatures.scrollHeight;

    var map = d3
      .tubeMap()
      .width(width)
      .height(height)
      .margin({
        top: height / 50,
        right: width / 7,
        bottom: height / 10,
        left: width / 7,
      });

      var me = this
    d3.json('./pubs.json').then(function (data) {
      //console.log(data)
      me.container.datum(data).call(map);
    });




   }



  componentDidMount() {
    this.outputsize()


     new ResizeObserver(this.outputsize.bind(this)).observe(this.refs.temperatures)

  }
    //window.addEventListener("resize", this.updateDimensions.bind(this));



    render() {
      return (
<div ref="temperatures" style={{border: '1px solid red',display:'flex',height:'100%',xoverflow:'auto'}}>

</div>
      );
    }

}
export default TubeMap