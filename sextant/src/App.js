
import React from 'react';
import './App.css';
import Container from './Container';
import UserIP from './UserIP';


function Banner() {
  return <h1>Welcome to the Site Title</h1>;
}

function Exhibit({ heading, children }) {
  return (
    <div className="exhibit">
      <h2>{heading}</h2>
      {children}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Banner />
      <Exhibit heading="Data Points">
        <p>
          <code>This is Bita</code>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </Exhibit>
      <Container>
        <UserIP ipAddressType="ipv4" />
      </Container>
      <Container>
        <UserIP ipAddressType="ipv6" />
      </Container>



    </div>
    
  );
}

export default App;


