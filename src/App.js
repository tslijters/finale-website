import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import InspirationalQuotes from 'inspirational-quotes';
import Home from './Home'; // Adjust import paths as necessary
import Motivatie from './Motivatie'; // Adjust import paths as necessary
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/motivatie.html" component={MotivatieComponent} />
        {/* other routes */}
      </Switch>
    </Router>
  );
}
function App() {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  // Function to fetch a new quote and update the state
  const fetchNewQuote = () => {
    const { text, author } = InspirationalQuotes.getQuote();
    setQuote(text);
    setAuthor(author);
  };

  // Fetch a quote when the component mounts
  useEffect(() => {
    fetchNewQuote();
  }, []);

  // Function to refresh the page
  const refreshPage = () => {
    window.location.reload();
  };

  return (
    <Router>
      <div className="App">
        <header>
          <h1>Inspirerende Quote</h1>
          <p>"{quote}"</p>
          <p>- {author}</p>
          <button onClick={refreshPage}>Nieuwe Quote</button>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/motivatie" element={<Motivatie />} />
          {/* Add more routes here as needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
