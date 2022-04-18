import logo from './logo.svg';
import './App.css';
import fetchGraphQL from './fetchGraphQL';
import {useEffect} from 'react';

function App() {
  useEffect(() => {
    let isMounted = true;
    fetchGraphQL(`
      query StationNameQuery {
        station(abbreviation: "24TH") {
          name
        }
      }
    `).then(response => {
      console.log('THEN');
      // Avoid updating state if the component unmounted before the fetch completes
      if (!isMounted) {
        return;
      }
      const data = response.data;
      console.log(data);
      // setName(data.repository.name);
    }).catch(error => {
      console.log('CATCH', error);
      console.error(error);
    });

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
