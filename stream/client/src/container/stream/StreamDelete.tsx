import * as React from 'react';
import Modal from '../../components/modal/Modal';

interface StreamDeleteProps extends React.HtmlHTMLAttributes<{}> {}

const StreamDelete: React.FC<StreamDeleteProps> = (props: StreamDeleteProps) => {
  return (
    <React.Fragment>
      StreamDelete
      <Modal />
    </React.Fragment>
  );
};

StreamDelete.defaultProps = {};

export default StreamDelete;
