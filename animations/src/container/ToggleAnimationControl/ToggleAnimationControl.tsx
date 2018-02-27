import * as React from 'react';
import ToggleAnimation from '../../components/ToggleAnimation/ToggleAnimation';

interface ToggleAnimationControlProps {
}

interface ToggleAnimationControlState {
    showToggle: boolean;
    datas: { id: number, backgroundColor: string }[];
}

function getRandomColor() {
    return Array(6).fill(0).reduce((m: string) => {
        return `${m}${'0123456789ABCDEF'[Math.floor(Math.random() * 16)]}`;
        // tslint:disable-next-line:align
    }, '#');
}

class ToggleAnimationControl extends React.Component<ToggleAnimationControlProps, ToggleAnimationControlState> {

    static defaultProps: ToggleAnimationControlProps = {
    };

    state: ToggleAnimationControlState = {
        showToggle: false,
        datas: Array(3).fill(0).map((_, index) => {
            return {
                id: index,
                backgroundColor: getRandomColor()
            };
        }),
    };

    toggleClickHandler = () => {
        // this.setState({ showToggle: !this.state.showToggle });
        // if (this.state.showToggle) {
        //     this.setState({
        //         datas: Array(3).fill(0).map((_, index) => {
        //             return { id: index, backgroundColor: getRandomColor() };
        //         })
        //     });
        // } else {
        //     this.setState({ datas: [] });
        // }

        this.setState((prev) => {
            return {
                showToggle: !prev.showToggle,
                datas: prev.showToggle ? [] : Array(3).fill(0).map((_, index) => {
                    return { id: index, background: getRandomColor() };
                })
            };
        });
        // tslint:disable-next-line:no-console
        console.log(`toggle handler: ${this.state.showToggle}`);
    }

    updateClickHandler = () => {
        this.setState({
            showToggle: true,
            datas: Array(3).fill(0).map((_, index) => {
                return { id: index, backgroundColor: getRandomColor() };
            })
        });
        // tslint:disable-next-line:no-console
        console.log(`update handler: ${this.state.showToggle}`);
    }

    render() {
        return (
            <div>
                <ToggleAnimation
                    showToggle={this.state.showToggle}
                    toggleClicked={this.toggleClickHandler}
                    datas={this.state.datas}
                    updateClicked={this.updateClickHandler}
                />
            </div>
        );
    }
}

export default ToggleAnimationControl;