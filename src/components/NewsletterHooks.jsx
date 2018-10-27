import React, { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('robertoachar@gmail.com');

  const handleName = e => {
    setEmail(e.target.value);
  };

  const handleClick = () => {
    console.log(email);
  };

  return (
    <div>
      <input type="text" value={email} onChange={handleName} />
      <button type="button" onClick={handleClick}>
        Enviar
      </button>
    </div>
  );
};

export default Newsletter;
