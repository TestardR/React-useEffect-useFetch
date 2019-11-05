import React, { useEffect } from 'react';

const Hello = () => {
  useEffect(() => {
    console.log('mount');

    return () => {
      console.log('unmount');
    };
  }, []);

  return <div>Hello</div>;
};

export default Hello;
