import React, { useEffect, useState } from 'react';
import { useForm } from './useForm';
import Hello from './Hello';
import { useFetch } from './useFetch';

function App() {
  const [values, handleChange] = useForm({
    email: '',
    password: '',
    firstName: ''
  });
  const [showHello, setShowHello] = useState(true);
  const [count, setCount] = useState(0);
  const { data, loading } = useFetch(`http://numbersapi.com/${count}`);

  /*   useEffect(() => {
    const onMouseMove = e => {
      console.log(e);
    };
    window.addEventListener('mousemove', onMouseMove);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, [values.email, values.password]); */

  useEffect(() => {
    console.log('mount1');
  }, []);

  useEffect(() => {
    console.log('mount2');
  }, []);

  return (
    <div className="App">
      <div>{loading ? 'loading...' : data}</div>
      <button
        onClick={() => {
          setCount(currentCount => currentCount + 1);
        }}>
        Count
      </button>
      <button
        onClick={() => {
          setShowHello(!showHello);
        }}>
        Toggle
      </button>
      {/* showHello && <Hello></Hello> */}
      <input name="email" value={values.email} onChange={handleChange} />
      <input
        name="firstName"
        value={values.firstName}
        onChange={handleChange}
        placeholder="email"
      />
      <input
        type="password"
        name="password"
        value={values.password}
        onChange={handleChange}
      />
    </div>
  );
}

export default App;
