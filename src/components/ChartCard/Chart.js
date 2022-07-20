import React from 'react';
import {GoogleCharts} from 'google-charts';

const Chart = () => {
    GoogleCharts.load(drawChart);
 
    function drawChart() {
 
    const data = GoogleCharts.api.visualization.arrayToDataTable([
        ['Chart thing', 'Chart amount'],
        ['Lorem ipsum', 60],
        ['Dolor sit', 22],
        ['Sit amet', 18]
    ]);
    const pie_1_chart = new GoogleCharts.api.visualization.PieChart(document.getElementById('chart1'));
    pie_1_chart.draw(data);
}

  return (
      <div id='chart1'/>
  );
}

export default Chart;