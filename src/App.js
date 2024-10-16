import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [showFinalDestination, setShowFinalDestination] = useState(false);
  const [glitchText, setGlitchText] = useState('DATA PHANTOMS');

  const handleShowFinalDestination = () => {
    setShowFinalDestination(true);
  };

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      const glitchChance = Math.random();
      if (glitchChance > 0.7) {
        setGlitchText('C1RCU1T BR34K3RS');
        setTimeout(() => setGlitchText('C1RCU1T BR34K3RS'), 200);
      }
    }, 2000);

    return () => clearInterval(glitchInterval);
  }, []);

  const encodedMessage = "V2VsbCBkb25lLCBDaXJjdWl0IEJyZWFrZXJzISBZb3XigJl2ZSBzdWNjZXNzZnVsbHkgY29ubmVjdGVkIHRoZSBkb3RzIGFuZCB1bmNvdmVyZWQgdGhlIGhpZGRlbiBtZXNzYWdlOiAnSW5ub3ZhdGlvbiBzcGFya3Mgd2hlcmUgY2lyY3VpdHMgY29udmVyZ2UuJyBZb3VyIGFiaWxpdHkgdG8gcG93ZXIgdGhyb3VnaCBjaGFsbGVuZ2VzIGhhcyBpbGx1bWluYXRlZCB0aGUgcGF0aCBmb3J3YXJkLiBDZWxlYnJhdGUgdGhpcyBhY2hpZXZlbWVudCBhbmQga2VlcCBicmVha2luZyBuZXcgZ3JvdW5kIQ==";

  return (
    <div className="App">
      <div className="cyberpunk-background"></div>
      {!showFinalDestination ? (
        <div className="cyberpunk-container">
          <h1 className="glitch" data-text={glitchText}>{glitchText}</h1>
          <p className="subtext">Welcome to Grid City, 2077</p>
          <button className="cyberpunk-button" onClick={handleShowFinalDestination}>
            JACK IN
          </button>
        </div>
      ) : (
        <div className="encoded-message">
          <p className="message-body">{encodedMessage}</p>
        </div>
      )}
    </div>
  );
}

export default App;
