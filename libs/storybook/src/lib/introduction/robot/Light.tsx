import React from 'react';

type Props = {
  color: 'green' | 'orange' | 'red';
};

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
