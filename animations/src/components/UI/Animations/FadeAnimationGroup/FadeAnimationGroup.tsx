import * as React from 'react';
import { StatelessComponent } from 'react';
import { NodeGroup } from 'react-move';
import { easeExpInOut } from 'd3-ease';

interface FadeAnimationGroupProps {
    // tslint:disable-next-line:no-any
    children?: React.ReactElement<any>[];
    // tslint:disable-next-line:no-any
    data: any[];
    fadeInTime: number;
    fadeOutTime: number;
}

const FadeAnimationGroup: StatelessComponent<FadeAnimationGroupProps> = (props: FadeAnimationGroupProps) => {
    return (
        <>
            <NodeGroup
                data={props.data}
                keyAccessor={(d) => d.id}

                start={(d) => ({
                    opacity: 0,
                    backgroundColor: d.backgroundColor
                })}

                enter={(d, index) => ({
                    opacity: [1],
                    backgroundColor: [d.backgroundColor],
                    timing: { delay: index * props.fadeInTime, duration: props.fadeInTime, ease: easeExpInOut }
                })}

                update={(d, index) => ({
                    backgroundColor: [d.backgroundColor],
                    timing: { delay: index * props.fadeInTime, duration: props.fadeInTime, ease: easeExpInOut }
                })}

                leave={(d, index) => ({
                    opacity: [0],
                    timing: { delay: index * props.fadeOutTime, duration: props.fadeOutTime, ease: easeExpInOut }
                })}
            >
                {(nodes) => (
                    <>
                        {nodes.map(({ key, data, state: { opacity, backgroundColor } }) => {
                            return props.children!.length ? React.cloneElement(props.children![data.id],
                                // tslint:disable-next-line:align
                                {
                                    style: { opacity, backgroundColor },
                                    key: key
                                }) : <div />;

                        })}
                    </>
                )}
            </NodeGroup>
        </>
    );
};

FadeAnimationGroup.defaultProps = {
};

export default FadeAnimationGroup;