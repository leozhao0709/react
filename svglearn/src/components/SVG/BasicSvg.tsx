import * as React from 'react';
import { StatelessComponent } from 'react';

interface BasicSvgProps {
}

const BasicSvg: StatelessComponent<BasicSvgProps> = (props: BasicSvgProps) => {
    return (
        <>
            <svg width={500} height={500} >
                {/* g tag means group, we can set some shared properties here */}
                <g
                    strokeWidth={3}
                    stroke="blue"
                    fill="red"
                    transform="rotate(90, 250, 250)"
                >
                    {/* rectangle */}
                    <rect
                        x={100}
                        y={100}
                        width={100}
                        height={100}
                        rx={10} // 圆角半径
                        ry={10} // 圆角半径
                    />
                    <rect
                        x={130}
                        y={140}
                        width={200}
                        height={100}
                        rx={10} // 圆角半径
                        ry={10} // 圆角半径
                        stroke="black"
                        fill="blue"
                        opacity={0.7}
                    />
                    <circle
                        cx={160}
                        cy={230}
                        r={50}
                        opacity={0.7}
                    />
                    <ellipse
                        cx={200}
                        cy={130}
                        rx={30}
                        ry={50}
                        opacity={0.7}
                    />
                    {/* single line */}
                    <line
                        x1={250}
                        y1={100}
                        x2={350}
                        y2={250}
                        opacity={0.5}
                        strokeWidth={5}
                    />
                    {/* multiple line(triangle) */}
                    <polyline
                        points="190,130 280,280 180,280 190,130"
                        opacity={0.7}
                    />
                    {/* self close multiple line */}
                    <polygon
                        opacity={0.7}
                        points="250,50 300,50 300,100 350,100 350,150"
                    />
                </g>
            </svg>
        </>
    );
};

BasicSvg.defaultProps = {
};

export default BasicSvg;