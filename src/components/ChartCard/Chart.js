import React from 'react';
import {GoogleCharts} from 'google-charts';

const Chart = () => {
    GoogleCharts.load(drawChart);
 
    function drawChart() {

        let rawData = [
            ['Date', 'Open', 'High', 'Low',  'Close'],
            ['2000-01-03', 122.25, 124.0, 116.1, 116.5],
            ['2000-01-04', 116.25, 120.5, 115.75, 116.25],
            ['2000-01-05', 115, 121.0, 115.0, 118.6],
            ['2000-01-06', 119, 121.4, 116.5, 116.85]
          ]
 
        var data = GoogleCharts.api.visualization.arrayToDataTable(rawData);
  
          var options = {
            title: 'Coffee Prices',
            curveType: 'function',
            legend: { position: 'bottom' }
          };
  
          var chart = new GoogleCharts.api.visualization.LineChart(document.getElementById('curve_chart'));
  
          chart.draw(data, options);
}

  return (
      <div id='curve_chart'/>
  );
}

export default Chart;