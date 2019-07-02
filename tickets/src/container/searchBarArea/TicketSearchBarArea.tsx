import * as React from 'react';
import './TicketSearchBarSearchBar.scss';
import SearchBar from '../../components/searchBar/SearchBar';
const searchData = require('../../data/mock.search.json');

interface TicketSearchBarAreaProps extends React.HtmlHTMLAttributes<{}> {}

const TicketSearchBarArea: React.FC<TicketSearchBarAreaProps> = (props: TicketSearchBarAreaProps) => {
  const [searchContent, setSearchContent] = React.useState(null as any);
  React.useEffect(() => {
    setSearchContent(searchData);
  }, []);

  return (
    <div className="TicketSearchBarArea">
      <SearchBar contents={searchContent} />
      <div />
    </div>
  );
};

TicketSearchBarArea.defaultProps = {};

export default TicketSearchBarArea;
