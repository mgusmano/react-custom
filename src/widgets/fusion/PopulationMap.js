import React, { useEffect, useState } from 'react';

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

import Util from '../../Util'

// Resolves charts dependancy
ReactFC.fcRoot(FusionCharts, Widgets, Usa, Maps, World, TreeMap, Column2D, FusionTheme, GammelTheme, CandyTheme, ZuneTheme, OceanTheme, CarbonTheme);

const theme = 'fusion'
const chartType = 'maps/usa'

const data = [{
  "id": "HI",
  "value": "3189000",
  "link": "j-drillDownState-HI|Hawaii"
},
{
  "id": "DC",
  "value": "2879000",
  "link": "j-drillDownState-DC|District of Columbia"
},
{
  "id": "MD",
  "value": "33592000",
  "link": "j-drillDownState-MD|Maryland"
},
{
  "id": "DE",
  "value": "4607000",
  "link": "j-drillDownState-DE|Delaware"
},
{
  "id": "RI",
  "value": "4890000",
  "link": "j-drillDownState-RI|Rhode Island"
},
{
  "id": "WA",
  "value": "34927000",
  "link": "j-drillDownState-WA|Washington"
},
{
  "id": "OR",
  "value": "65798000",
  "link": "j-drillDownState-OR|Oregon"
},
{
  "id": "CA",
  "value": "61861000",
  "link": "j-drillDownState-CA|California"
},
{
  "id": "AK",
  "value": "58911000",
  "link": "j-drillDownState-AK|Alaska|1"
},
{
  "id": "ID",
  "value": "42662000",
  "link": "j-drillDownState-ID|Idaho"
},
{
  "id": "NV",
  "value": "78041000",
  "link": "j-drillDownState-NV|Nevada"
},
{
  "id": "AZ",
  "value": "41558000",
  "link": "j-drillDownState-AZ|Arizona|2"
},
{
  "id": "MT",
  "value": "62942000",
  "link": "j-drillDownState-MT|Montana"
},
{
  "id": "WY",
  "value": "78834000",
  "link": "j-drillDownState-WY|Wyoming"
},
{
  "id": "UT",
  "value": "50512000",
  "link": "j-drillDownState-UT|Utah"
},
{
  "id": "CO",
  "value": "73026000",
  "link": "j-drillDownState-CO|Colorado"
},
{
  "id": "NM",
  "value": "78865000",
  "link": "j-drillDownState-NM|New Mexico"
},
{
  "id": "ND",
  "value": "50554000",
  "link": "j-drillDownState-ND|North Dakota"
},
{
  "id": "SD",
  "value": "35922000",
  "link": "j-drillDownState-SD|South Dakota"
},
{
  "id": "NE",
  "value": "43736000",
  "link": "j-drillDownState-NE|Nebraska"
},
{
  "id": "KS",
  "value": "32681000",
  "link": "j-drillDownState-KS|Kansas"
},
{
  "id": "OK",
  "value": "79038000",
  "link": "j-drillDownState-OK|Oklahoma"
},
{
  "id": "TX",
  "value": "97344000",
  "link": "j-drillDownState-TX|Texas"
},
{
  "id": "MN",
  "value": "43485000",
  "link": "j-drillDownState-MN|Minnesota"
},
{
  "id": "IA",
  "value": "46515000",
  "link": "j-drillDownState-IA|Iowa"
},
{
  "id": "MO",
  "value": "63715000",
  "link": "j-drillDownState-MO|Missouri"
},
{
  "id": "AR",
  "value": "34497000",
  "link": "j-drillDownState-AR|Arkansas|3"
}, {
  "id": "LA",
  "value": "70706000",
  "link": "j-drillDownState-LA|Louisiana"
}, {
  "id": "WI",
  "value": "42382000",
  "link": "j-drillDownState-WI|Wisconsin"
}, {
  "id": "IL",
  "value": "73202000",
  "link": "j-drillDownState-IL|Illinois"
}, {
  "id": "KY",
  "value": "79118000",
  "link": "j-drillDownState-KY|Kentucky"
}, {
  "id": "TN",
  "value": "44657000",
  "link": "j-drillDownState-TN|Tennessee"
}, {
  "id": "MS",
  "value": "66205000",
  "link": "j-drillDownState-MS|Mississippi"
}, {
  "id": "AL",
  "value": "75873000",
  "link": "j-drillDownState-AL|Alabama|0"
}, {
  "id": "GA",
  "value": "76895000",
  "link": "j-drillDownState-GA|Georgia"
}, {
  "id": "MI",
  "value": "67695000",
  "link": "j-drillDownState-MI|Michigan"
}, {
  "id": "IN",
  "value": "920000",
  "link": "j-drillDownState-IN|Indiana"
}, {
  "id": "OH",
  "value": "32960000",
  "link": "j-drillDownState-OH|Ohio"
}, {
  "id": "PA",
  "value": "54346000",
  "link": "j-drillDownState-PA|Pennsylvania"
}, {
  "id": "NY",
  "value": "42828000",
  "link": "j-drillDownState-NY|New York"
}, {
  "id": "VT",
  "value": "77411000",
  "link": "j-drillDownState-VT|Vermont"
}, {
  "id": "NH",
  "value": "51403000",
  "link": "j-drillDownState-NH|New Hampshire"
}, {
  "id": "ME",
  "value": "64636000",
  "link": "j-drillDownState-ME|Maine"
}, {
  "id": "MA",
  "value": "51767000",
  "link": "j-drillDownState-MA|Massachusetts"
}, {
  "id": "CT",
  "value": "57353000",
  "link": "j-drillDownState-CT|Connecticut"
}, {
  "id": "NJ",
  "value": "80788000",
  "link": "j-drillDownState-NJ|New Jersey"
}, {
  "id": "WV",
  "value": "95890000",
  "link": "j-drillDownState-WV|West Virginia"
}, {
  "id": "VA",
  "value": "83140000",
  "link": "j-drillDownState-VA|Virginia"
}, {
  "id": "NC",
  "value": "75425000",
  "link": "j-drillDownState-NC|North Carolina"
}, {
  "id": "SC",
  "value": "88234000",
  "link": "j-drillDownState-SC|South Carolina"
}, {
  "id": "FL",
  "value": "88234000",
  "link": "j-drillDownState-FL|Florida"
}]


