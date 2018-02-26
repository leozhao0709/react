import * as React from 'react';
import { StatelessComponent } from 'react';
import Animate from 'react-move/Animate';
import { easeExpInOut } from 'd3-ease';

interface FadeAnimationProps {
    // tslint:disable-next-line:no-any
    children: React.ReactElement<any>;
    show: boolean;
    fadeInTime: number;
    fadeOutTime: number;
}

const FadeAnimation: StatelessComponent<FadeAnimationProps> = (props: FadeAnimationProps) => {

    return (
        <div>
            <Animate
                show={props.show}
                start={{
                    opacity: 0,
                }}

                enter={{
                    opacity: [1],
                    timing: { duration: props.fadeInTime, ease: easeExpInOut }
                }}

                leave={{
                    opacity: [0],
                    timing: { duration: props.fadeOutTime, ease: easeExpInOut }
                }}
            >
                {({ opacity }: React.CSSProperties) => {
                    return React.cloneElement(props.children, { style: { opacity } });
                }}
            </Animate>
        </div>
    );
};

FadeAnimation.defaultProps = {
};

export default FadeAnimation;