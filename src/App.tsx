import * as React from 'react';
import './style.css';

//stateless Component
export const ListComponent = React.memo((props: any) => {
  console.log('Rendering ListComponent...');

  return (
    <div className="list-container">
      {props?.list?.map((user, index) => (
        <li key={index}>{user + index}</li>
      ))}

      <button onClick={props?.addHandler}> add user</button>
    </div>
  );
});

//stateless Component
const Multiplier = React.memo((props: any) => {
  console.log('Multiplier App...');

  return <div className="container">{props.multi}</div>;
});

//stateFul Component
export default function App() {
  const [count, seCount] = React.useState(0);
  const [list, setList] = React.useState([]);

  console.log('Rendering App...');

  const addHandler = React.useCallback(() => {
    setList((prev) => [...prev, 'User']);
  }, []);

  const multi = React.useMemo(() => {
    return 10 * count;
  }, [count]);

  return (
    <div className="App">
      <ListComponent list={list} addHandler={addHandler} />

      <Multiplier multi={multi} />
      <h1>Count: {count}</h1>
      <div className="">
        <button onClick={() => seCount(count + 1)}>Increment</button>
      </div>
    </div>
  );
}
