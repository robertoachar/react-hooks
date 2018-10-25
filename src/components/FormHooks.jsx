import React, { useState } from 'react';

const FormHooks = () => {
  const [name, setName] = useState('Roberto Achar');
  const [email, setEmail] = useState('robertoachar@gmail.com');

  return (
    <div>
      <h2>Forms</h2>
      <p>
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder="Name"
        />
      </p>
      <p>
        <input
          type="text"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="Email"
        />
      </p>
    </div>
  );
};

export default FormHooks;
