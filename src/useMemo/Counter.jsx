import React, { useState, useMemo } from 'react';

const Counter = () => {
  //
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState('light');
  //
  const increment = (num) => {
    console.log('---calling increment---');
    setCount((prev) => prev + num);
  };
  //
  const themeStyle = useMemo(() => {
    console.log('changing ThemeStyle--');
    return {
      backgroundColor: theme === 'light' ? '#fff' : '#000',
      color: theme === 'light' ? '#000' : '#fff',
    };
  }, [theme]);
  ///////
  return (
    <div style={themeStyle}>
      <h2>Count: {count}</h2>
      <div>
        <button onClick={() => increment(1)}>+1</button>
        <button onClick={() => increment(2)}>+2</button>
        <button onClick={() => increment(3)}>+3</button>
      </div>
      <hr />
      <button onClick={() => setTheme('light')}>Light Theme</button>
      <button onClick={() => setTheme('dark')}>Dark Theme</button>
    </div>
  );
};

export default Counter;
