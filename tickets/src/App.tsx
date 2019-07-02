import React from 'react';
import './App.scss';
import TicketSearchBarArea from './container/searchBarArea/TicketSearchBarArea';
import TicketListArea from './container/ticketListArea/TicketListArea';
import ContentArea from './container/contentArea/ContentArea';
import TicketEventArea from './container/ticketEventArea/TicketEventArea';

const App: React.FC = () => {
  return (
    <div className="App">
      <TicketSearchBarArea />
      <TicketEventArea />
      <main className="App-Main">
        <TicketListArea />
        <ContentArea />
      </main>
    </div>
  );
};

export default App;
