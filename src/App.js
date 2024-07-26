import React, { useState, useEffect } from 'react';
import './App.css';
import InspirationalQuotes from 'inspirational-quotes';

function App() {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  // Functie om een nieuwe quote op te halen en de state bij te werken
  const fetchNewQuote = () => {
    const { text, author } = InspirationalQuotes.getQuote();
    setQuote(text);
    setAuthor(author);
  };

  // Haal een quote op wanneer de component voor het eerst laadt
  useEffect(() => {
    fetchNewQuote();
  }, []);

  // Functie om de pagina te verversen
  const refreshPage = () => {
    window.location.reload();
  };

  return (
    <div className="App">
      <header>
        <h1>Inspirerende Quote</h1>
        <p>"{quote}"</p>
        <p>- {author}</p>
        <button onClick={refreshPage}>Nieuwe Quote</button>
      </header>
    </div>
  );
}

export default App;
