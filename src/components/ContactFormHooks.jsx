import React from 'react';

import useInput from './useInput';

const ContactForm = () => {
  const name = useInput('Roberto Achar');
  const email = useInput('robertoachar@gmail.com');
  const message = useInput('Mensagem vai aqui...');

  return (
    <div>
      <input type="text" {...name} />
      <input type="text" {...email} />
      <textarea rows="3" {...message} />
    </div>
  );
};

export default ContactForm;
