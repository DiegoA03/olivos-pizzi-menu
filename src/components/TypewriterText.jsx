import { useState, useEffect } from 'react';

function TypewriterText({ text, speed = 80, className = '' }) {
  const [displayedText, setDisplayedText] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  // Efecto de escritura letra por letra (versión robusta con setTimeout)
  useEffect(() => {
    let cancelled = false;
    const timeouts = [];

    function typeUpTo(charCount) {
      if (cancelled || charCount > text.length) return;
      setDisplayedText(text.slice(0, charCount));
      const id = setTimeout(() => typeUpTo(charCount + 1), speed);
      timeouts.push(id);
    }

    setDisplayedText('');
    typeUpTo(1);

    return () => {
      cancelled = true;
      timeouts.forEach(clearTimeout);
    };
  }, [text, speed]);

  // Efecto de parpadeo del cursor
  useEffect(() => {
    const blink = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(blink);
  }, []);

  return (
    <span className={className}>
      {displayedText}
      <span className={showCursor ? 'opacity-100' : 'opacity-0'}>|</span>
    </span>
  );
}

export default TypewriterText;