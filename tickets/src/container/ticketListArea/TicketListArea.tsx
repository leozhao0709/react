import * as React from 'react';
import './TicketListArea.scss';
import TicketDetail from '../../components/ticketDetail/TicketDetail';
const inventoryData = require('../../data/mock.inventory.json');

interface TicketListAreaProps extends React.HtmlHTMLAttributes<{}> {}

const TicketListArea: React.FC<TicketListAreaProps> = (props: TicketListAreaProps) => {
  const [inventories, setInventories] = React.useState(null as any);
  React.useEffect(() => {
    setInventories(inventoryData);
  }, []);
  return (
    <div className="TicketListArea">
      {inventories &&
        inventories.listing.map((inventory: any, index: number) => {
          return (
            <TicketDetail
              section={inventory.sectionName}
              row={inventory.seats[0].row}
              price={`${inventory.price.currency}${inventory.price.amount}`}
              key={`inventory${index}`}
            />
          );
        })}
    </div>
  );
};

TicketListArea.defaultProps = {};

export default TicketListArea;
