import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';

const query = gql`{
  PageItem(id: "home") {
    id
    slug
    content {
      _uid
      component
      body
    }
  }
}`

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Query query={query}>
        {result => {
          if (result.loading) return <p>loading...</p>;
          if (result.error) return <p>{result.error.message}</p>;
          return (
            <div>
              {result.data.PageItem.slug}
            </div>
          );
        }}
      </Query>
    </div>
  );
}

export default App;
