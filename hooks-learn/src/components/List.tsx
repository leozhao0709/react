import * as React from 'react';

interface ListProps extends React.HtmlHTMLAttributes<{}> {
  todoList: string[];
}

const List: React.FC<ListProps> = (props: ListProps) => {
  console.log('...List render...');

  return (
    <React.Fragment>
      <ul>
        {props.todoList.map(todo => (
          <li key={todo}>{todo}</li>
        ))}
      </ul>
    </React.Fragment>
  );
};

List.defaultProps = {};

export default List;
