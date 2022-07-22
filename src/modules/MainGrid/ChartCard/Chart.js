import React, {useEffect} from 'react';
import {GoogleCharts} from 'google-charts';
import { useSelector, useDispatch } from 'react-redux'
import {setData} from '../MainGridSlice'

const Chart = () => {
    GoogleCharts.load(drawChart);

    const dispatch = useDispatch()

    const showOpen = useSelector((state) => state.maingrid.open)
    const showHigh = useSelector((state) => state.maingrid.high)
    const showLow = useSelector((state) => state.maingrid.low)
    const showClose = useSelector((state) => state.maingrid.close)
    const tableData = useSelector((state) => state.maingrid.data)

    const rawData = [
      ['Date', 'Open', 'High', 'Low',  'Close'],
      ['2000-01-03', 122.25, 124.0, 116.1, 116.5],
      ['2000-01-04', 116.25, 120.5, 115.75, 116.25],
      ['2000-01-05', 115, 121.0, 115.0, 118.6],
      ['2000-01-06', 119, 121.4, 116.5, 116.85]
    ]

    // Allows the chart to redraw based on which lines are supposed to show.
    useEffect(()=>{
      let newTable = [...rawData]

      if(!showOpen){
        let index = newTable[0].indexOf('Open')
        newTable.forEach(row => row.splice(index, 1))
      }
      if(!showHigh){
        let index = newTable[0].indexOf('High')
        newTable.forEach(row => row.splice(index, 1))
      }
      if(!showClose){
        let index = newTable[0].indexOf('Close')
        newTable.forEach(row => row.splice(index, 1))
      }
      if(!showLow){
        let index = newTable[0].indexOf('Low')
        newTable.forEach(row => row.splice(index, 1))
      }

      dispatch(setData(newTable))
    }, [showOpen, showHigh, showLow, showClose])

    function drawChart() {

      let data;

        if(tableData.length){
          data = GoogleCharts.api.visualization.arrayToDataTable(tableData);
        }
        else{
          data = GoogleCharts.api.visualization.arrayToDataTable(rawData);
        }

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