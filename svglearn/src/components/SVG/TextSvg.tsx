import * as React from 'react';
import { StatelessComponent } from 'react';

interface TextSvgProps {
}

const TextSvg: StatelessComponent<TextSvgProps> = (props: TextSvgProps) => {
    return (
        <>
            <svg width="100%" height="100%" >
                <text
                    x={50}
                    y={50}
                    stroke="black"
                    fill="red"
                    strokeWidth={2}
                    fontSize={45}
                    // letterSpacing={5}
                    // wordSpacing={15}
                    textDecoration="line-through"
                // transform="rotate(25, 50, 100)"
                // writingMode="tb"
                // direction="rtl"
                // unicodeBidi="bidi-override"
                >
                    <tspan x={150} y={100} >This is my text1</tspan>
                    <tspan x={150} y={200} >This is my text2</tspan>
                </text>
            </svg>
        </>
    );
};

TextSvg.defaultProps = {
};

export default TextSvg;