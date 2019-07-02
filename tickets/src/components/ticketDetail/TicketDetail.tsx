import * as React from 'react';
import './TicketDetail.scss';

interface TicketDetailProps extends React.HtmlHTMLAttributes<{}> {
  section: string;
  row: number;
  price: string;
}

const TicketDetail: React.FC<TicketDetailProps> = (props: TicketDetailProps) => {
  return (
    <div className="TicketDetail">
      <div className="TicketDetail-Section">{props.section}</div>
      <div className="TicketDetail-Row">{props.row}</div>
      <div className="TicketDetail-Price">{props.price}</div>
    </div>
  );
};

TicketDetail.defaultProps = {};

export default TicketDetail;
