import React from 'react';
import ReactDOM from 'react-dom';

// components
import Navbar from './components/navbar.jsx';

// global styles
import styles from './stylesheets/global.css';

const App = () => {
  return (
  	<Navbar />
  )
};

ReactDOM.render(<App />, document.getElementById('app'));