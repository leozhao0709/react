import * as React from 'react';
import './TicketEventArea.scss';
import TicketEvent from '../../components/ticketEvent/TicketEvent';
const eventData = require('../../data/mock.event.json');

interface TicketAreaEventProps extends React.HtmlHTMLAttributes<{}> {}

const TicketEventArea: React.FC<TicketAreaEventProps> = (props: TicketAreaEventProps) => {
  const [ticketEventData, setTicketEventData] = React.useState(null as any);
  React.useEffect(() => {
    setTicketEventData(eventData);
  }, []);

  return (
    <div className="TicketEventArea">
      {ticketEventData && (
        <TicketEvent
          eventName={ticketEventData.name}
          eventTime={ticketEventData.eventDateLocal}
          eventLocation={ticketEventData.venue.address1}
        />
      )}
    </div>
  );
};

TicketEventArea.defaultProps = {};

export default TicketEventArea;
