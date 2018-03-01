import * as React from 'react';
import { StatelessComponent } from 'react';

interface PathSvgProps {
}

const PathSvg: StatelessComponent<PathSvgProps> = (props: PathSvgProps) => {
    return (
        <>
            <svg width={500} height={500}>
                <g
                    strokeWidth={5}
                    stroke="red"
                    fill="none"
                >
                    <path
                        d="M150 150 
                            l200 100"
                    />
                    <path
                        d="M150 150 
                            A50 50 0 0 0 100 100"
                    />
                </g>
            </svg>
        </>
    );
};

PathSvg.defaultProps = {
};

export default PathSvg;