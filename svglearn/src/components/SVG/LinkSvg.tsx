import * as React from 'react';
import { StatelessComponent } from 'react';

interface LinkSvgProps {
}

const LinkSvg: StatelessComponent<LinkSvgProps> = (props: LinkSvgProps) => {
    return (
        <svg width="100%" height="100%" >
            <symbol id="test" >
                <rect
                    x={50}
                    y={50}
                    width={50}
                    height={50}
                // stroke="red"
                // fill="yellow"
                // strokeWidth={3}
                />
                <circle cx={200} cy={100} r={50} />
            </symbol>
            <use x={100} y={100} xlinkHref="#test" stroke="red" fill="yellow" strokeWidth={3} />
            <use x={50} y={50} xlinkHref="#test" stroke="black" fill="green" strokeWidth={5} />
        </svg>
    );
};

LinkSvg.defaultProps = {
};

export default LinkSvg;