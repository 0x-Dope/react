import React, { useState } from 'react';
import withStyles from 'react-jss';

const styles = {
  counter: {
    width: 150,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  button: {
    background: 'transparent',
    color: 'white',
    border: '1px solid white',
    padding: '6px 9px',
    cursor: 'pointer',
    outline: 0,
  },
};
const Counter = ({ classes }) => {
  const [count, setCount] = useState(0);
  const countUp = () => setCount(count + 1);
  return (
    <div className={classes.counter}>
      <button className={classes.button} onClick={countUp}>
        Click Me!
      </button>
      <span>{count}</span>
    </div>
  );
};
export default withStyles(styles)(Counter);