const PopulationMap = (props) => {
  //title:Census Population Map//title:
  //x:10//x:
  //y:10//y:
  //width:775//width:
  //height:775//height:
  //icon:group//icon:

  useEffect(() => {
    console.log('useEffect in PopulationMap')
  }, []);

  const drillDownState = (stateName) => {
    var names = stateName && stateName.split('|'),
      sn = names && names[0],
      ln = names && names[1],
      i = names && names[2];
      console.log(ln)
      Util.SendIt('fromsend', {message: ln, i: i})
      return

    //If Washington, do special case (just for example)
    if ((sn === 'WA' && ln === 'Washington')) {
      window.open("https://www.google.com/maps/place/USA-" + sn);
    } else {
      window.open("https://www.google.com/maps/place/USA-" + ln);
    }
  }

  const renderComplete = (e) => {
    //console.log(e)
    //console.log(drillDownState)
    window['drillDownState'] = drillDownState
    //console.log(window['drillDownState'])
  }

  return (
    <div style={{display:'flex',flex:'1',border:'1px solid lightgray', justifyContent:'center', alignItems:'center' }}>
      <ReactFC
      type={chartType}
      onRender={renderComplete}
      width="85%"
      height="85%"
      dataFormat="JSON"
      dataSource={{
        "chart": {
          "caption": "Annual Sales by State",
          "subcaption": "Last year",
          "entityFillHoverColor": "#cccccc",
          "numberPrefix": "$",
          "showLabels": "1",
          "theme": "fusion"
        },
        "colorrange": {
          "minvalue": "920000",
          "startlabel": "Low",
          "endlabel": "High",
          "code": "#e44a00",
          "gradient": "1",
          "color": [{
            "maxvalue": "56580000",
            "displayvalue": "Average",
            "code": "#f8bd19"
          }, {
            "maxvalue": "97400000",
            "code": "#6baa01"
          }]
        },
        data: data
      }}
    />
    </div>
  )
}

export default PopulationMap