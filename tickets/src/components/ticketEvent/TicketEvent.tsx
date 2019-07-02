import * as React from 'react';

interface TicketEventProps extends React.HtmlHTMLAttributes<{}> {
  eventName: string;
  eventTime: string;
  eventLocation: string;
}

const TicketEvent: React.FC<TicketEventProps> = (props: TicketEventProps) => {
  return (
    <div>
      <h3>{props.eventName}</h3>
      <h4>
        {props.eventTime} at {props.eventLocation}
      </h4>
    </div>
  );
};

TicketEvent.defaultProps = {};

export default TicketEvent;
