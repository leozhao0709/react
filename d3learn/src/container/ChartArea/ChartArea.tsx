import * as React from 'react';
import BarChart from '../../components/BarChart/BarChart';
import * as styles from './ChartArea.css';
import { BuildingsType } from '../../types/dataType';

const data = require('../../assets/buildings.json');

interface ChartAreaProps {
}

interface ChartAreaState {
    data: BuildingsType[];
}

class ChartArea extends React.Component<ChartAreaProps, ChartAreaState> {

    static defaultProps: ChartAreaProps = {
    };

    state: ChartAreaState = {
        data: data
    };

    render() {
        return (
            <div className={styles.chartArea} >
                <BarChart data={this.state.data} />
            </div>
        );
    }
}

export default ChartArea;