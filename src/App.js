import React, {Component} from 'react';
import './App.css';

import Header from './components/Header';
import Main from './components/Main';

const GET_TWEETS_URL = 'http://localhost:8080/nolla/tweets';
const POST_TWEET_URL = 'http://localhost:8080/nolla/tweet';

class App extends Component {
  state = {
    tweet: '',
    tweets: [],
    charCounter: 0,
    limit: 140
  }

  componentDidMount() {
    this.getAllTweets();
  }

   getAllTweets = async () => {
    
    fetch(GET_TWEETS_URL, {
      method: 'GET',
    })
    .then((response) => response.json())
    .then((res) => this.setState({tweets: res}))
    .catch((error) => console.log('error', error));
  }

  resetTweet = () => {
    this.setState({
      tweet: '',
      charCounter: 0
    })
  }
  postATweet = () => {
    const { tweet: message } = this.state;
    const data = { message };

    fetch(POST_TWEET_URL, {
      method: 'POST',
      contentType: 'application/json',
      body: JSON.stringify(data)
    })
    .then((response) => response.json())
    .then((res) => this.resetTweet())
    .catch((error) => this.resetTweet());
  }

  handleOnchange = (event) => {
    const {value} = event.target;
    
    this.setState({
      tweet: value,
      charCounter: value.length
    })
  };

  handleOnClick = () => {    
    this.postATweet();
  };

  handleKeyPress(event) {
    const key = event.key || event.keyCode || event.which;
    if (key === 'Enter' || key === 13 || key === 0) {
      this.postATweet();
    }
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <Main
          addTweet={this.handleOnClick}
          change={this.handleOnchange}
          addTweetByEnter={(e) => {this.handleKeyPress(e)}}
          tweet={this.state.tweet}
          tweets={this.state.tweets}
          charCounter={this.state.charCounter}
        />
      </div>
    );
  }
}

export default App;
