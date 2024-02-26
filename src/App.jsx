import React, { useCallback, useState } from 'react';

const App = () => {
  const [value, setValue] = useState('// Start coding here...');
  let debounceTimer = null;

  // Debounce the handleChange function to execute after the user stops typing for 500ms
  const handleChange = (event) => {
    setValue(event.target.value);

    if (debounceTimer) {
      clearTimeout(debounceTimer);
    }

    debounceTimer = setTimeout(() => {
      console.log(event.target.value); // You can handle the changes here
    }, 6500);
  };

  return (
    <textarea
      value={value}
      onChange={handleChange}
      style={{
        width: '80%',
        marginTop: '20px',
        height: '300px',
        fontFamily: 'monospace',
      }}
    />
  );
};

export default App;
