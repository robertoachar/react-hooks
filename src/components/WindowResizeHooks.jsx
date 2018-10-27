import React, { useState, useEffect } from 'react';

const WindowResizeHooks = () => {
  const [height, setHeight] = useState(window.innerHeight);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setHeight(window.innerHeight);
      setWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });

  return (
    <div>
      Height: {height}
      <br />
      Width: {width}
    </div>
  );
};

export default WindowResizeHooks;
