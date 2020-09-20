import React from 'react'
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Column2D from "fusioncharts/fusioncharts.charts";
import Maps from "fusioncharts/fusioncharts.maps";
import World from "fusioncharts/maps/fusioncharts.world";
import Usa from "fusioncharts/maps/fusioncharts.usa";
import TreeMap from "fusioncharts/fusioncharts.treemap";
import Widgets from "fusioncharts/fusioncharts.widgets";

import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
import GammelTheme from 'fusioncharts/themes/fusioncharts.theme.gammel';
import CandyTheme from 'fusioncharts/themes/fusioncharts.theme.candy';
import ZuneTheme from 'fusioncharts/themes/fusioncharts.theme.zune';
import OceanTheme from 'fusioncharts/themes/fusioncharts.theme.ocean';
import CarbonTheme from 'fusioncharts/themes/fusioncharts.theme.carbon';

// Resolves charts dependancy
ReactFC.fcRoot(FusionCharts, Widgets, Usa, Maps, World, TreeMap, Column2D, FusionTheme, GammelTheme, CandyTheme, ZuneTheme, OceanTheme, CarbonTheme);

class FusionChart extends React.Component {

  onClicked(e) {
    console.log(e)
  }

  renderComplete(e) {
    console.log(e)


  }

   drillDownState(stateName) {
    console.log('hi')
    //Get the name of state that was clicked
    var names = stateName && stateName.split('|'),
      sn = names && names[0],
      ln = names && names[1];
    //If Washington, do special case (just for example)
    if ((sn === 'WA' && ln === 'Washington')) {
      window.open("https://www.google.com/maps/place/USA-" + sn);
    } else {
      window.open("https://www.google.com/maps/place/USA-" + ln);
    }

  }


  render() {
    const { chartType, dataSource } = this.props;
    //let chartType = 'scrollline2d';
    // if (dataSource && dataSource.categories) {
    //   dataSource.chart.labelDisplay = dataSource.categories[0].category.length > 2 ? 'rotate' : 'auto'
    //   chartType = dataSource.categories[0].category.length > 2 ? 'scrollline2d' : 'msColumn2D'
    // }

    //console.log(chartType)
    return (
      <ReactFC
        type={chartType}
        fcEvent-dataplotClick={this.onClick}
        onRender={this.renderComplete}
        width="100%"
        height="100%"
        dataFormat="JSON"
        dataSource={dataSource}
      />
    );
  }
}

export default FusionChart;