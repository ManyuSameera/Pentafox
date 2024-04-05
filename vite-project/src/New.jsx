import React, { useState, useEffect, useRef, useMemo, useCallback, useContext } from "react";


const CountContext = React.createContext();

function New() {
  const [count, setCount] = useState(0);
  const countRef = useRef(count);

  useEffect(() => {
    countRef.current = count;
  }, [count]);

  const memoizedCount = useMemo(() => countRef.current, [count]);

  const decrementCount = useCallback(() => {
    setCount(prevCount => prevCount - 1);
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <p>Count from useRef: {countRef.current}</p>
      <p>Memoized Count: {memoizedCount}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={decrementCount}>Decrement using useRef</button>
      <CountContext.Provider value={count}>
        <ChildComponent />
      </CountContext.Provider>
    </div>
  );
}

function ChildComponent() {
  const count = useContext(CountContext);
  console.log(import.meta.env.VITE_KEY);
  return (
    <div>
      <p>Count from Context: {count}</p>
      <p>env: {(import.meta.env.VITE_KEY)}</p>
    </div>
  );
}

export default New;
