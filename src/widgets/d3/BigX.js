import React, { component } from 'react'

class BigX extends React.Component {

  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }


  outputsize() {
    var width = this.myRef.current.offsetWidth;
    var height = this.myRef.current.offsetHeight-2;
    //console.log(width)
    //console.log(height)

    this.svg
      .attr("width", width)
      .attr("height", height);

    // Draw an X to show that the size is correct.
    var lines = this.svg.selectAll("line").data([
      {x1: 0, y1: 0, x2: width, y2: height},
      {x1: 0, y1: height, x2: width, y2: 0}
    ]);
    lines
      .enter().append("line")
        .style("stroke-width", 50)
        .style("stroke-opacity", 0.4)
        .style("stroke", "black")
      .merge(lines)
        .attr("x1", function (d) { return d.x1; })
        .attr("y1", function (d) { return d.y1; })
        .attr("x2", function (d) { return d.x2; })
        .attr("y2", function (d) { return d.y2; })
    ;
  }

  componentDidMount() {
    var chartDiv = this.myRef.current;
    //debugger
    this.svg = d3.select(chartDiv).append("svg");
    this.outputsize()
    new ResizeObserver(this.outputsize.bind(this)).observe(this.myRef.current)
  }

  render() {
    return (
      <div
        ref={this.myRef}
        style={{border: '1px solid lightgray',display:'flex',height:'100%',overflow:'auto'}}>
      </div>
    );
  }

}
export default BigX