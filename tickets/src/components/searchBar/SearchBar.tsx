import * as React from 'react';

interface SearchBarProps extends React.HtmlHTMLAttributes<{}> {
  contents: any | null;
}

const SearchBar: React.FC<SearchBarProps> = (props: SearchBarProps) => {
  const inputRef = React.useRef<HTMLInputElement>(null);
  React.useState();
  let contentsData = null;
  if (props.contents) {
    contentsData = props.contents.events.filter((content: any) => content.name.includes(inputRef.current!.value));
  }

  return (
    <div className="SearchBar">
      <input placeholder="Search" ref={inputRef} />
      {contentsData &&
        contentsData.map((contentData: any) => {
          return <div>{contentData.name}</div>;
        })}
    </div>
  );
};

SearchBar.defaultProps = {};

export default SearchBar;
