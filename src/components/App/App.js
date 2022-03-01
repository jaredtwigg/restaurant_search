import React from 'react';
import './App.css';
import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar';
import Yelp from '../../util/Yelp';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      businesses: [],
      popular: ''
    };
    this.searchYelp = this.searchYelp.bind(this);
    this.defaultLoad = this.defaultLoad.bind(this);
  }

  componentDidMount() {
    window.addEventListener('load', this.defaultLoad('', 'Ann Arbor', 'review_count'));
  }

  // componentWillUnmount() { 
  //  window.removeEventListener('load', this.defaultLoad('', 'Ann Arbor', 'review_count'));  
  // }

  searchYelp(term, location, sortBy) {
    Yelp.search(term, location, sortBy).then((businesses) => {
      this.setState({ businesses: businesses, popular: 'false' });  
    });
  }

  defaultLoad(term, location, sortBy) {
    Yelp.search(term, location, sortBy).then((businesses) => {
      this.setState({ businesses: businesses, popular: 'true' });
    });
  }



  render() {
    return (
      <div className="App">
        <h1>forage</h1>
          <SearchBar searchYelp={this.searchYelp} />
          <BusinessList businesses={this.state.businesses} />
      </div>
    );
  }
}

export default App;
