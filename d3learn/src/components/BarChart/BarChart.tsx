import * as React from 'react';
import { StatelessComponent } from 'react';
import { BuildingsType } from '../../types/dataType';
import { scaleLinear, scaleBand } from 'd3-scale';
import { max } from 'd3-array';

interface BarChartProps {
    data: BuildingsType[];
}

const BarChart: StatelessComponent<BarChartProps> = (props: BarChartProps) => {

    const margin = { left: 100, right: 10, top: 10, bottom: 100 };
    const width = 500 - margin.left - margin.right;
    const height = 400 - margin.top - margin.bottom;

    const y = scaleLinear()
        .domain([0, max(props.data, (d) => {
            return +d.height;
        })!])
        .range([0, height])
        ;
    const x = scaleBand()
        .domain(props.data.map((building) => (
            building.name
        )))
        .range([0, width])
        .padding(0.1)
        ;

    return (
        <svg width="100%" height="100%" >
            <g transform={`translate(${margin.left}, ${margin.top})`} >
                {
                    props.data.map((buildind, index) => {
                        return <rect
                            key={index}
                            x={x(buildind.name)}
                            y={0}
                            width={x.bandwidth()}
                            height={y(+buildind.height)}
                            fill="grey"
                        />;
                    })
                }
            </g>
        </svg>
    );
};

BarChart.defaultProps = {
};

export default BarChart;