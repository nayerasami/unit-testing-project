import React, { useState } from 'react'

export default function LanguageToggle() {
  const [isEnglish, setIsEnglish] = useState(true);

  const toggleLanguage = () => {
    setIsEnglish(prevIsEnglish => !prevIsEnglish);
  };

  return (
    <div>
      <button onClick={toggleLanguage}>
        {isEnglish ? 'Switch to Arabic' : 'Switch to English'}
      </button>
      <div>
        {isEnglish ? (
          <h1>Hello, World!</h1>
        ) : (
          <h1>مرحبًا بالعالم</h1>
        )}
      </div>
    </div>
  );
}