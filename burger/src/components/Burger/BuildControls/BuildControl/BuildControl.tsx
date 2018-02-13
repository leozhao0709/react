import * as React from 'react';
import { StatelessComponent } from 'react';
import * as styles from './BuildControl.css';

interface BuildControlProps {
  label: string;
  added: () => void;
  removed: () => void;
  disable: boolean;
}

const BuildControl: StatelessComponent<BuildControlProps> = (props: BuildControlProps) => {
  return (
    <div className={styles.buildControl} >
      <div className={styles.label} >{props.label}</div>
      <button className={styles.more} onClick={props.added} >More</button>
      <button className={styles.less} onClick={props.removed} disabled={props.disable} >Less</button>
    </div>
  );
};

BuildControl.defaultProps = {
};

export default BuildControl;
