import * as React from 'react';
import List from './List';

interface TodoProps extends React.HtmlHTMLAttributes<{}> {}

export const Todo: React.FC<TodoProps> = (props: TodoProps) => {
  const [todoList, setTodoList] = React.useState<string[]>([]);
  const [inputIsValid, setInputIsValid] = React.useState(false);

  const inputRef = React.useRef<HTMLInputElement>(null);

  const inputOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget.value.trim() === '') {
      setInputIsValid(false);
    } else {
      setInputIsValid(true);
    }
  };

  return (
    <React.Fragment>
      <input
        type="text"
        placeholder="Todo"
        ref={inputRef}
        onChange={e => inputOnChange(e)}
        style={{ backgroundColor: inputIsValid ? 'transparent' : 'red' }}
      />
      <button
        type="button"
        onClick={() => {
          setTodoList([...todoList, inputRef.current!.value]);
          inputRef.current!.value = '';
        }}
      >
        Add
      </button>
      {React.useMemo(
        () => (
          <List todoList={todoList} />
        ),
        [todoList]
      )}
    </React.Fragment>
  );
};

Todo.defaultProps = {};
