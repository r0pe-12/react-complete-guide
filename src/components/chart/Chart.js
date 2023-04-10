import './Chart.css'

import ChartBar from "./ChartBar";

function Chart(props) {
    const dataPoints = props.dataPoints;
    const dataPointsValues = dataPoints.map(el => parseInt(el.value));
    const maxValue = Math.max(...dataPointsValues);

    // datapoint blueprint === value, label
    return (
        <div className={'chart'}>
            {dataPoints.map(dataPoint => <ChartBar dataPoint={dataPoint} max={maxValue} key={dataPoint.label}/>)}
        </div>
    )
}

export default Chart;