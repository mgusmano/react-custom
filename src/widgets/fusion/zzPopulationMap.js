import React from "react";
import FusionChart from "./FusionChart";

const theme = 'gammel'
const chartType = 'maps/usa'
//const chartType = 'treemap'
////const caption = "Countries With Most Oil Reserves [2017-18]"

const dataSource = {
  dataSource: {
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
    "data": [{
      "id": "HI",
      "value": "3189000",
      "link": "j-drillDownState-HI|Hawaii"
    }, {
      "id": "DC",
      "value": "2879000",
      "link": "j-drillDownState-DC|District of Columbia"
    }, {
      "id": "MD",
      "value": "33592000",
      "link": "j-drillDownState-MD|Maryland"
    }, {
      "id": "DE",
      "value": "4607000",
      "link": "j-drillDownState-DE|Delaware"
    }, {
      "id": "RI",
      "value": "4890000",
      "link": "j-drillDownState-RI|Rhode Island"
    }, {
      "id": "WA",
      "value": "34927000",
      "link": "j-drillDownState-WA|Washington"
    }, {
      "id": "OR",
      "value": "65798000",
      "link": "j-drillDownState-OR|Oregon"
    }, {
      "id": "CA",
      "value": "61861000",
      "link": "j-drillDownState-CA|California"
    }, {
      "id": "AK",
      "value": "58911000",
      "link": "j-drillDownState-AK|Alaska"
    }, {
      "id": "ID",
      "value": "42662000",
      "link": "j-drillDownState-ID|Idaho"
    }, {
      "id": "NV",
      "value": "78041000",
      "link": "j-drillDownState-NV|Nevada"
    }, {
      "id": "AZ",
      "value": "41558000",
      "link": "j-drillDownState-AZ|Arizona"
    }, {
      "id": "MT",
      "value": "62942000",
      "link": "j-drillDownState-MT|Montana"
    }, {
      "id": "WY",
      "value": "78834000",
      "link": "j-drillDownState-WY|Wyoming"
    }, {
      "id": "UT",
      "value": "50512000",
      "link": "j-drillDownState-UT|Utah"
    }, {
      "id": "CO",
      "value": "73026000",
      "link": "j-drillDownState-CO|Colorado"
    }, {
      "id": "NM",
      "value": "78865000",
      "link": "j-drillDownState-NM|New Mexico"
    }, {
      "id": "ND",
      "value": "50554000",
      "link": "j-drillDownState-ND|North Dakota"
    }, {
      "id": "SD",
      "value": "35922000",
      "link": "j-drillDownState-SD|South Dakota"
    }, {
      "id": "NE",
      "value": "43736000",
      "link": "j-drillDownState-NE|Nebraska"
    }, {
      "id": "KS",
      "value": "32681000",
      "link": "j-drillDownState-KS|Kansas"
    }, {
      "id": "OK",
      "value": "79038000",
      "link": "j-drillDownState-OK|Oklahoma"
    }, {
      "id": "TX",
      "value": "97344000",
      "link": "j-drillDownState-TX|Texas"
    }, {
      "id": "MN",
      "value": "43485000",
      "link": "j-drillDownState-MN|Minnesota"
    }, {
      "id": "IA",
      "value": "46515000",
      "link": "j-drillDownState-IA|Iowa"
    }, {
      "id": "MO",
      "value": "63715000",
      "link": "j-drillDownState-MO|Missouri"
    }, {
      "id": "AR",
      "value": "34497000",
      "link": "j-drillDownState-AR|Arkansas"
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
      "link": "j-drillDownState-AL|Alabama"
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
  },
  "events": {
    "renderComplete": function() {
      console.log('here')
      //Function that gets invoked when entity is clicked.
      function drillDownState(stateName) {
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
      //expose to the window scope
      window.drillDownState = drillDownState;
    }
  }
}

const dataSource2 = {
  "chart": {
    "xcaption": "Average Annual Population Growth",
    "xsubcaption": " 1955-2015",
    "numbersuffix": "%",
    "xincludevalueinlabels": "1",
    "labelsepchar": ": ",
    "entityFillHoverColor": "#FFF9C4",
    "theme": "fusion"
  },
  "colorrange": {
    "minvalue": "0",
    "code": "#FFE0B2",
    "gradient": "1",
    "color": [
      {
        "minvalue": "0.5",
        "maxvalue": "1.0",
        "color": "#FFD74D"
      },
      {
        "minvalue": "1.0",
        "maxvalue": "2.0",
        "color": "#FB8C00"
      },
      {
        "minvalue": "2.0",
        "maxvalue": "3.0",
        "color": "#E65100"
      }
    ]
  },
  "data": [
    {
      "id": "NA",
      "value": ".82",
      "showLabel": "1"
    },
    {
      "id": "SA",
      "value": "2.04",
      "showLabel": "1"
    },
    {
      "id": "AS",
      "value": "1.78",
      "showLabel": "1"
    },
    {
      "id": "EU",
      "value": ".40",
      "showLabel": "1"
    },
    {
      "id": "AF",
      "value": "2.58",
      "showLabel": "1"
    },
    {
      "id": "AU",
      "value": "1.30",
      "showLabel": "1"
    }
  ]




}

class PopulationMap extends React.Component {
  render() {
    return (
<div style={{flex:'1',border:'1px solid lightgray',overflow:'hidden' }}>
        <FusionChart
          chartType={chartType}
          dataSource={dataSource}
        />
</div>
    );
  }
}

export default PopulationMap;
