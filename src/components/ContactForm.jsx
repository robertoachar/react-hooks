import React from 'react';

import useInput from './useInput';

const ContactForm = () => {
  const name = useInput('Roberto Achar');
  const email = useInput('robertoachar@gmail.com');
  const message = useInput('Mensagem vai aqui...');

  return (
    <div>
      <h2>Forms</h2>
      <input type="text" placeholder="Name" {...name} />
      <input type="text" placeholder="Email" {...email} />
      <textarea rows="3" {...message} />
    </div>
  );
};

export default ContactForm;
