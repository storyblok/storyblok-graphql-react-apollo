import React from 'react';
import './App.css';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';
import Components from './components';

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
    super(props)

    this.state = {
      queryVars: {renderTimestamp: 0},
      fetchPolicy: 'cache-first'
    }

    window.storyblok.on(['change', 'published'], () => {
      this.setState({
        queryVars: {renderTimestamp: Date.now()},
        fetchPolicy: 'network-only'
      })
      this.forceUpdate()
    })
  }

  render() {
    return (
      <Query query={query} variables={this.state.queryVars} fetchPolicy={this.state.fetchPolicy}>
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
