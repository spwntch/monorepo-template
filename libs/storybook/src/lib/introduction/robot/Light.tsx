import React from 'react';

type Props = {
  /** The color of the light. */
  color?: 'red' | 'yellow' | 'green';
};

/** A constituent component in a traffic light, complete with a configurable color prop. */
const Light = ({ color = 'green' }: Props) => {
  return (
    <div
      style={{
        width: 50,
        height: 50,
        borderRadius: '50%',
        background: color,
      }}
    />
  );
};

export default Light;
