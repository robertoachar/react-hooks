import React, { useState, useEffect } from 'react';

const DocumentTitleHooks = () => {
  const [title, setTitle] = useState('Título...');

  useEffect(() => {
    document.title = title;
  });

  return (
    <div>
      <input
        type="text"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
    </div>
  );
};

export default DocumentTitleHooks;
