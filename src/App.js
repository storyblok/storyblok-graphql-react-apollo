import React from 'react';
import './App.css';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';
import Components from './components'

const query = gql`{
  PageItem(id: "home") {
    id
    slug
    content {
      _uid
      component
      body
      teasered_products(fields: ["name", "image"]) {
        content
      }
    }
  }
}`

class App extends React.Component {
  constructor(props) {
    window.storyblok.on(['change', 'published'], () => {
      this.forceUpdate()
    })
    super(props)
  }

  render() {
    return (
      <Query query={query} variables={{timestamp: Date.now()}} fetchPolicy="network-only">
        {result => {
          if (result.loading) return <p className="loading">loading...</p>;
          if (result.error) return <p className="loading">{result.error.message}</p>;
          return (
            <div className="app">
              {Components(result.data.PageItem.content)}
            </div>
          );
        }}
      </Query>
    );
  }
}

export default App;
