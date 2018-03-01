import * as React from 'react';
import * as styles from './SvgContainer.css';
// import BasicSvg from '../../components/SVG/BasicSvg';
// import PathSvg from '../../components/SVG/PathSvg';
// import TextSvg from '../../components/SVG/TextSvg';
import LinkSvg from '../../components/SVG/LinkSvg';

interface SVGContainerProps {
}

interface SVGContainerState {
}

class SVGContainer extends React.Component<SVGContainerProps, SVGContainerState> {

    static defaultProps: SVGContainerProps = {
    };

    state: SVGContainerState = {
    };

    render() {
        return (
            <div className={styles.svgContainer} >
                {/* <BasicSvg /> */}
                {/* <PathSvg /> */}
                {/* <TextSvg /> */}
                <LinkSvg />
            </div>
        );
    }
}

export default SVGContainer;