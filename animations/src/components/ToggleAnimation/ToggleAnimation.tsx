import * as React from 'react';
import { StatelessComponent } from 'react';
import * as styles from './ToggleAnimation.css';
import FadeAnimationGroup from '../UI/Animations/FadeAnimationGroup/FadeAnimationGroup';

interface ToggleAnimationProps {
    showToggle: boolean;
    toggleClicked: () => void;
    updateClicked: () => void;
    datas: { id: number, backgroundColor: string }[];
}

const ToggleAnimation: StatelessComponent<ToggleAnimationProps> = (props: ToggleAnimationProps) => {

    return (
        <>
            <button onClick={props.toggleClicked} >Toggle</button>
            <button onClick={props.updateClicked} >Update</button>
            <FadeAnimationGroup
                data={props.datas}
                fadeInTime={500}
                fadeOutTime={500}
            >
                {
                    props.datas.map((_, index) => {
                        return <div className={styles[`content${index + 1}`]} key={index} />;
                    })
                }

                {/* <div className={styles.content1} />
                <div className={styles.content2} />
                <div className={styles.content3} /> */}
            </FadeAnimationGroup>

            {/* <FadeAnimation
                show={props.showToggle}
                fadeInTime={500}
                fadeOutTime={500}
            >
                <div className={[styles.content1, styles.content].join(' ')} >
                    <p>aaaaaaaaa</p>
                </div>
            </FadeAnimation> */}

            {/* <NodeGroup
                data={props.datas}
                keyAccessor={(d) => d.id}
                start={(d) => ({
                    opacity: 0,
                    backgroundColor: d.backgroundColor
                })}

                enter={(d, index) => ({
                    opacity: [1],
                    // backgroundColor: [d.backgroundColor],
                    timing: { delay: index * 500, duration: 500, ease: easeExpInOut }
                })}

                update={(d, index) => ({
                    backgroundColor: [d.backgroundColor],
                    timing: { delay: index * 500, duration: 500, ease: easeExpInOut }
                })}

                leave={(d, index) => ({
                    opacity: [0],
                    timing: { delay: (3 - index - 1) * 500, duration: 500, ease: easeExpInOut }
                })}
            >

                {(nodes) => (
                    <div>
                        {nodes.map(({ key, data, state: { opacity, backgroundColor } }) => {
                            return (
                                <div
                                    key={key}
                                    style={{ opacity, backgroundColor }}
                                    className={styles[`content${data.id + 1}`]}
                                >
                                    <p>{opacity}</p>
                                </div>
                            );
                        })}
                    </div>
                )}
            </NodeGroup> */}

        </>
    );
};

ToggleAnimation.defaultProps = {
};

export default ToggleAnimation;